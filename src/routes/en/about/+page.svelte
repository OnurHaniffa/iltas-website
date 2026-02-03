<script lang="ts">
	import { onMount } from 'svelte';
	import { HeaderEN, FooterEN } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());

	const values = [
		{
			icon: 'shield',
			iconColor: '#18A058',
			iconBg: 'from-[#18A05820] to-[#18A05810]',
			title: 'Reliability',
			description: 'We stand behind our word in every project and prioritize customer satisfaction.'
		},
		{
			icon: 'award',
			iconColor: '#1976D2',
			iconBg: 'from-[#1976D220] to-[#1976D210]',
			title: 'Quality',
			description: 'We deliver the highest quality with world-standard equipment and applications.'
		},
		{
			icon: 'users',
			iconColor: '#2DD4BF',
			iconBg: 'from-[#2DD4BF20] to-[#2DD4BF10]',
			title: 'Expertise',
			description: 'Our experienced engineering team creates custom solutions for every project.'
		},
		{
			icon: 'headphones',
			iconColor: '#18A058',
			iconBg: 'from-[#18A05820] to-[#18A05810]',
			title: '24/7 Support',
			description: 'Our technical support team is always by your side and quickly resolves your issues.'
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
	<title>About Us - ILTAS Grading Systems</title>
	<meta name="description" content="Since 2020, ILTAS has been empowering fruit and vegetable processors with cutting-edge grading, conveying, and handling solutions across Türkiye." />
	<meta property="og:title" content="About Us - ILTAS Grading Systems" />
	<meta property="og:description" content="Since 2020, ILTAS has been empowering fruit and vegetable processors with cutting-edge grading, conveying, and handling solutions across Türkiye." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.iltasmakine.com/en/about" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="ILTAS" />
	<meta property="og:image" content="https://www.iltasmakine.com/images/og-image.jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://www.iltasmakine.com/en/about" />
	<link rel="alternate" hreflang="tr" href="https://www.iltasmakine.com/hakkimizda" />
	<link rel="alternate" hreflang="en" href="https://www.iltasmakine.com/en/about" />
</svelte:head>

<div class="flex flex-col min-h-full bg-[var(--iltas-bg)]">
	<HeaderEN activePage="about" />

	<!-- About Hero -->
	<section class="flex flex-col items-center gap-4 md:gap-6 px-5 md:px-[50px] pt-24 md:pt-28 pb-12 md:pb-20 bg-white overflow-hidden">
		<span
			class="text-xs font-bold text-[var(--iltas-green)] tracking-[2px]
				{mounted ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			ABOUT US
		</span>
		<h1
			class="text-2xl md:text-[46px] font-extrabold text-[var(--iltas-dark)] leading-[1.2] md:leading-[1.1] text-center max-w-[700px]
				{mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}"
		>
			Who We Are
		</h1>
		<p
			class="text-sm md:text-[17px] text-[var(--iltas-gray)] leading-[1.6] text-center max-w-[600px]
				{mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}"
		>
			Since 2020, ILTAS has been empowering fruit and vegetable processors with cutting-edge grading, conveying, and handling solutions. We are engineers and problem-solvers at heart — delivering bespoke equipment that's built to perform.
		</p>
	</section>

	<!-- Story Section -->
	<section
		id="story"
		data-animate
		class="flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px] px-5 md:px-[50px] py-12 md:py-[70px] bg-[var(--iltas-bg-alt)] overflow-hidden"
	>
		<div
			class="w-full lg:w-[500px] h-[250px] md:h-[400px] rounded-xl bg-cover bg-center shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-500 hover:scale-[1.02] flex-shrink-0
				{isVisible('story') ? 'animate-fade-in-left' : 'opacity-0'}"
			style="background-image: url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80');"
		></div>
		<div
			class="flex flex-col gap-4 md:gap-6 flex-1
				{isVisible('story') ? 'animate-fade-in-right' : 'opacity-0'}"
		>
			<span class="text-xs font-bold text-[var(--iltas-green)] tracking-[2px]">OUR STORY</span>
			<h2 class="text-xl md:text-[30px] font-extrabold text-[var(--iltas-dark)] leading-[1.3]">
				A Company Built on Quality and Trust
			</h2>
			<p class="text-sm md:text-[15px] text-[var(--iltas-gray)] leading-[1.7]">
				Our mission is simple: Deliver reliable, high-performance systems / Improve operational efficiency / Provide seamless service from concept to completion
			</p>
			<p class="text-sm md:text-[15px] text-[var(--iltas-gray)] leading-[1.7]">
				With industry experience and deep technical expertise, ILTAS supports growers, packhouses, and producers across Türkiye with turnkey solutions tailored to your needs.
			</p>
		</div>
	</section>

	<!-- Values Section -->
	<section
		id="values"
		data-animate
		class="flex flex-col items-center gap-10 md:gap-[60px] px-5 md:px-[50px] py-12 md:py-[70px] bg-white"
	>
		<div
			class="flex flex-col items-center gap-3 md:gap-4
				{isVisible('values') ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			<span class="text-xs font-bold text-[var(--iltas-blue)] tracking-[2px]">OUR VALUES</span>
			<h2 class="text-2xl md:text-4xl font-extrabold text-[var(--iltas-dark)] text-center">Values That Set Us Apart</h2>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
			{#each values as value, i}
				<div
					class="group flex flex-col items-center gap-4 p-6 md:p-8 bg-white rounded-xl border border-[var(--iltas-border)] shadow-[var(--shadow-lg)] card-hover
						{isVisible('values') ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {(i + 1) * 100}ms"
				>
					<div class="flex items-center justify-center w-14 md:w-16 h-14 md:h-16 rounded-full bg-gradient-to-br {value.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
						{#if value.icon === 'shield'}
							<svg class="w-6 md:w-7 h-6 md:h-7" fill="none" stroke={value.iconColor} stroke-width="2" viewBox="0 0 24 24">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
							</svg>
						{:else if value.icon === 'award'}
							<svg class="w-6 md:w-7 h-6 md:h-7" fill="none" stroke={value.iconColor} stroke-width="2" viewBox="0 0 24 24">
								<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
							</svg>
						{:else if value.icon === 'users'}
							<svg class="w-6 md:w-7 h-6 md:h-7" fill="none" stroke={value.iconColor} stroke-width="2" viewBox="0 0 24 24">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else}
							<svg class="w-6 md:w-7 h-6 md:h-7" fill="none" stroke={value.iconColor} stroke-width="2" viewBox="0 0 24 24">
								<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
							</svg>
						{/if}
					</div>
					<h3 class="text-base md:text-lg font-semibold text-[var(--iltas-dark)] text-center transition-colors duration-300 group-hover:text-[var(--iltas-green)]">{value.title}</h3>
					<p class="text-sm text-[var(--iltas-gray)] leading-[1.6] text-center">{value.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<FooterEN />
</div>
