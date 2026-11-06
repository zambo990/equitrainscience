<script lang="ts">
	type Service = {
		id: string;
		label: string;
		summary: string;
		details: string;
		cta: string;
		href: string;
		icon: string;
		tone: 'brand' | 'sand' | 'accent' | 'soft';
	};

	// Le icone sono SVG statici scritti qui: per questo è sicuro renderle con {@html}
	const services: Service[] = [
		{
			id: 'gruppi',
			label: 'Per gruppi',
			summary: 'Progetti di divulgazione per maneggi, scuole e associazioni.',
			details:
				'Cicli di incontri per più persone insieme. Un esempio: in maneggio, come il cavallo percepisce l\'ambiente e cosa comunica con il corpo, con esercizi di osservazione sul campo.',
			cta: 'Proponi un progetto',
			href: '#contatti',
			icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
			tone: 'brand'
		},
		{
			id: 'privati',
			label: 'Per privati',
			summary: 'Un percorso 1:1 con te e il tuo cavallo.',
			details:
				'Si parte da un primo incontro in cui osservo il tuo cavallo nel suo ambiente e ascolto le tue difficoltà. Poi lavoriamo insieme sul campo, con un piano su misura per gestione, comunicazione e fiducia.',
			cta: 'Richiedi informazioni',
			href: '#contatti',
			icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
			tone: 'sand'
		},
		{
			id: 'bambini',
			label: 'Per bambini',
			summary: 'Una relazione con il cavallo a 360°, non solo equitazione.',
			details:
				'I bambini imparano a osservare il cavallo, a rispettarne i tempi e a costruire fiducia, oltre il montare in sella. Se cerchi un supporto allo sviluppo del bambino, guarda l\'ippomotricità più in basso.',
			cta: 'Richiedi informazioni',
			href: '#contatti',
			icon: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
			tone: 'accent'
		},
		{
			id: 'online',
			label: 'Online',
			summary: 'Un incontro ogni due settimane, per parlare di etologia insieme.',
			details:
				'Domande, casi reali e confronto diretto, in videochiamata. Le iscrizioni non sono ancora aperte: lascia la tua email per essere avvisato al lancio.',
			cta: 'Avvisami al lancio',
			href: '#divulgazione',
			icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
			tone: 'soft'
		}
	];

	let openId = $state<string | null>(null);

	function toggle(id: string) {
		openId = openId === id ? null : id;
	}
</script>

