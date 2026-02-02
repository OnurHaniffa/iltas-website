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
			<a href="/en" class="flex items-center gap-[10px] group w-fit">
				<span class="text-2xl md:text-[28px] font-extrabold text-white tracking-[-0.5px] transition-colors duration-300 group-hover:text-[var(--iltas-green)]">
					ILTAS
				</span>
				<span class="w-[10px] h-[10px] rounded-full bg-[var(--iltas-green)] transition-transform duration-300 group-hover:scale-150 group-hover:animate-pulse-soft"></span>
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

				<span class="text-[13px] font-bold text-white tracking-[0.5px] mt-4">Social Media</span>
				<div class="flex gap-4">
					<a href="#" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="Facebook">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
					</a>
					<a href="#" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="Instagram">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
					</a>
					<a href="#" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="LinkedIn">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
					</a>
					<a href="#" class="text-[var(--iltas-gray)] hover:text-white hover:scale-125 transition-all duration-300" aria-label="YouTube">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--iltas-dark)"/></svg>
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
			<a href="#" class="text-[13px] text-[var(--iltas-gray)] hover:text-white transition-colors duration-300">Privacy Policy</a>
			<a href="#" class="text-[13px] text-[var(--iltas-gray)] hover:text-white transition-colors duration-300">Terms of Use</a>
		</div>
	</div>
</footer>
