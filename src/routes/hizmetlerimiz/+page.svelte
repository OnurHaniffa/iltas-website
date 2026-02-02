<script lang="ts">
	import { onMount } from 'svelte';
	import { Header, Footer } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());

	const services = [
		{
			num: '01',
			numColor: '#18A058',
			title: 'Boylama Hattı Taşıma',
			description: 'Mevcut veya ikinci el boylama hatlarının söküm, taşıma ve yeniden kurulum işlemlerini güvenli ve planlı şekilde gerçekleştiriyoruz. Makinenizin değerini koruyarak minimum duruş süresi ile hizmet veriyoruz.',
			image: '/images/boylama-hatti-tasima.jpeg',
			items: [
				'Profesyonel söküm ve kurulum',
				'Yer tespit ve planlama',
				'Lojistik ve nakliye desteği'
			],
			itemColor: '#18A058',
			bgColor: 'bg-white',
			hasRoundedCorner: true,
			imageFirst: true
		},
		{
			num: '02',
			numColor: '#1976D2',
			title: 'Bakım & Revizyon',
			description: 'Boylama ve taşıma sistemleriniz için periyodik bakım, parça değişimi, kapasite artırımı ve performans iyileştirme hizmetleri sunuyoruz. Sistemlerinizin ömrünü uzatıyoruz.',
			image: '/images/bakim-revizyon.jpeg',
			items: [
				'Periyodik bakım programları',
				'Teknoloji güncelleme ve modernizasyon',
				'7/24 teknik destek'
			],
			itemColor: '#1976D2',
			bgColor: 'bg-[var(--iltas-bg-alt)]',
			hasRoundedCorner: false,
			imageFirst: false
		},
		{
			num: '03',
			numColor: '#2DD4BF',
			title: 'Yeni Makine İmalatı',
			description: 'İhtiyaca özel tasarlanan yeni makineler ile üretim süreçlerinizi bir üst seviyeye taşıyoruz. Kapasite, ürün çeşidi ve tesis yapınıza göre özel çözümler üretiyoruz.',
			image: '/images/hizmetlerimiz.png',
			items: [
				'Özel tasarım makine imalatı',
				'Kapasite arttırma çözümleri',
				'Anahtar teslim proje yönetimi'
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
	<title>Hizmetlerimiz - ILTAS | Boylama Hattı Taşıma, Bakım & Yeni İmalat</title>
	<meta name="description" content="Boylama hattı taşıma, bakım ve revizyon, yeni makine imalatı. ILTAS olarak üretim hattınız için uçtan uca profesyonel çözümler sunuyoruz." />
	<meta property="og:title" content="Hizmetlerimiz - ILTAS | Boylama Hattı Taşıma, Bakım & Yeni İmalat" />
	<meta property="og:description" content="Boylama hattı taşıma, bakım ve revizyon, yeni makine imalatı. ILTAS olarak üretim hattınız için uçtan uca profesyonel çözümler sunuyoruz." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://iltas-website.vercel.app/hizmetlerimiz" />
	<meta property="og:locale" content="tr_TR" />
	<meta property="og:site_name" content="ILTAS" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://iltas-website.vercel.app/hizmetlerimiz" />
	<link rel="alternate" hreflang="tr" href="https://iltas-website.vercel.app/hizmetlerimiz" />
	<link rel="alternate" hreflang="en" href="https://iltas-website.vercel.app/en/services" />
</svelte:head>

<div class="flex flex-col min-h-full bg-[var(--iltas-bg)]">
	<Header activePage="services" />

	<!-- Services Hero -->
	<section class="flex flex-col items-center gap-4 md:gap-6 px-5 md:px-20 pt-24 md:pt-32 pb-12 md:pb-20 bg-[var(--iltas-bg-alt)] overflow-hidden">
		<span
			class="text-xs font-medium text-[var(--iltas-green)] tracking-[2px] font-bold
				{mounted ? 'animate-fade-in-up' : 'opacity-0'}"
		>
			HIZMETLERIMIZ
		</span>
		<h1
			class="text-2xl md:text-5xl text-[var(--iltas-dark)] text-center font-extrabold
				{mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}"
		>
			Üretim Hattınız İçin Uçtan Uca Çözümler
		</h1>
		<p
			class="text-sm md:text-lg text-[var(--iltas-gray)] leading-[1.6] text-center max-w-[600px]
				{mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}"
		>
			ILTAS olarak; mevcut sistemlerinizi geliştiren, yeni yatırımlarınızı güvenle hayata geçiren ve operasyonel sürekliliği sağlayan kapsamlı hizmetler sunuyoruz.
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
					<span class="text-4xl md:text-5xl font-medium font-bold transition-transform duration-300 hover:scale-110 inline-block w-fit" style="color: {service.numColor};">{service.num}</span>
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
					<span class="text-4xl md:text-5xl font-medium font-bold transition-transform duration-300 hover:scale-110 inline-block w-fit" style="color: {service.numColor};">{service.num}</span>
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

	<Footer />
</div>
