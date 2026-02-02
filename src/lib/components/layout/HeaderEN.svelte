<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		activePage?: 'home' | 'about' | 'services' | 'projects' | 'contact';
	}

	let { activePage = 'home' }: Props = $props();
	let scrolled = $state(false);
	let mounted = $state(false);
	let mobileMenuOpen = $state(false);

	const navItems = [
		{ href: '/en', label: 'Home', key: 'home' },
		{ href: '/en/about', label: 'About', key: 'about' },
		{ href: '/en/services', label: 'Services', key: 'services' },
		{ href: '/en/projects', label: 'Projects', key: 'projects' },
		{ href: '/en/contact', label: 'Contact', key: 'contact' }
	];

	onMount(() => {
		mounted = true;
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
		}
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[70px] px-5 md:px-[50px] transition-all duration-300
		{scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-[var(--shadow-md)]' : 'bg-transparent'}
		{mounted ? 'animate-fade-in-down' : 'opacity-0'}"
>
	<!-- Logo -->
	<a href="/en" class="flex items-center gap-[10px] group">
		<span class="text-xl md:text-[22px] font-extrabold tracking-[-0.5px] transition-colors duration-300 group-hover:text-[var(--iltas-green)]
			{scrolled || activePage !== 'home' ? 'text-[var(--iltas-dark)]' : 'text-white'}">
			ILTAS
		</span>
		<span class="w-2 h-2 rounded-full bg-[var(--iltas-green)] transition-transform duration-300 group-hover:scale-150"></span>
	</a>

	<!-- Desktop Navigation -->
	<nav class="hidden lg:flex items-center gap-7">
		{#each navItems as item, i}
			<a
				href={item.href}
				class="nav-link text-sm font-medium transition-all duration-300 hover:text-[var(--iltas-green)]
					{scrolled || activePage !== 'home'
						? (activePage === item.key ? 'text-[var(--iltas-dark)]' : 'text-[var(--iltas-gray)]')
						: (activePage === item.key ? 'text-white' : 'text-white/70')}"
				style="animation-delay: {i * 50}ms"
			>
				{item.label}
			</a>
		{/each}
		<a href="/" class="text-sm font-medium text-[var(--iltas-green)] hover:underline">TR</a>
	</nav>

	<!-- Desktop CTA Button -->
	<a
		href="/en/contact"
		class="hidden md:flex group items-center gap-2 px-4 lg:px-[22px] py-2.5 lg:py-3 text-sm font-semibold text-white bg-[var(--iltas-green)] rounded-lg shadow-[var(--shadow-green)] btn-hover"
	>
		<span>Get Quote</span>
		<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path d="M5 12h14M12 5l7 7-7 7"/>
		</svg>
	</a>

	<!-- Mobile Menu Button -->
	<button
		onclick={toggleMobileMenu}
		class="lg:hidden flex flex-col gap-1.5 p-2"
		aria-label="Toggle menu"
	>
		<span class="block w-6 h-0.5 transition-all duration-300 {mobileMenuOpen ? 'rotate-45 translate-y-2' : ''} {scrolled || activePage !== 'home' ? 'bg-[var(--iltas-dark)]' : 'bg-white'}"></span>
		<span class="block w-6 h-0.5 transition-all duration-300 {mobileMenuOpen ? 'opacity-0' : ''} {scrolled || activePage !== 'home' ? 'bg-[var(--iltas-dark)]' : 'bg-white'}"></span>
		<span class="block w-6 h-0.5 transition-all duration-300 {mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} {scrolled || activePage !== 'home' ? 'bg-[var(--iltas-dark)]' : 'bg-white'}"></span>
	</button>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<div
		class="fixed inset-0 bg-black/50 z-40 lg:hidden"
		onclick={closeMobileMenu}
		role="button"
		tabindex="-1"
		aria-label="Close menu"
		onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
	></div>
{/if}

<!-- Mobile Menu -->
<nav
	class="fixed top-[70px] right-0 w-[280px] h-[calc(100vh-70px)] bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto
		{mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
	<div class="flex flex-col p-6 gap-2">
		{#each navItems as item}
			<a
				href={item.href}
				onclick={closeMobileMenu}
				class="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
					{activePage === item.key
						? 'bg-[var(--iltas-green-light)] text-[var(--iltas-green)]'
						: 'text-[var(--iltas-gray)] hover:bg-[var(--iltas-bg-alt)] hover:text-[var(--iltas-dark)]'}"
			>
				{item.label}
			</a>
		{/each}

		<a
			href="/"
			onclick={closeMobileMenu}
			class="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-[var(--iltas-green)]"
		>
			Türkçe (TR)
		</a>

		<div class="mt-4 pt-4 border-t border-[var(--iltas-border)]">
			<a
				href="/en/contact"
				onclick={closeMobileMenu}
				class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--iltas-green)] text-white text-base font-semibold rounded-lg"
			>
				<span>Get Quote</span>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</a>
		</div>
	</div>
</nav>
