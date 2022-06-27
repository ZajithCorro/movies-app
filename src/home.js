import { api } from './axios.js';
import { nodes } from './nodes.js';
import { createCategories, createMovies } from './utils.js';

async function getTrendingMoviesPreview() {
	const { data } = await api(`trending/movie/day`);
	const movies = data.results;

	createMovies(movies, nodes.trendingMoviesPreviewList);
}

async function getCategoriesPreview() {
	const { data } = await api('genre/movie/list');
	const categories = data.genres;
	createCategories(categories, nodes.categoriesPreviewList);
}

export function home() {
	nodes.searchFormInput.value = '';
	nodes.headerSection.classList.remove('header-container--long');
	nodes.headerSection.style.background = '';
	nodes.arrowBtn.classList.add('inactive');
	nodes.arrowBtn.classList.remove('header-arrow--white');
	nodes.headerTitle.classList.remove('inactive');
	nodes.headerCategoryTitle.classList.add('inactive');
	nodes.searchForm.classList.remove('inactive');

	nodes.trendingPreviewSection.classList.remove('inactive');
	nodes.categoriesPreviewSection.classList.remove('inactive');
	nodes.genericSection.classList.add('inactive');
	nodes.movieDetailSection.classList.add('inactive');
	getTrendingMoviesPreview();
	getCategoriesPreview();
}
