import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { sendContactEmail } from '$lib/server/email';

// Phone validation: allows international formats like +90 555 123 4567, 05551234567, etc.
function isValidPhone(phone: string): boolean {
	if (!phone) return true; // Phone is optional
	const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
	// Must be 10-15 digits, optionally starting with +
	return /^\+?\d{10,15}$/.test(cleaned);
}

// Message validation: must be at least 20 characters and have 4+ words
function isValidMessage(message: string): { valid: boolean; reason?: string } {
	if (message.length < 20) {
		return { valid: false, reason: 'Mesajınız en az 20 karakter olmalıdır.' };
	}

	const wordCount = message.split(/\s+/).filter(word => word.length > 1).length;
	if (wordCount < 4) {
		return { valid: false, reason: 'Lütfen daha detaylı bir mesaj yazın (en az 4 kelime).' };
	}

	// Check for gibberish (repeated characters like "asdfasdf" or "aaaaa")
	const hasRepeatedPattern = /(.)\1{4,}/.test(message) || /(.{2,})\1{3,}/.test(message);
	if (hasRepeatedPattern) {
		return { valid: false, reason: 'Lütfen geçerli bir mesaj yazın.' };
	}

	return { valid: true };
}

// Name validation: at least 2 words (first + last name)
function isValidName(name: string): boolean {
	const parts = name.split(/\s+/).filter(part => part.length > 0);
	return parts.length >= 2 && parts.every(part => part.length >= 2);
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const phone = data.get('phone')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		const errors: Record<string, string> = {};

		// Name validation
		if (!name) {
			errors.name = 'Ad Soyad gereklidir.';
		} else if (!isValidName(name)) {
			errors.name = 'Lütfen adınızı ve soyadınızı girin.';
		}

		// Email validation
		if (!email) {
			errors.email = 'E-posta gereklidir.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Geçerli bir e-posta adresi girin.';
		}

		// Phone validation (optional but must be valid if provided)
		if (phone && !isValidPhone(phone)) {
			errors.phone = 'Geçerli bir telefon numarası girin (örn: +90 555 123 4567).';
		}

		// Message validation
		if (!message) {
			errors.message = 'Mesajınızı yazın.';
		} else {
			const messageCheck = isValidMessage(message);
			if (!messageCheck.valid) {
				errors.message = messageCheck.reason!;
			}
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, name, email, phone, message });
		}

		try {
			await sendContactEmail({ name, email, phone, message }, 'tr');
			return { success: true };
		} catch (error) {
			console.error('Email send error:', error);
			return fail(500, {
				errors: { form: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
				name,
				email,
				phone,
				message
			});
		}
	}
};
