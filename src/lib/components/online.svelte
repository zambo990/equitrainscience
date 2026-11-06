<script lang="ts">
	type Step = {
		title: string;
		text: string;
	};

	const steps: Step[] = [
		{
			title: 'Lasci la tua email',
			text: 'Ti avviso non appena aprono le iscrizioni al primo ciclo di incontri.'
		},
		{
			title: 'Ricevi tutti i dettagli',
			text: 'Data, orario e link per partecipare, direttamente via email.'
		},
		{
			title: 'Partecipi online',
			text: 'Ogni due settimane, in diretta, con spazio per le tue domande.'
		}
	];

	let submitted = $state(false);

	// Il modulo non è ancora collegato a un servizio di invio:
	// quando lo sarà, la chiamata andrà qui al posto del solo messaggio.
	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		submitted = true;
	}
</script>

<section class="online" id="divulgazione" aria-labelledby="online-title">
	<div class="inner">
		<div class="intro">
			<span class="eyebrow">Divulgazione online</span>
			<h2 class="section-title" id="online-title">
				Un incontro ogni due settimane, per parlare di <em>etologia</em> insieme.
			</h2>
			<p class="lede">
				Domande, casi reali, confronto diretto: un momento online pensato per chi vuole continuare
				a imparare, anche da casa.
			</p>

			<span class="status">
				<span class="status-dot" aria-hidden="true"></span>
				In arrivo: per ora raccolgo solo le adesioni
			</span>
		</div>

		<ol class="steps">
			{#each steps as step, i (step.title)}
				<li class="step">
					<span class="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</div>
				</li>
			{/each}
		</ol>

		<form class="signup" onsubmit={handleSubmit}>
			<label class="signup-label" for="online-email">
				Vuoi essere avvisato all'apertura delle iscrizioni?
			</label>
			<div class="signup-row">
				<input
					id="online-email"
					class="input"
					type="email"
					name="email"
					placeholder="La tua email"
					autocomplete="email"
					required
				/>
				<button class="btn btn-primary" type="submit">Avvisami</button>
			</div>
			<p class="signup-note" role="status">
				{#if submitted}
					Grazie! Il modulo però non è ancora attivo: per ora scrivimi dalla sezione contatti.
				{:else}
					Niente spam: una sola email quando aprono le iscrizioni.
				{/if}
			</p>
		</form>
	</div>
</section>

<style>
	/* ===== Mobile (base) ===== */
	.online {
		padding: 72px 0;
		background: var(--color-sand);
	}

	.inner {
		display: flex;
		flex-direction: column;
		gap: 48px;
		max-width: var(--container);
		margin-inline: auto;
		padding-inline: 24px;
	}

	.lede {
		margin: 0 0 24px;
		max-width: 520px;
		font-size: 1.05rem;
		line-height: 1.6;
		color: var(--color-ink-soft);
	}

	/* ---------- Stato "in arrivo" ---------- */
	.status {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 8px 16px;
		border-radius: 999px;
		background: var(--color-surface);
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--color-ink);
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--color-accent);
		box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-accent) 20%, transparent);
	}

	/* ---------- Modulo ---------- */
	.signup {
		max-width: 520px;
	}

	.signup-label {
		display: block;
		margin-bottom: 12px;
		font-weight: 700;
		color: var(--color-ink);
	}

	.signup-row {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.input {
		width: 100%;
		padding: 15px 20px;
		border: 1px solid var(--color-line);
		border-radius: 999px;
		background: var(--color-surface);
		font: inherit;
		font-size: 1rem;
		color: var(--color-ink);
	}

	.input::placeholder {
		color: var(--color-ink-soft);
	}

	.input:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 2px;
	}

	.signup-note {
		margin: 12px 0 0;
		font-size: 0.82rem;
		color: var(--color-ink-soft);
	}

	/* ---------- Passaggi ---------- */
	.steps {
		margin: 0;
		padding: 8px 24px;
		list-style: none;
		border-radius: var(--radius-lg);
		background: var(--color-surface);
	}

	.step {
		display: grid;
		grid-template-columns: 52px 1fr;
		gap: 12px;
		padding: 24px 0;
		border-bottom: 1px solid var(--color-line-soft);
	}

	.step:last-child {
		border-bottom: none;
	}

	.step-num {
		font-family: var(--font-display);
		font-size: 1.6rem;
		font-style: italic;
		line-height: 1.2;
		color: var(--color-accent);
	}

	h3 {
		margin: 0 0 6px;
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--color-ink);
	}

	.step p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.55;
		color: var(--color-ink-soft);
	}

	/* ===== Da 480px: email e bottone sulla stessa riga ===== */
	@media (min-width: 480px) {
		.signup-row {
			flex-direction: row;
		}

		.input {
			flex: 1;
		}
	}

	/* ===== Da 960px: testo e passaggi affiancati ===== */
	@media (min-width: 960px) {
		.online {
			padding: 112px 0;
		}

		/* Nell'HTML l'ordine è testo, passaggi, modulo (quello giusto su mobile).
		   Qui le aree rimettono testo e modulo a sinistra e i passaggi a destra. */
		.inner {
			display: grid;
			grid-template-columns: 1.1fr 0.9fr;
			grid-template-areas:
				'intro  steps'
				'signup steps';
			column-gap: 72px;
			row-gap: 36px;
		}

		.intro {
			grid-area: intro;
			align-self: end;
		}

		.signup {
			grid-area: signup;
			align-self: start;
		}

		.steps {
			grid-area: steps;
			align-self: center;
			padding: 8px 36px;
		}
	}
</style>