<section class="services" id="etologia" aria-labelledby="services-title">
	<div class="inner">
		<div class="head">
			<div>
				<span class="eyebrow">Come lavoro</span>
				<h2 class="section-title" id="services-title">Un'unica scienza, <em>quattro</em> modi per applicarla.</h2>
			</div>
			<p class="intro">
				L'etologia studia il comportamento naturale degli animali. Applicata al cavallo, significa
				capire come pensa e comunica, non solo come si guida o si addestra.
			</p>
		</div>

		<ul class="cards">
			{#each services as service (service.id)}
				{@const open = openId === service.id}
				<li class="card tone-{service.tone}" class:open>
					<div class="card-top">
						<span class="label">{service.label}</span>
						<button
							class="toggle"
							aria-expanded={open}
							aria-controls={open ? `details-${service.id}` : undefined}
							aria-label="{open ? 'Nascondi' : 'Mostra'} dettagli: {service.label}"
							onclick={() => toggle(service.id)}
						>
							<span class="toggle-bar"></span>
							<span class="toggle-bar"></span>
						</button>
					</div>

					{#if open}
						<div class="card-body" id="details-{service.id}">
							<p class="details">{service.details}</p>
							<a href={service.href} class="card-link">{service.cta}&nbsp;<span aria-hidden="true">→</span></a>
						</div>
					{:else}
						<div class="card-body">
							<svg
								class="icon"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								{@html service.icon}
							</svg>
							<p class="summary">{service.summary}</p>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* ===== Mobile (base) ===== */
	.services {
		padding: 72px 0;
		background: var(--color-surface);
	}

	.inner {
		max-width: var(--container);
		margin-inline: auto;
		padding-inline: 24px;
	}

	.head {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 32px;
	}

	/* Su .section-title globale: più piccolo, sta in una colonna stretta */
	.section-title {
		margin: 0;
		font-size: clamp(1.9rem, 6vw, 2.4rem);
	}

	.intro {
		margin: 0;
		max-width: 520px;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	/* Mobile: carosello orizzontale, una card alla volta con la successiva che "sbuca" */
	.cards {
		display: flex;
		gap: 16px;
		margin: 0 -24px;
		padding: 4px 24px 8px;
		list-style: none;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-padding-inline: 24px;
		scrollbar-width: none;
	}

	.cards::-webkit-scrollbar {
		display: none;
	}

	.card {
		flex: 0 0 82%;
		scroll-snap-align: start;
		display: flex;
		flex-direction: column;
		min-height: 400px;
		padding: 18px;
		border: 1px solid transparent;
		border-radius: var(--radius-lg);
		transition: background 0.25s ease, border-color 0.25s ease;
	}

	.tone-brand {
		background: var(--color-brand-tint);
	}

	.tone-sand {
		background: var(--color-sand);
	}

	.tone-accent {
		background: color-mix(in srgb, var(--color-accent) 14%, var(--color-bg));
	}

	.tone-soft {
		background: color-mix(in srgb, var(--color-brand-soft) 30%, var(--color-bg));
	}

	.card.open {
		background: var(--color-surface);
		border-color: var(--color-line);
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.label {
		padding: 7px 14px;
		border-radius: 999px;
		background: var(--color-surface);
		font-size: 0.82rem;
		font-weight: 700;
		white-space: nowrap;
		color: var(--color-ink);
	}

	.card.open .label {
		background: var(--color-brand-tint);
	}

	.toggle {
		position: relative;
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		padding: 0;
		border: none;
		border-radius: 50%;
		background: var(--color-surface);
		color: var(--color-ink);
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.toggle:hover,
	.card.open .toggle {
		background: var(--color-brand);
		color: var(--color-surface);
	}

	.toggle-bar {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 14px;
		height: 2px;
		border-radius: 2px;
		background: currentColor;
		transform: translate(-50%, -50%);
		transition: transform 0.25s ease;
	}

	.toggle-bar:last-child {
		transform: translate(-50%, -50%) rotate(90deg);
	}

	.card.open .toggle-bar:first-child {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.card.open .toggle-bar:last-child {
		transform: translate(-50%, -50%) rotate(135deg);
	}

	.toggle:focus-visible,
	.card-link:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	.card-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 16px;
		padding-top: 24px;
	}

	.icon {
		width: 88px;
		height: 88px;
		margin: auto;
		color: var(--color-brand);
		opacity: 0.85;
	}

	.summary {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.4;
		color: var(--color-ink);
	}

	.details {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	.card-link {
		align-self: flex-start;
		font-size: 0.92rem;
		font-weight: 700;
		color: var(--color-brand);
		text-decoration: underline;
		text-decoration-color: var(--color-accent);
		text-decoration-thickness: 2px;
		text-underline-offset: 5px;
		line-height: 1.5;
	}

	.card-link:hover {
		color: var(--color-accent-strong);
	}

	/* ===== Tablet: griglia 2x2, niente più scorrimento ===== */
	@media (min-width: 640px) {
		.services {
			padding: 96px 0;
		}

		.cards {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
			margin: 0;
			padding: 0;
			overflow: visible;
		}
	}

	/* ===== Desktop: titolo a sinistra, 4 card in fila a destra ===== */
	@media (min-width: 1200px) {
		.inner {
			display: grid;
			grid-template-columns: 260px 1fr;
			gap: 40px;
		}

		.head {
			justify-content: space-between;
			margin-bottom: 0;
		}

		.intro {
			font-size: 0.95rem;
		}

		.cards {
			grid-template-columns: repeat(4, 1fr);
			gap: 16px;
		}

		.card {
			min-height: 440px;
			padding: 16px;
		}

		.card-top {
			gap: 8px;
		}

		.toggle {
			width: 36px;
			height: 36px;
		}

		.icon {
			width: 72px;
			height: 72px;
		}

		.summary {
			font-size: 0.95rem;
		}

		.details {
			font-size: 0.88rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.toggle,
		.toggle-bar {
			transition: none;
		}
	}
</style>
