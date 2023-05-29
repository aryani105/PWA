import RestaurantSource from '../../data/restaurant-source';
import { createPageLoaderTemplate } from '../templates/template-creator';

const List = {
    async afterRender() {
        const itemContainer = document.querySelector('post-list');
        const { restaurants } = await PemadamSource.listResto();
        itemContainer.value = restaurants;
        createPageLoaderTemplate.remove();
    },
};
export default List;