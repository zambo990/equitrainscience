<script lang="ts">
	import { site, navLinks } from '$lib/consts';

	// La pagina è generata alla build: l'effetto, che gira solo nel browser,
	// aggiorna l'anno a quello corrente anche se la build è di un anno fa
	let year = $state(new Date().getFullYear());

	$effect(() => {
		year = new Date().getFullYear();
	});
</script>

<footer class="footer" id="contatti">
	<div class="inner">
		<div class="cta">
			<div>
				<span class="eyebrow">Contatti</span>
				<h2 class="section-title">Parliamo del tuo <em>cavallo</em>.</h2>
				<p class="cta-text">
					Hai un progetto per il tuo maneggio, una domanda o vuoi iniziare un percorso? Scrivimi:
					rispondo personalmente.
				</p>
			</div>
			<div class="cta-actions">
				<a class="btn btn-primary" href="mailto:{site.contactEmail}">Scrivimi una email</a>
				<a class="btn btn-outline" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
					Instagram
				</a>
			</div>
		</div>

		<div class="grid">
			<div class="brand">
				<a href="/" class="brand-link">
					<img class="brand-logo" src={site.logo} alt="" />
					<span class="brand-text">
						<span class="brand-name">{site.shortName}</span>
						<span class="brand-tagline">{site.tagline}</span>
					</span>
				</a>
				<p class="brand-text-long">
					Etologia equina per proprietari, maneggi e bambini: spiegata in modo semplice, basata
					sulla scienza.
				</p>
			</div>

			<nav class="col" aria-label="Sezioni del sito">
				<h3>Sito</h3>
				<ul>
					{#each navLinks as link (link.href)}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</nav>

			<div class="col">
				<h3>Contatti</h3>
				<ul>
					<li><a href="mailto:{site.contactEmail}">{site.contactEmail}</a></li>
					<li>
						<a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="bottom">
			<span>© {year} Elisa · {site.tagline} · P.IVA {site.vatNumber}</span>
			<a href="#top" class="to-top">Torna su <span aria-hidden="true">↑</span></a>
		</div>
	</div>
</footer>

<style>
	/* ===== Mobile (base) ===== */
	.footer {
		padding: 56px 0 32px;
		background: var(--color-bg);
		color: var(--color-ink);
	}

	.inner {
		max-width: var(--container);
		margin-inline: auto;
		padding-inline: 24px;
	}

	a {
		color: inherit;
	}

	a:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
		border-radius: 4px;
	}

	/* ---------- Card di invito al contatto ---------- */
	.cta {
		display: flex;
		flex-direction: column;
		gap: 28px;
		padding: 36px 24px;
		border-radius: var(--radius-lg);
		background: var(--color-brand-tint);
	}

	/* Su .section-title globale: più grande, è l'invito finale */
	.section-title {
		margin-bottom: 16px;
		font-size: clamp(2rem, 7vw, 3.2rem);
		line-height: 1.1;
	}

	.cta-text {
		margin: 0;
		max-width: 520px;
		font-size: 1.02rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	.cta-actions {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	/* La card è già verde chiaro: l'hover standard non si vedrebbe */
	.btn-outline:hover {
		background: var(--color-surface);
	}

	/* ---------- Colonne ---------- */
	.grid {
		display: grid;
		gap: 40px;
		padding: 48px 0;
	}

	.brand-link {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		color: var(--color-brand);
		text-decoration: none;
	}

	.brand-logo {
		width: 48px;
		height: 48px;
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
		font-size: 1.4rem;
		font-weight: 600;
	}

	.brand-tagline {
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-ink-soft);
	}

	.brand-text-long {
		max-width: 340px;
		margin: 16px 0 0;
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	.col {
		min-width: 0;
	}

	h3 {
		margin: 0 0 16px;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-brand);
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.col a {
		font-size: 0.95rem;
		color: var(--color-ink-soft);
		text-decoration: none;
		overflow-wrap: anywhere;
		transition: color 0.2s ease;
	}

	.col a:hover {
		color: var(--color-ink);
	}

	/* ---------- Riga finale ---------- */
	.bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
		padding-top: 24px;
		border-top: 1px solid var(--color-line);
		font-size: 0.82rem;
		color: var(--color-ink-soft);
	}

	.to-top {
		text-decoration: none;
	}

	.to-top:hover {
		color: var(--color-ink);
	}

	/* ===== Da 480px: bottoni affiancati ===== */
	@media (min-width: 480px) {
		.cta-actions {
			flex-direction: row;
		}
	}

	/* ===== Da 640px: colonne affiancate ===== */
	@media (min-width: 640px) {
		.cta {
			padding: 48px 40px;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.brand {
			grid-column: 1 / -1;
		}
	}

	/* ===== Da 960px: invito su una riga, tre colonne ===== */
	@media (min-width: 960px) {
		.footer {
			padding-top: 80px;
		}

		.cta {
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
			gap: 48px;
			padding: 56px;
		}

		.grid {
			grid-template-columns: 2fr 1fr 1fr;
			padding: 56px 0;
		}

		.brand {
			grid-column: auto;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.col a {
			transition: none;
		}
	}
</style>
