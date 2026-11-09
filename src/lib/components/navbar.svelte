<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, navLinks } from '$lib/consts';

	// Indirizzo della home, compreso il percorso base (es. /nome-repo/ su GitHub Pages)
	const home = resolve('/');

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeMenu();
	}
</script>

<svelte:window onkeydown={onKeydown} />

<nav class="navbar" class:menu-open={menuOpen}>
	<div class="inner">
		<a href={home} class="brand" onclick={closeMenu}>
			<img class="brand-logo" src={site.logo} alt="" />
			<span class="brand-text">
				<span class="brand-name">{site.shortName}</span>
				<span class="brand-tagline">{site.tagline}</span>
			</span>
		</a>

		<ul class="links" class:open={menuOpen}>
			{#each navLinks as link (link.id)}
				<li><a href="{home}#{link.id}" onclick={closeMenu}>{link.label}</a></li>
			{/each}
			<li class="cta-item">
				<a href="{home}#contatti" class="cta" onclick={closeMenu}>Scrivimi</a>
			</li>
		</ul>

		<div class="actions">
			<a href="{home}#contatti" class="cta cta-desktop">Scrivimi</a>

			<button
				class="hamburger"
				aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		</div>
	</div>
</nav>

<style>
	/* ---------- Barra ---------- */
	.navbar {
		position: sticky;
		top: 0;
		z-index: 50;
		height: var(--nav-height);
		background: rgba(247, 243, 236, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-line);
	}

	.inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		column-gap: 24px;
		max-width: var(--container);
		height: 100%;
		margin-inline: auto;
		padding-inline: 24px;
	}

	/* ---------- Brand ---------- */
	.brand {
		grid-column: 1;
		justify-self: start;
		display: flex;
		align-items: center;
		gap: 12px;
		color: var(--color-brand);
		text-decoration: none;
	}

	.brand-logo {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid var(--color-line);
		object-fit: cover;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}

	.brand-name {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 600;
	}

	.brand-tagline {
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-ink-soft);
	}

	/* ---------- Voci (desktop) ---------- */
	.links {
		grid-column: 2;
		justify-self: center;
		display: flex;
		align-items: center;
		gap: 28px;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.cta-item {
		display: none;
	}

	.actions {
		grid-column: 3;
		justify-self: end;
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.links a {
		position: relative;
		padding: 6px 0;
		color: var(--color-ink-soft);
		font-size: 0.92rem;
		font-weight: 600;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.links a:hover {
		color: var(--color-ink);
	}

	.links a:not(.cta)::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 2px;
		border-radius: 2px;
		background: var(--color-accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.25s ease;
	}

	.links a:not(.cta):hover::after {
		transform: scaleX(1);
	}

	.cta,
	.links a.cta {
		display: inline-block;
		padding: 10px 22px;
		border-radius: 999px;
		background: var(--color-brand);
		color: var(--color-surface);
		font-size: 0.92rem;
		font-weight: 600;
		text-decoration: none;
		white-space: nowrap;
		transition: background 0.2s ease;
	}

	.cta:hover,
	.links a.cta:hover {
		background: var(--color-brand-strong);
	}

	.links a:focus-visible,
	.cta:focus-visible,
	.brand:focus-visible,
	.hamburger:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
		border-radius: 6px;
	}

	/* ---------- Hamburger ---------- */
	.hamburger {
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		width: 44px;
		height: 44px;
		padding: 0;
		border: 1px solid var(--color-line);
		border-radius: 50%;
		background: var(--color-surface);
		color: var(--color-ink);
		cursor: pointer;
		transition: background 0.2s ease, border-color 0.2s ease;
	}

	.hamburger:hover {
		background: var(--color-brand-tint);
		border-color: var(--color-brand-tint);
	}

	.bar {
		display: block;
		width: 18px;
		height: 2px;
		border-radius: 2px;
		background: currentColor;
		transition: transform 0.25s ease, opacity 0.2s ease;
	}

	.menu-open .bar:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.menu-open .bar:nth-child(2) {
		opacity: 0;
	}

	.menu-open .bar:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* ---------- Mobile ---------- */
	@media (max-width: 960px) {
		.navbar.menu-open {
			background: var(--color-bg);
		}

		.inner {
			display: flex;
			justify-content: space-between;
		}

		.hamburger {
			display: flex;
		}

		.links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			justify-self: stretch;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: 8px 24px 24px;
			background: var(--color-bg);
			border-bottom: 1px solid var(--color-line);
			box-shadow: 0 24px 40px rgba(23, 23, 15, 0.08);
			opacity: 0;
			visibility: hidden;
			transform: translateY(-8px);
			transition: opacity 0.2s ease, transform 0.25s ease, visibility 0.25s;
		}

		.links.open {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}

		.links li:not(.cta-item) {
			border-bottom: 1px solid var(--color-line-soft);
		}

		.links a {
			display: block;
			padding: 16px 0;
			font-size: 1.05rem;
			color: var(--color-ink);
		}

		.links a:not(.cta)::after {
			display: none;
		}

		.cta-desktop {
			display: none;
		}

		.cta-item {
			display: block;
			margin-top: 20px;
		}

		.links a.cta {
			display: block;
			padding: 14px 22px;
			text-align: center;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.links,
		.links a,
		.links a::after,
		.bar,
		.hamburger {
			transition: none;
		}
	}
</style>
