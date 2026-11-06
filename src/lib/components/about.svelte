<script lang="ts">
	import { site } from '$lib/consts';

	type Pillar = {
		title: string;
		text: string;
	};

	const pillars: Pillar[] = [
		{
			title: 'Basato sulla scienza',
			text: 'Parto da ciò che la ricerca sa sul comportamento del cavallo, non da abitudini o sentito dire.'
		},
		{
			title: 'Spiegato semplice',
			text: 'Niente tecnicismi: concetti chiari ed esempi concreti, da usare subito.'
		},
		{
			title: 'Il cavallo al centro',
			text: 'Ogni percorso parte dai suoi bisogni e dal suo modo di comunicare.'
		}
	];
</script>

<section class="about" id="chi-sono" aria-labelledby="about-title">
	<div class="inner">
		<figure class="media">
			<div class="frame">
				<img src={site.logo} alt="" />
			</div>
			<blockquote class="quote">
				<p>“Ogni cavallo ha una sua storia. Il mio lavoro è imparare a leggerla.”</p>
				<cite>Elisa</cite>
			</blockquote>
		</figure>

		<div class="content">
			<span class="eyebrow">Chi sono</span>
			<h2 class="section-title" id="about-title">
				Un approccio basato sulla <em>scienza</em>, spiegato senza tecnicismi.
			</h2>
			<p class="lede">
				Mi chiamo Elisa e sono un'etologa equina. L'etologia è la scienza che studia il
				comportamento degli animali: il mio lavoro è usarla per aiutarti a capire cosa prova, cosa
				comunica e di cosa ha bisogno il tuo cavallo.
			</p>
			<p class="lede">
				Lavoro con proprietari, maneggi, scuole e famiglie, con un obiettivo semplice: costruire con
				il cavallo una relazione più consapevole, invece che basata solo sull'addestramento.
			</p>

			<ul class="pillars">
				{#each pillars as pillar (pillar.title)}
					<li>
						<span class="check" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 6 9 17 4 12" />
							</svg>
						</span>
						<div>
							<h3>{pillar.title}</h3>
							<p>{pillar.text}</p>
						</div>
					</li>
				{/each}
			</ul>

			<a href="#etologia" class="btn btn-outline">Scopri come lavoro <span aria-hidden="true">→</span></a>
		</div>
	</div>
</section>

<style>
	/* ===== Mobile (base) ===== */
	.about {
		padding: 72px 0;
	}

	.inner {
		display: flex;
		flex-direction: column;
		gap: 56px;
		max-width: var(--container);
		margin-inline: auto;
		padding-inline: 24px;
	}

	/* ---------- Immagine + citazione ---------- */
	.media {
		position: relative;
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	.frame {
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 4 / 5;
		padding: 15%;
		/* forma ad arco: angoli superiori a raggio pieno */
		border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-line);
	}

	.frame img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.quote {
		position: relative;
		margin: -48px 16px 0;
		padding: 22px 24px;
		border-radius: var(--radius-md);
		background: var(--color-brand);
		color: var(--color-surface);
		box-shadow: 0 20px 40px color-mix(in srgb, var(--color-ink) 15%, transparent);
	}

	.quote p {
		margin: 0;
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-style: italic;
		line-height: 1.4;
	}

	.quote cite {
		display: block;
		margin-top: 10px;
		font-size: 0.82rem;
		font-style: normal;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: var(--color-brand-tint);
	}

	.quote cite::before {
		content: '— ';
	}

	/* ---------- Testi ---------- */
	.lede {
		margin: 0 0 16px;
		max-width: 560px;
		font-size: 1.05rem;
		line-height: 1.65;
		color: var(--color-ink-soft);
	}

	/* ---------- Punti di forza ---------- */
	.pillars {
		display: grid;
		gap: 20px;
		margin: 32px 0 36px;
		padding: 0;
		list-style: none;
	}

	.pillars li {
		display: flex;
		gap: 14px;
	}

	.check {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: var(--color-brand-tint);
		color: var(--color-brand);
	}

	.check svg {
		width: 15px;
		height: 15px;
	}

	h3 {
		margin: 2px 0 4px;
		font-size: 1rem;
		font-weight: 700;
		color: var(--color-ink);
	}

	.pillars p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.55;
		color: var(--color-ink-soft);
	}

	/* ===== Da 640px: i punti di forza su tre colonne ===== */
	@media (min-width: 640px) {
		.about {
			padding: 96px 0;
		}

		.media {
			max-width: 380px;
		}

		.pillars {
			grid-template-columns: repeat(3, 1fr);
		}

		.pillars li {
			flex-direction: column;
			gap: 12px;
		}
	}

	/* ===== Da 960px: immagine a sinistra, testo a destra ===== */
	@media (min-width: 960px) {
		.about {
			padding: 112px 0;
		}

		.inner {
			display: grid;
			grid-template-columns: 5fr 7fr;
			align-items: center;
			gap: 80px;
		}

		.media {
			margin: 0;
			max-width: none;
		}

		.quote {
			position: absolute;
			right: -32px;
			bottom: -36px;
			max-width: 280px;
			margin: 0;
		}
	}
</style>
