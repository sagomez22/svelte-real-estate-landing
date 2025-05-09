<script>
	import '../app.postcss';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	// Import Swiper CSS globally here to avoid multiple imports

</script>

<Header />

<main>
	<slot />
</main>

<Footer />
