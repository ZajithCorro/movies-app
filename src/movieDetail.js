import { nodes } from './nodes.js';

export function movieDetail() {
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
