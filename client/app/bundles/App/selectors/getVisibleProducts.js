import {createSelector} from 'reselect'

const currentAdminFilterOptionProduct = (state) => state.currentAdminFilterOptionProducts;
const products = (state) => state.products;

const getVisibleProducts = () => {
  return createSelector(
    [products, currentAdminFilterOptionProduct],
    (products, currentAdminFilterOptionProducts) => {
      const approved = currentAdminFilterOptionProducts.approved;
      const deflected = currentAdminFilterOptionProducts.deflected;
      const prepaid = currentAdminFilterOptionProducts.prepaid;
      return products.filter(product => (product &&
        (approved ? product.approved : product ) &&
        (deflected ? !product.approved : product) &&
        (prepaid ? (product.prepaid_products.length > 0) : product))
      );
    }
  );
};

export default getVisibleProducts();