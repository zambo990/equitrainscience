import logoImg from '$lib/assets/logo.jpg';

export const site = {
	// Indirizzo pubblico del sito, senza "/" finale: serve per l'anteprima social
	url: 'https://dominio-da-definire.it',
	name: 'eli. — Etologa Equina',
	shortName: 'eli.',
	tagline: 'Etologa equina',
	logo: logoImg,
	instagramUrl: 'https://instagram.com/...',
	contactEmail: 'email@daconfermare.it',
	vatNumber: 'da inserire'
};

export type NavLink = {
	label: string;
	/** id della sezione nella home: il link completo lo costruiscono i componenti */
	id: string;
};

export const navLinks: NavLink[] = [
	{ label: 'Chi sono', id: 'chi-sono' },
	{ label: 'Etologia', id: 'etologia' },
	{ label: 'Divulgazione online', id: 'divulgazione' },
	{ label: 'Ippomotricità', id: 'ippomotricita' },
	{ label: 'Contatti', id: 'contatti' }
];