import { nodes } from './nodes.js';
import { api } from './axios.js';
import { createMovies } from './utils.js';

export function search() {
	const [_, query] = location.hash.split('=');

	renderUI();
	getMoviesByQuery(query);
}

async function getMoviesByQuery(query) {
	const { data } = await api('search/movie', {
		params: {
			query,
		},
	});
	const movies = data.results;

	createMovies(movies, nodes.genericSection);
}

function renderUI() {
	nodes.headerSection.classList.remove('header-container--long');
	nodes.headerSection.style.background = '';
	nodes.arrowBtn.classList.remove('inactive');
	nodes.arrowBtn.classList.remove('header-arrow--white');
	nodes.headerTitle.classList.add('inactive');
	nodes.headerCategoryTitle.classList.add('inactive');
	nodes.searchForm.classList.remove('inactive');

	nodes.trendingPreviewSection.classList.add('inactive');
	nodes.categoriesPreviewSection.classList.add('inactive');
	nodes.genericSection.classList.remove('inactive');
	nodes.movieDetailSection.classList.add('inactive');
}
