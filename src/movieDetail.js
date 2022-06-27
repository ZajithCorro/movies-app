import { api } from './axios.js';
import { nodes } from './nodes.js';
import { createCategories } from './utils.js';

export function movieDetail() {
	getMovieDetail();
	renderUI();
}

async function getMovieDetail() {
	const [, id] = window.location.hash.split('=');
	const { data: movie } = await api(`/movie/${id}`);
	const urlPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

	nodes.headerSection.style.background = `
	linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%),
	url(${urlPoster})`;
	nodes.movieDetailTitle.textContent = movie.title;
	nodes.movieDetailDescription.textContent = movie.overview;
	nodes.movieDetailScore.textContent = movie.vote_average;

	createCategories(movie.genres, nodes.movieDetailCategoriesList);
}

function renderUI() {
	nodes.headerSection.classList.add('header-container--long');
	nodes.arrowBtn.classList.remove('inactive');
	nodes.arrowBtn.classList.add('header-arrow--white');
	nodes.headerTitle.classList.add('inactive');
	nodes.headerCategoryTitle.classList.add('inactive');
	nodes.searchForm.classList.add('inactive');

	nodes.trendingPreviewSection.classList.add('inactive');
	nodes.categoriesPreviewSection.classList.add('inactive');
	nodes.genericSection.classList.add('inactive');
	nodes.movieDetailSection.classList.remove('inactive');
}
