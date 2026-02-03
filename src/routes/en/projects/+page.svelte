<script lang="ts">
	import { onMount } from 'svelte';
	import { HeaderEN, FooterEN } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());

	const projects = [
		{
			image: '/images/ozgoktaslar-shd.jpeg',
			title: 'OZGOKTASLAR SHD',
			location: 'Turkey',
			description: 'Complete sorting line relocation and installation project'
		},
		{
			image: '/images/sade-tarim.jpeg',
			title: 'SADE TARIM',
			location: 'Nigde, Turkey',
			description: 'Capacity enhancement and modernization project'
		},
		{
			image: '/images/pehlivanlar-shd.jpeg',
			title: 'PEHLIVANLAR SHD',
			location: 'Turkey',
			description: 'New machine manufacturing and line integration'
		},
		{
			image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
			title: 'GUNESLER SHD',
			location: 'Turkey',
			description: 'Maintenance and revision services'
		},
		{
			image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
			title: 'EL-SA SHD',
			location: 'Turkey',
			description: 'Line relocation and reinstallation'
		},
		{
			image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80',
			title: 'BILAL SEZER SHD',
			location: 'Turkey',
			description: 'Technology upgrade project'
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
	<title>Projects - ILTAS | Successful Grading System Installations</title>
	<meta name="description" content="Explore our successful grading line relocation, maintenance, and custom manufacturing projects delivered for leading growers and facilities across Türkiye." />
	<meta property="og:title" content="Projects - ILTAS | Successful Grading System Installations" />
	<meta property="og:description" content="Explore our successful grading line relocation, maintenance, and custom manufacturing projects delivered for leading growers and facilities across Türkiye." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.iltasmakine.com/en/projects" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="ILTAS" />
	<meta property="og:image" content="https://www.iltasmakine.com/images/og-image.jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://www.iltasmakine.com/images/og-image.jpeg" />
	<link rel="canonical" href="https://www.iltasmakine.com/en/projects" />
	<link rel="alternate" hreflang="tr" href="https://www.iltasmakine.com/projeler" />
	<link rel="alternate" hreflang="en" href="https://www.iltasmakine.com/en/projects" />
</svelte:head>

<div class="flex flex-col min-h-full bg-[var(--iltas-bg)]">
	<HeaderEN activePage="projects" />

	<!-- Projects Hero -->
	<section class="flex flex-col items-center gap-4 md:gap-6 px-5 md:px-20 pt-24 md:pt-32 pb-12 md:pb-20 bg-[var(--iltas-bg-alt)] overflow-hidden">
		<span
			class="text-xs font-semibold text-[var(--iltas-green)] tracking-[2px]
				{mounted ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			COMPLETED PROJECTS
		</span>
		<h1
			class="text-2xl md:text-5xl text-[var(--iltas-dark)] text-center font-extrabold
				{mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}"
		>
			Our Successful Projects
		</h1>
		<p
			class="text-sm md:text-lg text-[var(--iltas-gray)] text-center
				{mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}"
		>
			We're proud to have delivered impactful solutions for leading growers and facilities across the country. Each project reflects our commitment to quality, technical excellence, and operational results.
		</p>
	</section>

	<!-- Projects Grid -->
	<section
		id="projects-grid"
		data-animate
		class="px-5 md:px-20 py-8 md:py-10 bg-[var(--iltas-bg-alt)]"
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
			{#each projects as project, i}
				<div
					class="group flex flex-col bg-white rounded-xl border border-[var(--iltas-border)] shadow-[var(--shadow-sm)] overflow-hidden card-hover
						{isVisible('projects-grid') ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {i * 100}ms"
				>
					<div class="relative h-[200px] md:h-[280px] overflow-hidden">
						<div
							class="absolute inset-0 bg-cover bg-center img-zoom"
							style="background-image: url('{project.image}');"
						></div>
						<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div class="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
							<span class="inline-flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-[var(--iltas-dark)]">
								<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
								</svg>
								{project.location}
							</span>
						</div>
					</div>
					<div class="flex flex-col gap-2 md:gap-3 p-4 md:p-6">
						<h3 class="text-base md:text-lg font-semibold text-[var(--iltas-dark)] transition-colors duration-300 group-hover:text-[var(--iltas-green)]">{project.title}</h3>
						<div class="flex items-center gap-2">
							<svg class="w-3.5 md:w-[14px] h-3.5 md:h-[14px]" fill="none" stroke="var(--iltas-gray-light)" stroke-width="2" viewBox="0 0 24 24">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
							</svg>
							<span class="text-xs md:text-[13px] text-[var(--iltas-gray-light)]">{project.location}</span>
						</div>
						<p class="text-sm text-[var(--iltas-gray)]">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<FooterEN />
</div>
