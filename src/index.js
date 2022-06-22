import { categories } from './categories.js';
import { home } from './home.js';
import { movieDetail } from './movieDetail.js';
import { search } from './search.js';
import { trends } from './trends.js';
import { nodes } from './nodes.js';

function navigation() {
	const hash = window.location.hash;

	if (hash.startsWith('#trends')) return trends();
	if (hash.startsWith('#search=')) return search();
	if (hash.startsWith('#movie=')) return movieDetail();
	if (hash.startsWith('#category=')) return categories();

	home();
}

nodes.searchFormBtn.addEventListener('click', () => (location.hash = '#search='));
nodes.trendingBtn.addEventListener('click', () => (location.hash = '#trends'));
nodes.arrowBtn.addEventListener('click', () => (location.hash = '#home'));
window.addEventListener('DOMContentLoaded', navigation);
window.addEventListener('hashchange', navigation);
