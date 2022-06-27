export function $(selector) {
	return document.querySelector(selector);
}

export function createMovies(movies, container) {
	container.innerHTML = '';
	movies.forEach((movie) => {
		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie-container');
		movieContainer.setAttribute('data-id', movie.id);

		const movieImg = document.createElement('img');
		movieImg.classList.add('movie-img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
		movieImg.setAttribute('loading', 'lazy');

		movieContainer.appendChild(movieImg);
		container.appendChild(movieContainer);
	});

	container.addEventListener('click', (e) => {
		const { target } = e;
		const { id } = target.closest('.movie-container').dataset;

		location.hash = `#movie=${id}`;
	});
}

export function createCategories(categories, container) {
	container.innerHTML = '';
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
		container.appendChild(categoryContainer);
	});
}
