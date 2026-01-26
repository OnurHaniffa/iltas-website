<script lang="ts">
	import { onMount } from 'svelte';
	import { HeaderEN, FooterEN } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());

	const services = [
		{
			num: '01',
			numColor: '#18A058',
			title: 'Sorting Line Relocation',
			description: 'Looking for a second-hand sorting line? Or found one and need it dismantled and reinstalled? ILTAS Sorting and Harvesting Systems is expert in this! Our professional team provides safe dismantling, transportation and installation services at new locations.',
			image: '/images/boylama-hatti-tasima.jpeg',
			items: [
				'Professional dismantling and installation',
				'Site assessment and planning',
				'Logistics and transportation support'
			],
			itemColor: '#18A058',
			bgColor: 'bg-white',
			hasRoundedCorner: true,
			imageFirst: true
		},
		{
			num: '02',
			numColor: '#1976D2',
			title: 'Maintenance & Revision',
			description: 'Need a solution to increase capacity in your existing sorting line? ILTAS Sorting and Harvesting Systems is expert in this. We keep your system running at maximum efficiency with periodic maintenance, technology upgrades and 24/7 technical support.',
			image: '/images/bakim-revizyon.jpeg',
			items: [
				'Periodic maintenance programs',
				'Technology upgrades and modernization',
				'24/7 technical support'
			],
			itemColor: '#1976D2',
			bgColor: 'bg-[var(--iltas-bg-alt)]',
			hasRoundedCorner: false,
			imageFirst: false
		},
		{
			num: '03',
			numColor: '#2DD4BF',
			title: 'Custom Manufacturing',
			description: 'We know the system you need for your sorting, pre-sorting, and packaging lines and bring you the right system from around the world. We offer capacity enhancement solutions with custom machine manufacturing and turnkey project management.',
			image: '/images/hizmetlerimiz.png',
			items: [
				'Custom machine manufacturing',
				'Capacity enhancement solutions',
				'Turnkey project management'
			],
			itemColor: '#2DD4BF',
			bgColor: 'bg-white',
			hasRoundedCorner: true,
			imageFirst: true
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
	<title>Services - ILTAS</title>
</svelte:head>

<div class="flex flex-col min-h-full bg-[var(--iltas-bg)]">
	<HeaderEN activePage="services" />

	<!-- Services Hero -->
	<section class="flex flex-col items-center gap-4 md:gap-6 px-5 md:px-20 pt-24 md:pt-32 pb-12 md:pb-20 bg-[var(--iltas-bg-alt)] overflow-hidden">
		<span
			class="text-xs font-semibold text-[var(--iltas-green)] tracking-[2px]
				{mounted ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			OUR SERVICES
		</span>
		<h1
			class="text-2xl md:text-5xl text-[var(--iltas-dark)] text-center font-extrabold
				{mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}"
		>
			Professional Sorting Solutions
		</h1>
		<p
			class="text-sm md:text-lg text-[var(--iltas-gray)] leading-[1.6] text-center max-w-[600px]
				{mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}"
		>
			We provide comprehensive services for your fruit and vegetable processing facilities
		</p>
	</section>

	<!-- Service Sections -->
	{#each services as service, i}
		<section
			id="service-{i}"
			data-animate
			class="flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px] p-5 md:p-20 {service.bgColor} {service.hasRoundedCorner ? 'mx-2 md:mx-4 my-2 rounded-xl md:rounded-2xl border border-[var(--iltas-border)] shadow-[var(--shadow-sm)] transition-all duration-500 hover:shadow-[var(--shadow-lg)]' : ''}"
		>
			{#if service.imageFirst}
				<div
					class="w-full lg:w-[550px] h-[250px] md:h-[400px] rounded-xl bg-cover bg-center flex-shrink-0 transition-transform duration-500 hover:scale-[1.02] order-1 lg:order-1
						{isVisible(`service-${i}`) ? 'animate-fade-in-left' : 'opacity-0'}"
					style="background-image: url('{service.image}');"
				></div>
				<div
					class="flex flex-col gap-4 md:gap-6 flex-1 order-2 lg:order-2
						{isVisible(`service-${i}`) ? 'animate-fade-in-right' : 'opacity-0'}"
				>
					<span class="text-4xl md:text-5xl font-bold transition-transform duration-300 hover:scale-110 inline-block w-fit" style="color: {service.numColor};">{service.num}</span>
					<h2 class="text-xl md:text-[32px] text-[var(--iltas-dark)] font-extrabold">{service.title}</h2>
					<p class="text-sm md:text-[15px] text-[var(--iltas-gray)] leading-[1.7]">{service.description}</p>
					<div class="flex flex-col gap-3">
						{#each service.items as item, j}
							<div
								class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
								style="animation-delay: {j * 100}ms"
							>
								<svg class="w-4 md:w-[18px] h-4 md:h-[18px] flex-shrink-0" fill="none" stroke={service.itemColor} stroke-width="2" viewBox="0 0 24 24">
									<polyline points="20 6 9 17 4 12"/>
								</svg>
								<span class="text-sm text-[var(--iltas-gray)]">{item}</span>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<div
					class="flex flex-col gap-4 md:gap-6 flex-1 order-2 lg:order-1
						{isVisible(`service-${i}`) ? 'animate-fade-in-left' : 'opacity-0'}"
				>
					<span class="text-4xl md:text-5xl font-bold transition-transform duration-300 hover:scale-110 inline-block w-fit" style="color: {service.numColor};">{service.num}</span>
					<h2 class="text-xl md:text-[32px] text-[var(--iltas-dark)] font-extrabold">{service.title}</h2>
					<p class="text-sm md:text-[15px] text-[var(--iltas-gray)] leading-[1.7]">{service.description}</p>
					<div class="flex flex-col gap-3">
						{#each service.items as item, j}
							<div
								class="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
								style="animation-delay: {j * 100}ms"
							>
								<svg class="w-4 md:w-[18px] h-4 md:h-[18px] flex-shrink-0" fill="none" stroke={service.itemColor} stroke-width="2" viewBox="0 0 24 24">
									<polyline points="20 6 9 17 4 12"/>
								</svg>
								<span class="text-sm text-[var(--iltas-gray)]">{item}</span>
							</div>
						{/each}
					</div>
				</div>
				<div
					class="w-full lg:w-[550px] h-[250px] md:h-[400px] rounded-xl bg-cover bg-center flex-shrink-0 transition-transform duration-500 hover:scale-[1.02] order-1 lg:order-2
						{isVisible(`service-${i}`) ? 'animate-fade-in-right' : 'opacity-0'}"
					style="background-image: url('{service.image}');"
				></div>
			{/if}
		</section>
	{/each}

	<FooterEN />
</div>
