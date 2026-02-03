import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { sendContactEmail } from '$lib/server/email';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const phone = data.get('phone')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		const errors: Record<string, string> = {};

		if (!name) errors.name = 'Full name is required.';
		if (!email) {
			errors.email = 'Email is required.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address.';
		}
		if (!message) errors.message = 'Please enter your message.';

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, name, email, phone, message });
		}

		try {
			await sendContactEmail({ name, email, phone, message }, 'en');
			return { success: true };
		} catch (error) {
			console.error('Email send error:', error);
			return fail(500, {
				errors: { form: 'Failed to send message. Please try again later.' },
				name,
				email,
				phone,
				message
			});
		}
	}
};
