<script lang="ts">
	import { onMount } from 'svelte';
	import { HeaderEN, FooterEN } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());

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
			value: 'Sanayi mah. 3210 sk. No:10, Isparta/Merkez, Turkey',
			href: '#'
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
	<title>Contact - ILTAS</title>
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
				<h1 class="text-2xl md:text-[42px] text-[var(--iltas-dark)] font-extrabold leading-tight">Get in Touch</h1>
				<p class="text-sm md:text-base text-[var(--iltas-gray)] leading-[1.6] max-w-[400px]">
					Contact us for free site assessment and quotation for your projects. Our expert team will get back to you as soon as possible.
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

			<form class="flex flex-col gap-5 md:gap-6">
				<!-- Name & Email Row -->
				<div class="flex flex-col sm:flex-row gap-4">
					<div class="flex flex-col gap-2 flex-1">
						<label for="name" class="text-[13px] font-medium text-[var(--iltas-gray)]">Full Name</label>
						<input
							type="text"
							id="name"
							placeholder="Enter your name"
							class="h-11 md:h-12 px-4 bg-[var(--iltas-bg-alt)] rounded-lg border border-[var(--iltas-border)] text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)]"
						/>
					</div>
					<div class="flex flex-col gap-2 flex-1">
						<label for="email" class="text-[13px] font-medium text-[var(--iltas-gray)]">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							class="h-11 md:h-12 px-4 bg-[var(--iltas-bg-alt)] rounded-lg border border-[var(--iltas-border)] text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)]"
						/>
					</div>
				</div>

				<!-- Phone -->
				<div class="flex flex-col gap-2">
					<label for="phone" class="text-[13px] font-medium text-[var(--iltas-gray)]">Phone</label>
					<input
						type="tel"
						id="phone"
						placeholder="Enter your phone number"
						class="h-11 md:h-12 px-4 bg-[var(--iltas-bg-alt)] rounded-lg border border-[var(--iltas-border)] text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)]"
					/>
				</div>

				<!-- Message -->
				<div class="flex flex-col gap-2">
					<label for="message" class="text-[13px] font-medium text-[var(--iltas-gray)]">Your Message</label>
					<textarea
						id="message"
						placeholder="Tell us about your project..."
						rows="5"
						class="p-4 bg-[var(--iltas-bg-alt)] rounded-lg border border-[var(--iltas-border)] text-sm text-[var(--iltas-dark)] placeholder:text-[var(--iltas-gray-light)] resize-none transition-all duration-300 focus:outline-none focus:border-[var(--iltas-green)] focus:ring-2 focus:ring-[var(--iltas-green-light)]"
					></textarea>
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					class="group flex items-center justify-center gap-[10px] h-12 md:h-[52px] bg-[var(--iltas-green)] text-white text-sm md:text-base font-semibold rounded-lg btn-hover"
				>
					<svg class="w-4 md:w-[18px] h-4 md:h-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
					</svg>
					Send Message
				</button>
			</form>
		</div>
	</section>

	<FooterEN />
</div>
