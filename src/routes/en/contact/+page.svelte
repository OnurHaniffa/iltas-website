<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { HeaderEN, FooterEN } from '$lib/components/layout';

	let { form } = $props();
	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());
	let submitting = $state(false);

	const contactInfo = [
		{
			icon: 'phone',
			iconColor: '#18A058',
			iconBg: 'bg-[#18A05820]',
			label: 'Phone',
			value: '+90 554 550 4450',
			href: 'tel:+905545504450'
		},
		{
			icon: 'mail',
			iconColor: '#1976D2',
			iconBg: 'bg-[#1976D220]',
			label: 'Email',
			value: 'info@iltasmakine.com',
			href: 'mailto:info@iltasmakine.com'
		},
		{
			icon: 'map-pin',
			iconColor: '#2DD4BF',
			iconBg: 'bg-[#2DD4BF20]',
			label: 'Address',
			value: 'Sanayi Mah. 3210 Sk. No:10, Isparta / Turkey',
			href: 'https://maps.google.com/?q=Sanayi+Mah+3210+Sk+No:10+Isparta+Turkey'
		},
		{
			icon: 'calendar',
			iconColor: '#18A058',
			iconBg: 'bg-[#18A05820]',
			label: 'Working Hours',
			value: 'Monday - Friday: 09:00 - 18:00',
			href: '#'
		}
	];

	onMount(() => {
		mounted = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSections = new Set([...visibleSections, entry.target.id]);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		document.querySelectorAll('[data-animate]').forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});

	function isVisible(id: string): boolean {
		return visibleSections.has(id);
	}
</script>

<svelte:head>
	<title>Contact - ILTAS | Get a Free Quote for Your Project</title>
	<meta name="description" content="Contact ILTAS for a free site visit and quote. Grading system relocation, maintenance, and custom manufacturing. Based in Isparta, Türkiye. Call +90 554 550 4450." />
	<meta property="og:title" content="Contact - ILTAS | Get a Free Quote for Your Project" />
	<meta property="og:description" content="Contact ILTAS for a free site visit and quote. Grading system relocation, maintenance, and custom manufacturing. Based in Isparta, Türkiye. Call +90 554 550 4450." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://iltas-website.vercel.app/en/contact" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="ILTAS" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://iltas-website.vercel.app/en/contact" />
	<link rel="alternate" hreflang="tr" href="https://iltas-website.vercel.app/iletisim" />
	<link rel="alternate" hreflang="en" href="https://iltas-website.vercel.app/en/contact" />
</svelte:head>

