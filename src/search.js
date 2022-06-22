import { nodes } from './nodes.js';

export function search() {
	nodes.headerSection.classList.remove('header-container--long');
	nodes.headerSection.style.background = '';
	nodes.arrowBtn.classList.remove('inactive');
	nodes.arrowBtn.classList.remove('header-arrow--white');
	nodes.headerTitle.classList.add('inactive');
	nodes.headerCategoryTitle.classList.remove('inactive');
	nodes.searchForm.classList.remove('inactive');

	nodes.trendingPreviewSection.classList.add('inactive');
	nodes.categoriesPreviewSection.classList.add('inactive');
	nodes.genericSection.classList.remove('inactive');
	nodes.movieDetailSection.classList.add('inactive');
}
