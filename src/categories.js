import { nodes } from './nodes.js';
import { api } from './axios.js';
import { createMovie } from './utils.js';

export function categories() {
	const hash = location.hash.split('=')[1];
	const [id, categoryName] = hash.split('&');

	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	renderUI(categoryName);
	getMoviesByCategory(id);
}

async function getMoviesByCategory(id) {
	const { data } = await api(`discover/movie`, {
		params: {
			with_genres: id,
		},
	});

	const movies = data.results;
	createMovie(movies, nodes.genericSection);
}

function renderUI(categoryName) {
	nodes.headerSection.classList.remove('header-container--long');
	nodes.headerSection.style.background = '';
	nodes.arrowBtn.classList.remove('inactive');
	nodes.arrowBtn.classList.remove('header-arrow--white');
	nodes.headerTitle.classList.add('inactive');
	nodes.headerCategoryTitle.classList.remove('inactive');
	nodes.searchForm.classList.add('inactive');
	nodes.headerCategoryTitle.textContent = categoryName.replaceAll('-', ' ');

	nodes.trendingPreviewSection.classList.add('inactive');
	nodes.categoriesPreviewSection.classList.add('inactive');
	nodes.genericSection.classList.remove('inactive');
	nodes.movieDetailSection.classList.add('inactive');
}
