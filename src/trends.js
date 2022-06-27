import { nodes } from './nodes.js';
import { api } from './axios.js';
import { createMovies } from './utils.js';

export function trends() {
	renderUI();
	getTrendings();
}

async function getTrendings() {
	const { data } = await api(`trending/movie/day`);
	const movies = data.results;

	createMovies(movies, nodes.genericSection);
}

function renderUI() {
	nodes.headerSection.classList.remove('header-container--long');
	nodes.headerSection.style.background = '';
	nodes.arrowBtn.classList.remove('inactive');
	nodes.arrowBtn.classList.remove('header-arrow--white');
	nodes.headerTitle.classList.add('inactive');
	nodes.headerCategoryTitle.classList.remove('inactive');
	nodes.searchForm.classList.add('inactive');
	nodes.headerCategoryTitle.textContent = 'Trending';

	nodes.trendingPreviewSection.classList.add('inactive');
	nodes.categoriesPreviewSection.classList.add('inactive');
	nodes.genericSection.classList.remove('inactive');
	nodes.movieDetailSection.classList.add('inactive');
}
