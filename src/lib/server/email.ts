import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export async function sendContactEmail(data: ContactFormData, lang: 'tr' | 'en' = 'tr') {
	const { name, email, phone, message } = data;

	const subject = lang === 'tr'
		? `Yeni İletişim Formu: ${name}`
		: `New Contact Form: ${name}`;

	const html = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
	<table role="presentation" style="width: 100%; border-collapse: collapse;">
		<tr>
			<td align="center" style="padding: 40px 20px;">
				<table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">

					<!-- Header -->
					<tr>
						<td style="background: linear-gradient(135deg, #0F172A 0%, #1e293b 100%); padding: 30px 40px; border-radius: 12px 12px 0 0; text-align: center;">
							<h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
								ILTAS<span style="color: #18A058;">.</span>
							</h1>
							<p style="margin: 8px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.7);">
								${lang === 'tr' ? 'Boylama Sistemlerinde Çözüm Ortağınız' : 'Your Partner in Sorting Systems'}
							</p>
						</td>
					</tr>

					<!-- Main Content -->
					<tr>
						<td style="background-color: #ffffff; padding: 40px;">

							<!-- Title -->
							<div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #f4f4f5;">
								<h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #0F172A;">
									${lang === 'tr' ? '📬 Yeni İletişim Formu Mesajı' : '📬 New Contact Form Message'}
								</h2>
								<p style="margin: 8px 0 0 0; font-size: 14px; color: #64748b;">
									${new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric',
										hour: '2-digit',
										minute: '2-digit'
									})}
								</p>
							</div>

							<!-- Contact Details -->
							<table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
								<tr>
									<td style="padding: 12px 16px; background-color: #f8fafc; border-radius: 8px; margin-bottom: 8px;">
										<table role="presentation" style="width: 100%; border-collapse: collapse;">
											<tr>
												<td style="width: 40px; vertical-align: top;">
													<div style="width: 36px; height: 36px; background-color: #18A05820; border-radius: 8px; text-align: center; line-height: 36px;">
														👤
													</div>
												</td>
												<td style="padding-left: 12px; vertical-align: middle;">
													<p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">${lang === 'tr' ? 'Ad Soyad' : 'Name'}</p>
													<p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #0F172A;">${name}</p>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr><td style="height: 8px;"></td></tr>
								<tr>
									<td style="padding: 12px 16px; background-color: #f8fafc; border-radius: 8px;">
										<table role="presentation" style="width: 100%; border-collapse: collapse;">
											<tr>
												<td style="width: 40px; vertical-align: top;">
													<div style="width: 36px; height: 36px; background-color: #1976D220; border-radius: 8px; text-align: center; line-height: 36px;">
														✉️
													</div>
												</td>
												<td style="padding-left: 12px; vertical-align: middle;">
													<p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">${lang === 'tr' ? 'E-posta' : 'Email'}</p>
													<p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #0F172A;">
														<a href="mailto:${email}" style="color: #1976D2; text-decoration: none;">${email}</a>
													</p>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								${phone ? `
								<tr><td style="height: 8px;"></td></tr>
								<tr>
									<td style="padding: 12px 16px; background-color: #f8fafc; border-radius: 8px;">
										<table role="presentation" style="width: 100%; border-collapse: collapse;">
											<tr>
												<td style="width: 40px; vertical-align: top;">
													<div style="width: 36px; height: 36px; background-color: #2DD4BF20; border-radius: 8px; text-align: center; line-height: 36px;">
														📞
													</div>
												</td>
												<td style="padding-left: 12px; vertical-align: middle;">
													<p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">${lang === 'tr' ? 'Telefon' : 'Phone'}</p>
													<p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #0F172A;">
														<a href="tel:${phone.replace(/\s/g, '')}" style="color: #0F172A; text-decoration: none;">${phone}</a>
													</p>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								` : ''}
							</table>

							<!-- Message -->
							<div style="margin-bottom: 25px;">
								<p style="margin: 0 0 12px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">${lang === 'tr' ? 'Mesaj' : 'Message'}</p>
								<div style="padding: 20px; background-color: #f8fafc; border-left: 4px solid #18A058; border-radius: 0 8px 8px 0;">
									<p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
								</div>
							</div>

							<!-- Reply Button -->
							<div style="text-align: center; margin-top: 30px;">
								<a href="mailto:${email}?subject=Re: ${lang === 'tr' ? 'ILTAS İletişim Formu' : 'ILTAS Contact Form'}"
								   style="display: inline-block; padding: 14px 32px; background-color: #18A058; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 8px;">
									${lang === 'tr' ? 'Yanıtla' : 'Reply'}
								</a>
							</div>

						</td>
					</tr>

					<!-- Footer -->
					<tr>
						<td style="background-color: #0F172A; padding: 25px 40px; border-radius: 0 0 12px 12px; text-align: center;">
							<p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.6);">
								ILTAS ${lang === 'tr' ? 'Boylama ve Hasat Sistemleri' : 'Sorting and Harvesting Systems'}
							</p>
							<p style="margin: 8px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.4);">
								Sanayi Mah. 3210 Sk. No:10, Isparta / ${lang === 'tr' ? 'Türkiye' : 'Turkey'}
							</p>
							<p style="margin: 8px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.4);">
								+90 554 550 4450 • info@iltas.com
							</p>
						</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
</body>
</html>
	`.trim();

	const result = await resend.emails.send({
		from: 'ILTAS Web <noreply@iltas.com>',
		to: ['info@iltas.com'],
		replyTo: email,
		subject,
		html
	});

	return result;
}
