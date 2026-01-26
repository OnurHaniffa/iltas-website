<script lang="ts">
	import { onMount } from 'svelte';
	import { Header, Footer } from '$lib/components/layout';

	let mounted = $state(false);
	let visibleSections = $state<Set<string>>(new Set());

	const services = [
		{
			num: '01',
			numColor: '#18A058',
			title: 'Boylama Hatti Tasima',
			description: 'Ikinci el bir boylama hatti ariyorsaniz, ya da buldunuz ve sokulerek yeniden kurulmasi gerekiyorsa; ILTAS Boylama ve Hasat Sistemleri bu konuda uzman! Profesyonel ekibimiz ile guvenli sokum, nakliye ve yeni lokasyonda kurulum hizmetleri sunuyoruz.',
			image: '/images/boylama-hatti-tasima.jpeg',
			items: [
				'Profesyonel sokum ve kurulum',
				'Yer tespit ve planlama',
				'Lojistik ve nakliye destegi'
			],
			itemColor: '#18A058',
			bgColor: 'bg-white',
			hasRoundedCorner: true,
			imageFirst: true
		},
		{
			num: '02',
			numColor: '#1976D2',
			title: 'Bakim ve Revizyon',
			description: 'Mevcut boylama hattinizda kapasite artisi icin bir cozume ihtiyac duyuyorsaniz, ILTAS Boylama ve Hasat Sistemleri bu konuda uzman. Periyodik bakim, teknoloji guncelleme ve 7/24 teknik destek ile sisteminizi her zaman en verimli sekilde calisir halde tutuyoruz.',
			image: '/images/bakim-revizyon.jpeg',
			items: [
				'Periyodik bakim programlari',
				'Teknoloji guncelleme ve modernizasyon',
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
			title: 'Ihtiyaca Yonelik Yeni Imalat',
			description: 'Boylama, on boylama, paketleme hatlarinizda sizin ihtiyaciniz olan sistemi biliyor ve dunya capinda size uygun olan sistemi getiriyoruz. Ozel tasarim makine imalati ve anahtar teslim proje yonetimi ile kapasite arttirma cozumleri sunuyoruz.',
			image: '/images/hizmetlerimiz.png',
			items: [
				'Ozel tasarim makine imalati',
				'Kapasite arttirma cozumleri',
				'Anahtar teslim proje yonetimi'
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
	<title>Hizmetlerimiz - ILTAS</title>
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
			Profesyonel Boylama Cozumleri
		</h1>
		<p
			class="text-sm md:text-lg text-[var(--iltas-gray)] leading-[1.6] text-center max-w-[600px]
				{mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}"
		>
			Meyve ve sebze isleme tesisleriniz icin kapsamli hizmetler sunuyoruz
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
