<script lang="ts">
	import { site } from '$lib/consts';
</script>

<header class="hero">
	<div class="inner">
		<div class="content">
			<span class="eyebrow">{site.tagline}</span>

			<h1>Capire il <em>cavallo</em>, per costruire una relazione migliore.</h1>

			<p class="lede">
				Sono Eli, etologa equina. Aiuto proprietari, maneggi e bambini a comprendere il
				comportamento del cavallo, con un linguaggio semplice e basato sulla scienza.
			</p>

			<div class="actions">
				<a href="#etologia" class="btn btn-primary">Scopri come <span aria-hidden="true">→</span></a>
				<a href="#contatti" class="btn btn-outline">Scrivimi</a>
			</div>
		</div>

		<a class="badge" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
			<span class="badge-icon" aria-hidden="true">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
					<rect x="2" y="2" width="20" height="20" rx="5" />
					<circle cx="12" cy="12" r="4.2" />
					<circle cx="17.2" cy="6.8" r="1" />
				</svg>
			</span>
			<span class="badge-text">
				<span class="badge-title">Seguimi su Instagram</span>
				<span class="badge-sub">Progetti e comportamento equino, spiegati ogni giorno.</span>
			</span>
		</a>
	</div>
</header>

<style>
	.hero {
		min-height: calc(100svh - var(--nav-height));
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		background:
			radial-gradient(ellipse 55% 65% at 88% 35%, color-mix(in srgb, var(--color-brand-soft) 28%, transparent), transparent 70%),
			radial-gradient(ellipse 45% 55% at 5% 95%, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%),
			linear-gradient(180deg, var(--color-bg) 0%, var(--color-sand) 100%);
	}

	/* Arco decorativo: richiama la mezzaluna del logo */
	.hero::before {
		content: '';
		position: absolute;
		top: 50%;
		right: -160px;
		width: 640px;
		height: 640px;
		border-radius: 50%;
		border: 2px solid color-mix(in srgb, var(--color-brand-soft) 55%, transparent);
		transform: translateY(-50%);
		pointer-events: none;
	}

	.hero::after {
		content: '';
		position: absolute;
		top: 50%;
		right: -60px;
		width: 440px;
		height: 440px;
		border-radius: 50%;
		background: color-mix(in srgb, var(--color-brand-tint) 70%, transparent);
		transform: translateY(-50%);
		pointer-events: none;
	}

	.inner {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: var(--container);
		margin-inline: auto;
		padding: 72px 24px;
	}

	.content {
		max-width: 720px;
	}

	/* ---------- Testi ---------- */
	/* Su .eyebrow globale: qui diventa una pillola */
	.eyebrow {
		margin-bottom: 20px;
		padding: 6px 14px;
		border-radius: 999px;
		background: var(--color-brand-tint);
	}

	h1 {
		margin: 0 0 24px;
		font-family: var(--font-display);
		font-size: clamp(2.4rem, 5.5vw, 4.4rem);
		font-weight: 600;
		line-height: 1.08;
		letter-spacing: -0.015em;
		color: var(--color-ink);
	}

	h1 em {
		font-style: italic;
		color: var(--color-accent);
	}

	.lede {
		max-width: 560px;
		margin: 0;
		font-size: 1.15rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	/* ---------- Bottoni ---------- */
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 36px;
	}

	.badge:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}

	/* ---------- Badge Instagram ---------- */
	.badge {
		position: absolute;
		right: 24px;
		bottom: 72px;
		display: flex;
		align-items: center;
		gap: 14px;
		max-width: 300px;
		padding: 16px 20px;
		border-radius: var(--radius-md);
		background: var(--color-surface);
		box-shadow: 0 18px 40px color-mix(in srgb, var(--color-ink) 10%, transparent);
		color: var(--color-ink);
		text-decoration: none;
		transition: transform 0.2s ease;
	}

	.badge:hover {
		transform: translateY(-3px);
	}

	.badge-icon {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background: var(--color-brand-tint);
		color: var(--color-brand);
	}

	.badge-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.badge-title {
		font-size: 0.9rem;
		font-weight: 700;
	}

	.badge-sub {
		font-size: 0.8rem;
		line-height: 1.4;
		color: var(--color-ink-soft);
	}

	/* ---------- Mobile ---------- */
	@media (max-width: 960px) {
		.inner {
			padding: 56px 24px;
		}

		.hero::before {
			top: 0;
			right: -220px;
			width: 380px;
			height: 380px;
		}

		.hero::after {
			top: 0;
			right: -160px;
			width: 260px;
			height: 260px;
		}

		.badge {
			position: static;
			margin-top: 48px;
			max-width: none;
		}
	}

	@media (max-width: 480px) {
		.actions .btn {
			flex: 1;
			justify-content: center;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.badge {
			transition: none;
		}
	}
</style>
