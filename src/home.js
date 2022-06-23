import { api } from './axios.js';
import { nodes } from './nodes.js';
import { createMovie } from './utils.js';

async function getTrendingMoviesPreview() {
	const { data } = await api(`trending/movie/day`);
	const movies = data.results;

	createMovie(movies, nodes.trendingMoviesPreviewList);
}

async function getCategoriesPreview() {
	const { data } = await api('genre/movie/list');
	const categories = data.genres;
	nodes.categoriesPreviewList.innerHTML = '';

	categories.forEach((category) => {
		const categoryContainer = document.createElement('div');
		const categoryColor = document.createElement('span');
		const categoryTitle = document.createElement('p');
		const categoryTitleText = document.createTextNode(category.name);
		const classCategory = `category-genre-${category.id}`;

		categoryContainer.classList.add('category-container');
		categoryTitle.classList.add('category-title');
		categoryColor.classList.add(classCategory);

		categoryContainer.addEventListener('click', () => {
			location.hash = `#category=${category.id}&${category.name.replaceAll(' ', '-')}`;
		});

		categoryTitle.appendChild(categoryTitleText);
		categoryContainer.appendChild(categoryColor);
		categoryContainer.appendChild(categoryTitle);
		nodes.categoriesPreviewList.appendChild(categoryContainer);
	});
}

export function home() {
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
