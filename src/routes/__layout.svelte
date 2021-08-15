<script context="module">
	import '../i18n.js';
	import { waitLocale } from 'svelte-i18n'

	export function preload() {
		return waitLocale()
	}

	export function load({ page }) {
		return { props: { activeUrl: page.path } }
	}
</script>

<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	export let activeUrl
	let footerActive = false
</script>

<svelte:head>
	<title>Yermaín Araya | Portfolio</title>
</svelte:head>

<Header activeUrl={activeUrl} />
<section>
	<slot />
</section>
<Footer active={footerActive} />

<style lang="scss">
	:global(:root) {
		--font-stack: 'Roboto Mono', monospace;
		--magenta: #f9298e;
		--darkgray: #555;
		--lightgray: #e6e6e6;
		--background: #f5f5f5;
		--turquoise: rgb(36, 187, 204);

		/*Bootstrap Breakpoints*/
		--break-sm: 576px;
		--break-md: 768px;
		--break-lg: 992px;
		--break-xl: 1200px;
	}

	:global(.typed-cursor) {
		color: var(--magenta);
		opacity: 1;
		animation: blink 0.7s infinite;

		@keyframes blink {
			0% { opacity: 1; }
			50% { opacity: 0; }
			100% { opacity: 1; }
		}
	}

  :global(body) {
    font-family: var(--font-stack);
    color: #000;
    max-width: 100vw;
    overflow-x: hidden;
  }

	:global(a, a:hover) {
		text-decoration: none;
	}

	:global(button, button:focus) {
		outline: none;
		box-shadow: none;
		background: none;
		border: none;
	}

	section {
		height: 100vh;
	}
</style>
