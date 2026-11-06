<script lang="ts">
	import { slide } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';

	type Topic = {
		title: string;
		text: string;
	};

	const topics: Topic[] = [
		{
			title: 'A chi è rivolta',
			text: 'A bambini e famiglie che cercano un percorso su misura, anche quando ci sono aspetti dello sviluppo su cui si vuole lavorare con un supporto complementare.'
		},
		{
			title: 'Come funziona',
			text: 'Si parte da un incontro conoscitivo con la famiglia, per capire obiettivi e bisogni. Seguono incontri con il cavallo, con attività calibrate sul bambino e sul suo ritmo, e il percorso si adatta man mano ai suoi progressi.'
		},
		{
			title: 'Perché il cavallo',
			text: 'Il cavallo comunica in modo diretto e coerente: reagisce a come ci si comporta, non a chi si è sulla carta. Per un bambino diventa uno specchio prezioso per costruire fiducia in sé.'
		},
		{
			title: "In cosa è diversa dall'etologia per bambini",
			text: "L'etologia per bambini insegna a conoscere il cavallo e a relazionarsi con lui. L'ippomotricità mette al centro il bambino: il cavallo diventa il mezzo per sostenere il suo sviluppo."
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="ippo" id="ippomotricita" aria-labelledby="ippo-title">
	<div class="inner">
		<div class="intro">
			<span class="eyebrow">Un percorso a parte</span>
			<h2 class="section-title" id="ippo-title">Ippomotricità: il cavallo accanto alla <em>crescita</em> dei più piccoli.</h2>
			<p class="lede">
				Oltre all'etologia mi occupo di ippomotricità: un percorso che usa la relazione con il
				cavallo per sostenere lo sviluppo del bambino, dal punto di vista motorio, emotivo e
				relazionale.
			</p>
			<p class="lede">
				Non è una lezione di equitazione: il cavallo è lo strumento, non l'obiettivo.
			</p>
			<a href="#contatti" class="link">Richiedi informazioni <span aria-hidden="true">→</span></a>
		</div>

		<div class="topics">
			{#each topics as topic, i (topic.title)}
				{@const open = openIndex === i}
				<div class="topic" class:open>
					<h3>
						<button
							class="topic-toggle"
							aria-expanded={open}
							aria-controls={open ? `topic-${i}` : undefined}
							onclick={() => toggle(i)}
						>
							<span>{topic.title}</span>
							<span class="plus" aria-hidden="true"></span>
						</button>
					</h3>
					{#if open}
						<div
							class="topic-body"
							id="topic-{i}"
							transition:slide={{ duration: prefersReducedMotion.current ? 0 : 300 }}
						>
							<p>{topic.text}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ===== Mobile (base) ===== */
	.ippo {
		padding: 72px 0;
		background: var(--color-surface);
	}

	.inner {
		display: flex;
		flex-direction: column;
		gap: 40px;
		max-width: var(--container);
		margin-inline: auto;
		padding-inline: 24px;
	}

	.lede {
		margin: 0 0 14px;
		max-width: 520px;
		font-size: 1.05rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	.link {
		display: inline-block;
		margin-top: 12px;
		font-weight: 700;
		color: var(--color-brand);
		text-decoration: underline;
		text-decoration-color: var(--color-accent);
		text-decoration-thickness: 2px;
		text-underline-offset: 5px;
	}

	.link:hover {
		color: var(--color-accent-strong);
	}

	/* ---------- Voci a scomparsa ---------- */
	.topics {
		border-top: 1px solid var(--color-line);
	}

	.topic {
		border-bottom: 1px solid var(--color-line);
	}

	h3 {
		margin: 0;
	}

	/* Il bottone occupa tutta la riga: si può cliccare ovunque, non solo sul + */
	.topic-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		width: 100%;
		padding: 22px 0;
		border: none;
		background: none;
		font: inherit;
		font-size: 1.05rem;
		font-weight: 700;
		text-align: left;
		color: var(--color-ink);
		cursor: pointer;
	}

	.topic-toggle:hover {
		color: var(--color-brand);
	}

	.link:focus-visible,
	.topic-toggle:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
		border-radius: 4px;
	}

	/* "+" disegnato con due barre che diventano "−" quando la voce è aperta */
	.plus {
		position: relative;
		flex-shrink: 0;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: var(--color-brand-tint);
		color: var(--color-brand);
		transition: background 0.2s ease, color 0.2s ease;
	}

	.plus::before,
	.plus::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 13px;
		height: 2px;
		border-radius: 2px;
		background: currentColor;
		transform: translate(-50%, -50%);
		transition: transform 0.25s ease;
	}

	.plus::after {
		transform: translate(-50%, -50%) rotate(90deg);
	}

	.topic.open .plus {
		background: var(--color-brand);
		color: var(--color-surface);
	}

	.topic.open .plus::after {
		transform: translate(-50%, -50%) rotate(0deg);
	}

	.topic-body p {
		margin: 0;
		padding: 0 52px 24px 0;
		font-size: 0.98rem;
		line-height: 1.65;
		color: var(--color-ink-soft);
	}

	/* ===== Da 960px: testo a sinistra, voci a destra ===== */
	@media (min-width: 960px) {
		.ippo {
			padding: 112px 0;
		}

		.inner {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: start;
			gap: 80px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.plus,
		.plus::before,
		.plus::after {
			transition: none;
		}
	}
</style>
