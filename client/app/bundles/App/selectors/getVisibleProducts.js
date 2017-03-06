import {createSelector} from 'reselect'

const currentAdminFilterOptionProduct = (state) => state.currentAdminFilterOptionProducts;
const getVisibilityFilterPrepaid = (state) => state.prepaidProducts;
const products = (state) => state.products;

const getVisibleProducts = () => {
  return createSelector(
      [getVisibilityFilterPrepaid, products, currentAdminFilterOptionProduct],
      (prepaidProducts, products, currentAdminFilterOptionProducts) => {
        const approved = currentAdminFilterOptionProducts.approved;
        const deflected = currentAdminFilterOptionProducts.deflected;
        const prepaid = currentAdminFilterOptionProducts.prepaid;
        return products.filter(product => (product &&
            (approved ? product.approved : product ) &&
            (deflected ? !product.approved : product) &&
            (prepaid ? prepaidProducts.includes(product.id) : product))
        );
      }
  );
};

export default getVisibleProducts();