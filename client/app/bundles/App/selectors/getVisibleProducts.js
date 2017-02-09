import {createSelector} from 'reselect'

const currentAdminFilterOptions = (state) => state.currentAdminFilterOption;
const getVisibilityFilterPrepaid = (state) => state.prepaidProducts;
const products = (state) => state.products;

const getVisibleProducts = () => {
  return createSelector(
      [getVisibilityFilterPrepaid, products, currentAdminFilterOptions],
      (prepaidProducts, products, currentAdminFilterOption) => {
        const approved = currentAdminFilterOption.approved;
        const deflected = currentAdminFilterOption.deflected;
        const prepaid = currentAdminFilterOption.prepaid;
        return products.filter(product => (product &&
            (approved ? product.approved : product ) &&
            (deflected ? !product.approved : product) &&
            (prepaid ? prepaidProducts.includes(product.id) : product))
        );
      }
  );
};

export default getVisibleProducts();