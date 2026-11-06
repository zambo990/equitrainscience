<script lang="ts">
	import '@fontsource/manrope/400.css';
	import '@fontsource/manrope/500.css';
	import '@fontsource/manrope/600.css';
	import '@fontsource/manrope/700.css';
	import '@fontsource/manrope/800.css';
	import '@fontsource/fraunces/500.css';
	import '@fontsource/fraunces/600.css';
	import '@fontsource/fraunces/500-italic.css';
	import '@fontsource/fraunces/600-italic.css';
	import '../app.css';

	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
