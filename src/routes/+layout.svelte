<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Header from '$lib/components/header.svelte'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<Header />
{@render children()}

