<script lang="ts">
	import { onMount } from 'svelte';
	import { HeaderEN, FooterEN } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());
	let statsAnimated = $state(false);
	let animatedValues = $state([0, 0, 0, 0]);

	const stats = [
		{ value: 30, suffix: '+', label: 'Completed Projects', highlight: true },
		{ value: 2020, suffix: '', label: 'Founding Year', highlight: false },
		{ value: 6, suffix: '+', label: 'References', highlight: false },
		{ value: 3, suffix: '', label: 'Service Areas', highlight: false }
	];

	function animateNumbers() {
		if (statsAnimated) return;
		statsAnimated = true;

		const duration = 2000;
		const startTime = performance.now();

		function update(currentTime: number) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			const easeOut = 1 - Math.pow(1 - progress, 3);

			animatedValues = stats.map((stat) => {
				const rawValue = easeOut * stat.value;
				if (stat.value >= 1000 && progress < 1) {
					return Math.floor(rawValue / 100) * 100;
				}
				return Math.floor(rawValue);
			});

			if (progress < 1) {
				requestAnimationFrame(update);
			} else {
				animatedValues = stats.map(stat => stat.value);
			}
		}

		requestAnimationFrame(update);
	}

	const services = [
		{
			icon: 'truck',
			iconColor: '#18A058',
			iconBg: 'from-[#18A05820] to-[#18A05810]',
			title: 'Sorting Line Relocation',
			description: 'Safe dismantling, transportation and installation services for second-hand sorting lines.',
			image: '/images/boylama-hatti-tasima.jpeg'
		},
		{
			icon: 'wrench',
			iconColor: '#1976D2',
			iconBg: 'from-[#1976D220] to-[#1976D210]',
			title: 'Maintenance & Revision',
			description: 'Periodic maintenance, spare parts supply and performance improvement for existing systems.',
			image: '/images/bakim-revizyon.jpeg'
		},
		{
			icon: 'cog',
			iconColor: '#2DD4BF',
			iconBg: 'from-[#2DD4BF20] to-[#2DD4BF10]',
			title: 'Custom Manufacturing',
			description: 'Custom design and production with capacity enhancement solutions.',
			image: '/images/hizmetlerimiz.png'
		}
	];

	const projects = [
		{
			image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
			title: 'OZGOKTASLAR SHD',
			location: 'Turkey'
		},
		{
			image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
			title: 'SADE TARIM',
			location: 'Nigde, Turkey'
		},
		{
			image: '/images/pehlivanlar-shd.jpeg',
			title: 'PEHLIVANLAR SHD',
			location: 'Turkey'
		}
	];

	const references = [
		'GUNESLER SHD',
		'PEHLIVANLAR SHD',
		'EL-SA SHD',
		'KAPAR SHD',
		'KIZILDENIZ SHD',
		'BILAL SEZER SHD'
	];

	onMount(() => {
		mounted = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSections = new Set([...visibleSections, entry.target.id]);
						if (entry.target.id === 'stats') {
							animateNumbers();
						}
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
	<title>ILTAS - Sorting Systems Solutions</title>
</svelte:head>

<div class="flex flex-col min-h-full bg-[var(--iltas-bg)]">
	<HeaderEN activePage="home" />

	<!-- Hero Section -->
	<section
		class="relative flex flex-col justify-end min-h-[500px] md:h-[620px] px-5 md:px-[60px] pb-12 md:pb-20 bg-cover bg-center overflow-hidden"
		style="background-image: url('/images/hero.jpeg');"
	>
		<div class="absolute inset-0 bg-gradient-to-t from-[#0F172AE0] via-[#0F172A80] to-[#0F172A30]"></div>

		<div class="relative z-10 flex flex-col gap-5 md:gap-7 max-w-[650px]">
			<div
				class="flex items-center gap-2 px-3 md:px-[14px] py-[6px] bg-white/10 rounded-full border border-white/25 w-fit backdrop-blur-sm
					{mounted ? 'animate-fade-in-up' : 'opacity-0'}"
			>
				<span class="w-[6px] h-[6px] rounded-full bg-[var(--iltas-green)] animate-pulse-soft"></span>
				<span class="text-[10px] md:text-[11px] font-semibold text-white tracking-[0.5px]">Your trusted partner since 2020</span>
			</div>

			<h1
				class="text-3xl md:text-[54px] font-extrabold text-white leading-[1.1] md:leading-[1.05]
					{mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}"
			>
				Your Partner in<br><span class="gradient-text">Sorting Systems</span>
			</h1>

			<p
				class="text-sm md:text-[17px] text-white/80 leading-[1.6] md:leading-[1.7] max-w-[520px]
					{mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}"
			>
				We provide professional sorting line relocation, maintenance, revision and capacity enhancement solutions for your fruit and vegetable processing facilities.
			</p>

			<div
				class="flex flex-col sm:flex-row items-start sm:items-center gap-3
					{mounted ? 'animate-fade-in-up delay-300' : 'opacity-0'}"
			>
				<a
					href="/en/contact"
					class="group flex items-center gap-2 px-5 md:px-[26px] py-3 md:py-[14px] bg-[var(--iltas-green)] text-white text-sm font-semibold rounded-lg shadow-[0_4px_12px_rgba(24,160,88,0.25)] btn-hover"
				>
					<svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
					</svg>
					Get In Touch
				</a>
				<a
					href="/en/projects"
					class="group flex items-center gap-2 px-5 md:px-[26px] py-3 md:py-[14px] bg-white/10 text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
				>
					<svg class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
					</svg>
					View Our Projects
				</a>
			</div>
		</div>

		<div class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce-subtle hidden md:block">
			<svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
			</svg>
		</div>
	</section>

	<!-- Stats Section -->
	<section
		id="stats"
		data-animate
		class="grid grid-cols-2 md:flex items-center justify-center gap-6 md:gap-[60px] px-5 md:px-[50px] py-8 md:py-[35px] bg-white border-y border-[var(--iltas-border)] shadow-[var(--shadow-md)]
			{isVisible('stats') ? 'animate-fade-in' : 'opacity-0'}"
	>
		{#each stats as stat, i}
			<div
				class="flex flex-col items-center gap-2 md:gap-4 transition-transform duration-300 hover:scale-110
					{i > 0 ? 'md:border-l md:border-[var(--iltas-border)] md:pl-[60px]' : ''}"
				style="animation-delay: {i * 100}ms"
			>
				<span class="text-2xl md:text-[38px] font-extrabold {stat.highlight ? 'text-[var(--iltas-green)]' : 'text-[var(--iltas-dark)]'}">
					{animatedValues[i]}{stat.suffix}
				</span>
				<span class="text-xs md:text-sm font-medium text-[var(--iltas-gray)] text-center">{stat.label}</span>
			</div>
		{/each}
	</section>

	<!-- Services Section -->
	<section
		id="services"
		data-animate
		class="flex flex-col gap-8 md:gap-[50px] px-5 md:px-[50px] py-12 md:py-[70px] bg-[var(--iltas-bg-alt)]"
	>
		<div
			class="flex flex-col gap-3 md:gap-[14px]
				{isVisible('services') ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			<span class="text-xs font-bold text-[var(--iltas-green)] tracking-[2px]">OUR SERVICES</span>
			<h2 class="text-2xl md:text-4xl font-extrabold text-[var(--iltas-dark)]">Expert Solutions</h2>
			<p class="text-sm md:text-base text-[var(--iltas-gray)] leading-[1.6] max-w-[500px]">
				We know the system you need for your sorting, pre-sorting and packaging lines and bring you the right system from around the world.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
			{#each services as service, i}
				<a
					href="/en/services"
					class="group flex flex-col bg-white rounded-xl border border-[var(--iltas-border)] shadow-[var(--shadow-lg)] overflow-hidden card-hover
						{isVisible('services') ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {(i + 1) * 150}ms"
				>
					<div class="relative h-[160px] md:h-[180px] overflow-hidden">
						<div
							class="absolute inset-0 bg-cover bg-center img-zoom"
							style="background-image: url('{service.image}');"
						></div>
						<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					<div class="flex flex-col gap-3 p-5 md:p-6">
						<div class="flex items-center gap-3">
							<div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br {service.iconBg} transition-transform duration-300 group-hover:scale-110">
								{#if service.icon === 'truck'}
									<svg class="w-5 h-5" fill="none" stroke={service.iconColor} stroke-width="2" viewBox="0 0 24 24">
										<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
									</svg>
								{:else if service.icon === 'wrench'}
									<svg class="w-5 h-5" fill="none" stroke={service.iconColor} stroke-width="2" viewBox="0 0 24 24">
										<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
									</svg>
								{:else}
									<svg class="w-5 h-5" fill="none" stroke={service.iconColor} stroke-width="2" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
									</svg>
								{/if}
							</div>
							<h3 class="text-base md:text-lg font-bold text-[var(--iltas-dark)] transition-colors duration-300 group-hover:text-[var(--iltas-green)]">{service.title}</h3>
						</div>
						<p class="text-sm text-[var(--iltas-gray)] leading-[1.7]">{service.description}</p>
						<div class="flex items-center gap-2 mt-auto pt-2 text-[var(--iltas-green)] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
							<span class="text-sm font-medium">Learn More</span>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"/>
							</svg>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- Projects Section -->
	<section
		id="projects"
		data-animate
		class="flex flex-col gap-8 md:gap-[50px] px-5 md:px-[50px] py-12 md:py-[70px] bg-white"
	>
		<div
			class="flex items-end justify-between
				{isVisible('projects') ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			<div class="flex flex-col gap-3 md:gap-[14px]">
				<span class="text-xs font-bold text-[var(--iltas-blue)] tracking-[2px]">PROJECTS</span>
				<h2 class="text-2xl md:text-4xl font-extrabold text-[var(--iltas-dark)]">Completed Projects</h2>
				<p class="text-sm md:text-base text-[var(--iltas-gray)]">
					Examples from our successful projects across Turkey
				</p>
			</div>
			<a
				href="/en/projects"
				class="hidden md:flex items-center gap-2 text-[var(--iltas-green)] font-medium hover:gap-3 transition-all duration-300"
			>
				All Projects
				<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</a>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
			{#each projects as project, i}
				<div
					class="group flex flex-col bg-white rounded-xl border border-[var(--iltas-border)] shadow-[var(--shadow-lg)] overflow-hidden card-hover
						{isVisible('projects') ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {(i + 1) * 150}ms"
				>
					<div class="relative h-[180px] md:h-[200px] overflow-hidden">
						<div
							class="absolute inset-0 bg-cover bg-center img-zoom"
							style="background-image: url('{project.image}');"
						></div>
						<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					<div class="flex flex-col gap-2 p-4 md:p-5">
						<h3 class="text-base md:text-[17px] font-bold text-[var(--iltas-dark)] transition-colors duration-300 group-hover:text-[var(--iltas-green)]">{project.title}</h3>
						<div class="flex items-center gap-2">
							<svg class="w-3.5 h-3.5" fill="none" stroke="var(--iltas-gray-light)" stroke-width="2" viewBox="0 0 24 24">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
							</svg>
							<span class="text-xs md:text-[13px] text-[var(--iltas-gray)]">{project.location}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<a
			href="/en/projects"
			class="md:hidden flex items-center justify-center gap-2 py-3 text-[var(--iltas-green)] font-medium"
		>
			View All Projects
			<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path d="M5 12h14M12 5l7 7-7 7"/>
			</svg>
		</a>
	</section>

	<!-- References Section -->
	<section
		id="references"
		data-animate
		class="flex flex-col items-center gap-5 md:gap-[30px] px-5 md:px-[50px] py-10 md:py-[45px] bg-[var(--iltas-bg-green)] border-t border-[var(--iltas-border)]
			{isVisible('references') ? 'animate-fade-in' : 'opacity-0'}"
	>
		<span class="text-[11px] font-semibold text-[var(--iltas-gray)] tracking-[2px]">OUR REFERENCES</span>
		<div class="flex items-center justify-center gap-4 md:gap-10 flex-wrap">
			{#each references as ref, i}
				<span
					class="text-xs md:text-sm font-semibold text-[var(--iltas-slate)] hover:text-[var(--iltas-green)] transition-all duration-300 hover:scale-110 cursor-default
						{isVisible('references') ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {i * 80}ms"
				>
					{ref}
				</span>
			{/each}
		</div>
	</section>

	<!-- CTA Section -->
	<section
		id="cta"
		data-animate
		class="p-5 md:p-[50px] bg-[var(--iltas-bg-alt)]"
	>
		<div
			class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-5 p-6 md:p-[45px] md:px-[50px] bg-[var(--iltas-dark)] rounded-xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.3)]
				{isVisible('cta') ? 'animate-scale-in' : 'opacity-0'}"
		>
			<div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
				<a
					href="/en/contact"
					class="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[var(--iltas-green)] text-white text-sm font-semibold rounded-lg btn-hover"
				>
					<svg class="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
					</svg>
					Get In Touch
				</a>
				<a
					href="mailto:info@iltasmakine.com"
					class="group flex items-center justify-center gap-2 w-full sm:w-auto px-[22px] py-3 text-white text-sm font-semibold rounded-lg border border-[var(--iltas-slate)] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
				>
					<svg class="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="var(--iltas-gray-light)" stroke-width="2" viewBox="0 0 24 24">
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
					</svg>
					Send Email
				</a>
			</div>
			<div class="flex flex-col gap-2 text-center md:text-right">
				<h3 class="text-xl md:text-[26px] font-bold text-white">Get a free site visit and quote for your project</h3>
				<p class="text-sm md:text-[15px] text-[var(--iltas-gray-light)]">Our expert team will contact you as soon as possible.</p>
			</div>
		</div>
	</section>

	<FooterEN />
</div>
