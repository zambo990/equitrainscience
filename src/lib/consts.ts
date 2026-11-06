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
	href: string;
};

export const navLinks: NavLink[] = [
	{ label: 'Chi sono', href: '/#chi-sono' },
	{ label: 'Etologia', href: '/#etologia' },
	{ label: 'Divulgazione online', href: '/#divulgazione' },
	{ label: 'Ippomotricità', href: '/#ippomotricita' },
	{ label: 'Contatti', href: '/#contatti' }
];