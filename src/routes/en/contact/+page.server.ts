import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

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

		// TODO: Integrate with email service (e.g. Resend, SendGrid, or SMTP)
		// For now, log the submission and return success
		console.log('Contact form submission:', { name, email, phone, message });

		return { success: true };
	}
};
