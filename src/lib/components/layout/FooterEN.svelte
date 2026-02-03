<script lang="ts">
	const pageLinks = [
		{ href: '/en', label: 'Home' },
		{ href: '/en/about', label: 'About' },
		{ href: '/en/services', label: 'Services' },
		{ href: '/en/projects', label: 'Projects' }
	];

	const contactLinks = [
		{ href: 'mailto:info@iltasmakine.com', label: 'info@iltasmakine.com' },
		{ href: 'tel:+905545504450', label: '+90 554 550 4450' },
		{ href: 'https://maps.google.com/?q=Sanayi+Mah+3210+Sk+No:10+Isparta+Turkey', label: 'Isparta, Turkey' }
	];
</script>

<footer class="w-full bg-[var(--iltas-dark)] overflow-hidden">
	<!-- Wave -->
	<div class="relative h-12 md:h-20 bg-[var(--iltas-dark)]">
		<svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
			<path d="M0 0l0 50q360 30 720 0 360-30 720 0l0-50z" fill="var(--iltas-bg-alt)" />
		</svg>
	</div>

	<!-- Footer Top -->
	<div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 px-5 md:px-[50px] pt-[30px]">
		<!-- Brand Section -->
		<div class="flex flex-col gap-5">
			<a href="/en" class="flex items-center group w-fit">
				<img
					src="/images/iltas-logo.png"
					alt="ILTAS"
					class="h-7 md:h-8 w-auto brightness-0 invert"
				/>
			</a>
			<p class="text-sm md:text-[15px] text-[var(--iltas-gray-light)] leading-[1.6] max-w-[280px]">
				Your Partner in Sorting Systems
			</p>
			<div class="flex flex-col gap-1 text-sm text-[var(--iltas-gray-light)]">
				<span>Sanayi mah. 3210 sk. No:10</span>
				<span>Isparta/Merkez, Turkey</span>
			</div>
			<span class="hidden md:block text-[80px] lg:text-[100px] font-black text-[var(--iltas-dark-light)] tracking-[-4px] opacity-30 select-none">
				ILTAS
			</span>
		</div>

		<!-- Navigation Columns -->
		<div class="grid grid-cols-2 md:flex gap-8 md:gap-[50px]">
			<!-- Pages -->
			<div class="flex flex-col gap-3 md:gap-[14px]">
				<span class="text-[13px] font-bold text-white tracking-[0.5px]">Pages</span>
				{#each pageLinks as link, i}
					<a
						href={link.href}
						class="text-sm text-[var(--iltas-gray-light)] hover:text-white hover:translate-x-1 transition-all duration-300"
						style="transition-delay: {i * 50}ms"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Contact -->
			<div class="flex flex-col gap-3 md:gap-[14px]">
				<span class="text-[13px] font-bold text-white tracking-[0.5px]">Contact</span>
				{#each contactLinks as link, i}
					<a
						href={link.href}
						class="text-sm text-[var(--iltas-gray-light)] hover:text-white hover:translate-x-1 transition-all duration-300"
						style="transition-delay: {i * 50}ms"
						{...link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Working Hours & Social -->
			<div class="flex flex-col gap-3 md:gap-[14px] col-span-2 md:col-span-1">
				<span class="text-[13px] font-bold text-white tracking-[0.5px]">Working Hours</span>
				<span class="text-sm text-[var(--iltas-gray-light)]">Monday - Friday</span>
				<span class="text-sm text-[var(--iltas-gray-light)]">09:00 - 18:00</span>
				<span class="text-sm text-[var(--iltas-gray-light)]">Closed on weekends</span>

				<span class="text-[13px] font-bold text-white tracking-[0.5px] mt-4">Get in Touch</span>
				<div class="flex gap-4">
					<a href="https://wa.me/905545504450" target="_blank" rel="noopener noreferrer" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="WhatsApp">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
					</a>
					<a href="mailto:info@iltasmakine.com" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="Email">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
					</a>
					<a href="tel:+905545504450" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="Phone">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Divider -->
	<div class="w-full h-px bg-[var(--iltas-dark-light)] mt-8"></div>

	<!-- Footer Bottom -->
	<div class="flex flex-col md:flex-row items-center justify-between gap-4 px-5 md:px-[50px] py-6 md:py-10">
		<span class="text-[13px] text-[var(--iltas-gray)] text-center md:text-left">© {new Date().getFullYear()} ILTAS Sorting and Harvesting Systems. All rights reserved.</span>
		<div class="flex gap-6">
			<a href="/en/contact" class="text-[13px] text-[var(--iltas-gray)] hover:text-white transition-colors duration-300">Contact</a>
		</div>
	</div>
</footer>
