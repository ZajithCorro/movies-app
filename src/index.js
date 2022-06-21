import { api } from './axios.js';

async function getTrendingMoviesPreview() {
	const { data } = await api(`trending/movie/day`);
	const movies = data.results;

	movies.forEach((movie) => {
		const trendingPreviewMoviesContainer = document.querySelector(
			'#trendingPreview .trendingPreview-movieList'
		);

		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie-container');

		const movieImg = document.createElement('img');
		movieImg.classList.add('movie-img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

		movieContainer.appendChild(movieImg);
		trendingPreviewMoviesContainer.appendChild(movieContainer);
	});
}

async function getCategoriesPreview() {
	const { data } = await api('genre/movie/list');
	const categories = data.genres;
	const previewCategoriesContainer = document.querySelector(
		'#categoriesPreview .categoriesPreview-list'
	);

	categories.forEach((category) => {
		const categoryContainer = document.createElement('div');
		const categoryColor = document.createElement('span');
		const categoryTitle = document.createElement('p');
		const categoryTitleText = document.createTextNode(category.name);
		const classCategory = `category-genre-${category.id}`;

		categoryContainer.classList.add('category-container');
		categoryTitle.classList.add('category-title');
		categoryColor.classList.add(classCategory);

		categoryTitle.appendChild(categoryTitleText);
		categoryContainer.appendChild(categoryColor);
		categoryContainer.appendChild(categoryTitle);
		previewCategoriesContainer.appendChild(categoryContainer);
	});
}

getTrendingMoviesPreview();
getCategoriesPreview();