<div class="flex flex-col min-h-full bg-[var(--iltas-bg)]">
	<HeaderEN activePage="contact" />

	<!-- Contact Main -->
	<section class="flex flex-col lg:flex-row gap-8 lg:gap-[60px] px-5 md:px-20 pt-24 md:pt-32 pb-12 md:pb-20 bg-[var(--iltas-bg-alt)] overflow-hidden">
		<!-- Contact Info -->
		<div
			class="flex flex-col gap-6 md:gap-10 w-full lg:w-[450px]
				{mounted ? 'animate-fade-in-left' : 'opacity-0'}"
		>
			<div class="flex flex-col gap-3 md:gap-4">
				<span class="text-xs font-medium text-[var(--iltas-green)] tracking-[2px] font-semibold">CONTACT</span>
				<h1 class="text-2xl md:text-[42px] text-[var(--iltas-dark)] font-extrabold leading-tight">Start Your Next Project with Us</h1>
				<p class="text-sm md:text-base text-[var(--iltas-gray)] leading-[1.6] max-w-[400px]">
					Have a requirement, plan, or question? Let's talk. Our team responds quickly and will help you take the first step — whether it's a quote, technical consultation, or site assessment.
				</p>
			</div>

			<div class="flex flex-col gap-4 md:gap-6">
				{#each contactInfo as info, i}
					<a
						href={info.href}
						class="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
						style="animation-delay: {i * 100}ms"
					>
						<div class="flex items-center justify-center w-11 md:w-12 h-11 md:h-12 rounded-xl {info.iconBg} transition-all duration-300 hover:scale-110 hover:rotate-6">
							{#if info.icon === 'phone'}
								<svg class="w-5 md:w-[22px] h-5 md:h-[22px]" fill="none" stroke={info.iconColor} stroke-width="2" viewBox="0 0 24 24">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
								</svg>
							{:else if info.icon === 'mail'}
								<svg class="w-5 md:w-[22px] h-5 md:h-[22px]" fill="none" stroke={info.iconColor} stroke-width="2" viewBox="0 0 24 24">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
								</svg>
							{:else if info.icon === 'map-pin'}
								<svg class="w-5 md:w-[22px] h-5 md:h-[22px]" fill="none" stroke={info.iconColor} stroke-width="2" viewBox="0 0 24 24">
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
								</svg>
							{:else}
								<svg class="w-5 md:w-[22px] h-5 md:h-[22px]" fill="none" stroke={info.iconColor} stroke-width="2" viewBox="0 0 24 24">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
							{/if}
						</div>
						<div class="flex flex-col gap-0.5 md:gap-1">
							<span class="text-xs font-medium text-[var(--iltas-gray-light)]">{info.label}</span>
							<span class="text-sm md:text-base font-medium text-[var(--iltas-dark)]">{info.value}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Contact Form -->
		<div
			class="flex-1 flex flex-col gap-5 md:gap-6 p-6 md:p-10 bg-white rounded-xl md:rounded-2xl border border-[var(--iltas-border)] shadow-[var(--shadow-md)] transition-all duration-500 hover:shadow-[var(--shadow-xl)]
				{mounted ? 'animate-fade-in-right' : 'opacity-0'}"
		>
			<h2 class="text-lg md:text-xl font-semibold text-[var(--iltas-dark)]">Send a Message</h2>

			{#if form?.success}
				<div class="flex items-center gap-3 p-4 bg-[#18A05815] border border-[#18A05830] rounded-lg">
					<svg class="w-5 h-5 text-[var(--iltas-green)] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
					</svg>
					<p class="text-sm text-[var(--iltas-dark)]">Your message has been sent successfully. We will get back to you shortly.</p>
				</div>
			{/if}

			<form
				method="POST"
				use:enhance={() => {
					submitting = true;
					return async ({ update }) => {
						await update();
						submitting = false;
					};
				}}
				class="flex flex-col gap-5 md:gap-6"
			>
				<!-- Name & Email Row -->
				<div class="flex flex-col sm:flex-row gap-4">
					<div class="flex flex-col gap-2 flex-1">
						<label for="name" class="text-[13px] font-medium text-[var(--iltas-gray)]">Full Name</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							value={form?.name ?? ''}
							placeholder="Enter your name"
							class="h-11 md:h-12 px-4 bg-[var(--iltas-bg-alt)] rounded-lg border text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)] {form?.errors?.name ? 'border-red-400' : 'border-[var(--iltas-border)]'}"
						/>
						{#if form?.errors?.name}<span class="text-xs text-red-500">{form.errors.name}</span>{/if}
					</div>
					<div class="flex flex-col gap-2 flex-1">
						<label for="email" class="text-[13px] font-medium text-[var(--iltas-gray)]">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={form?.email ?? ''}
							placeholder="Enter your email"
							class="h-11 md:h-12 px-4 bg-[var(--iltas-bg-alt)] rounded-lg border text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)] {form?.errors?.email ? 'border-red-400' : 'border-[var(--iltas-border)]'}"
						/>
						{#if form?.errors?.email}<span class="text-xs text-red-500">{form.errors.email}</span>{/if}
					</div>
				</div>

				<!-- Phone -->
				<div class="flex flex-col gap-2">
					<label for="phone" class="text-[13px] font-medium text-[var(--iltas-gray)]">Phone</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={form?.phone ?? ''}
						placeholder="+90 555 123 4567"
						class="h-11 md:h-12 px-4 bg-[var(--iltas-bg-alt)] rounded-lg border text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)] {form?.errors?.phone ? 'border-red-400' : 'border-[var(--iltas-border)]'}"
					/>
					{#if form?.errors?.phone}<span class="text-xs text-red-500">{form.errors.phone}</span>{/if}
				</div>

				<!-- Message -->
				<div class="flex flex-col gap-2">
					<label for="message" class="text-[13px] font-medium text-[var(--iltas-gray)]">Your Message</label>
					<textarea
						id="message"
						name="message"
						required
						placeholder="Tell us about your project..."
						rows="5"
						class="p-4 bg-[var(--iltas-bg-alt)] rounded-lg border text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] resize-none transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)] {form?.errors?.message ? 'border-red-400' : 'border-[var(--iltas-border)]'}"
					>{form?.message ?? ''}</textarea>
					{#if form?.errors?.message}<span class="text-xs text-red-500">{form.errors.message}</span>{/if}
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={submitting}
					class="group flex items-center justify-center gap-[10px] h-12 md:h-[52px] bg-[var(--iltas-green)] text-white text-sm md:text-base font-semibold rounded-lg btn-hover disabled:opacity-60 disabled:cursor-not-allowed"
				>
					{#if submitting}
						<svg class="w-4 md:w-[18px] h-4 md:h-[18px] animate-spin" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
						</svg>
						Sending...
					{:else}
						<svg class="w-4 md:w-[18px] h-4 md:h-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
						</svg>
						Send Message
					{/if}
				</button>
			</form>
		</div>
	</section>

	<FooterEN />
</div>
