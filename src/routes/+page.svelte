<script lang="ts">
	import { site } from '$lib/consts';
	import Header from '$lib/components/header.svelte';
	import About from '$lib/components/about.svelte';
	import Services from '$lib/components/services.svelte';
	import Online from '$lib/components/online.svelte';
	import Ippomotricita from '$lib/components/ippomotricita.svelte';

	const title = 'Elisa · Etologa equina — il comportamento del cavallo, spiegato semplice';
	const description =
		'Etologia equina per proprietari, maneggi e bambini: capire come pensa e comunica il cavallo, con un linguaggio semplice e basato sulla scienza. Percorsi 1:1, progetti per gruppi, incontri online e ippomotricità.';
	const pageUrl = `${site.url}/`;
	const imageUrl = `${site.url}/og-image.jpg`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={pageUrl} />

	<!-- Anteprima quando il link viene condiviso (WhatsApp, Facebook, LinkedIn…) -->
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="it_IT" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="eli. Etologa equina — Capire il cavallo, per costruire una relazione migliore." />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />
<About />
<Services />
<Online />
<Ippomotricita />
