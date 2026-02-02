<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-[var(--iltas-bg)] px-5">
	<div class="flex flex-col items-center gap-6 text-center max-w-md">
		<span class="text-[120px] md:text-[160px] font-extrabold text-[var(--iltas-green)] leading-none">
			{page.status}
		</span>
		<h1 class="text-2xl md:text-3xl font-bold text-[var(--iltas-dark)]">
			Sayfa Bulunamadı
		</h1>
		<p class="text-sm md:text-base text-[var(--iltas-gray)] leading-relaxed">
			Aradığınız sayfa mevcut değil veya taşınmış olabilir.
		</p>
		<a
			href="/"
			class="flex items-center gap-2 px-6 py-3 bg-[var(--iltas-green)] text-white text-sm font-semibold rounded-lg shadow-[0_4px_12px_rgba(24,160,88,0.25)] hover:shadow-[0_6px_20px_rgba(24,160,88,0.35)] transition-all duration-300 hover:-translate-y-0.5"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
			</svg>
			Ana Sayfaya Dön
		</a>
	</div>
</div>
