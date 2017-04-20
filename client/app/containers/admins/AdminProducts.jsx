import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AuthorizedComponent} from 'react-router-role-authorization';
import {Grid, Cell, Switch, Button, Textfield} from 'react-mdl';

import * as productActions from '../../actions/productActions';
import * as paginationActions from '../../actions/paginationActions';

import {AdminProductList} from '../../components/admin';
import AdminProductsPagination from './AdminProductsPagination';

class AdminProducts extends AuthorizedComponent {
  constructor(props) {
    super(props);
    this.state = { // state initializes the productId to get a product id that is chosen for confirmation of payment window and move action
      productId: ''
    };

    // for check role is admin
    this.userRoles = [props.user.role];
    this.notAuthorizedPath = '/';
  }

  handleUnauthorizedRole(routeRoles, userRoles) {
    const {router} = this.context;
    router.push('/');
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    this.props.actions.setAdminFilterOptionProducts(e.target.id, e.target.checked); // get the value of the selected category to filter products

    document.getElementById(e.target.id).value = e.target.checked; // record selected in the value that you can get all selections
    let approved = document.getElementById('approved').value;
    let deflected = document.getElementById('deflected').value;
    let prepaid = document.getElementById('prepaid').value;
    this.props.actions.fetchAdminPagination(1, `approved=${approved}&deflected=${deflected}&prepaid=${prepaid}`);
  };

  handleClickRemoveProduct(indexProduct, id) { // remove product
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props.actions.removeProduct(indexProduct, id);
    } else {
      alert("Відмінено")
    }
  }

  handleSubmit(e) { // submit form prepaid product with end date
    e.preventDefault();
    let end_date = document.getElementById('prepaid_end_date').value;
    let valuePrepaidProduct = {
      product_id: this.state.productId,
      prepaid_end_date: end_date
    };
    this.props.actions.payProduct(valuePrepaidProduct);
    document.getElementById('modal-product').style.display = "none";

  }

  handleClickChangeState(id, boolean) { // options to approved product or unapproved
    if (boolean ? confirm("Затвердити продукт?") : confirm("Не затвердити продукт?")) {
      let paramsProduct = {
        id: id,
        approved: boolean
      };
      this.props.actions.stateProduct(paramsProduct);
    } else {
      alert("Відмінено")
    }
  }

  handleClickUnpaidProduct(productId) {
    if (confirm("Ви дійсно хочите відмінити предоплату?")) {
      this.props.actions.unpaidProduct(productId);
    } else {
      alert("Відмінено")
    }
  }

  handleClickShowModalWindow(productId) { // show modal window for set end date prepaid product
    this.setState({
      productId: productId
    });
    document.getElementById('modal-product').style.display = "block";
    document.getElementById("form_prepaid_product").reset();
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-product').style.display = "none";
  };

  render() {
    const {products, adminFilterOption} = this.props;
    /* filter product where product is prepaid_products */
    const with_prepaid = products.filter(product => (product.prepaid_products != undefined) ? product.prepaid_products.length : '');

    /* filter product where product not prepaid_products */
    const no_prepaid = products.filter(product => (product.prepaid_products != undefined) ? !product.prepaid_products.length : '');

    /* concat all product, to products which were prepaid and which were not prepaid at the end */
    const all_product = with_prepaid.concat(no_prepaid);

    /* map product for put in table */
    const mappedProducts = all_product.map((product, index) => {
      if (product.prepaid_products != undefined && product.prepaid_products.length) {
        var active = 'active-prepaid';
      } else {
        var active = ((index % 2) ? "active-tr hover-tr" : "hover-tr");
      }
      let photoBlock = (product) => {
        return (
          <div className="td-block-height-auto">
            <p className="td-thead-title">Фото</p>
            <div className="product-image">
              {product.image_file_name ?
                <img
                  data-modal="#modal"
                  onClick={() => document.getElementById(`modal-image-${product.id}`).style.display = "block"}
                  src={`/system/products/images/${product.id}/medium/${product.image_file_name}`}/>
                :
                <img src='/missing/missing.png'/>
              }
            </div>
            <div id={`modal-image-${product.id}`} className="modal-block">
              <div className="modal modal__bg" role="dialog" aria-hidden="true">
                <div className="modal__dialog">
                  <div className="modal__content">
                    <Grid className="product-image-modal">
                      <Cell col={12}>
                        <img src={`/system/products/images/${product.id}/original/${product.image_file_name}`}/>
                      </Cell>
                    </Grid>
                    <span className="modal__close modal-button-close"
                          onClick={() => document.getElementById(`modal-image-${product.id}`).style.display = "none"}>
                      <i className="fa fa-times" aria-hidden="true"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      };
      let descriptionBlock = (product) => {
        return (
          <div className="td-block-height-auto">
            <p className="td-thead-title">Оголошення</p>
            <p>{product.text}</p>
          </div>
        )
      };
      let contactBlock = (product) => {
        return (
          <div className="product-user-information">
            <p className="td-thead-title">Контакти</p>
            <p>
              <i className="fa fa-user-circle" aria-hidden="true"/>
              {product.user.username}
            </p>
            <p>
              <i className="fa fa-envelope-open" aria-hidden="true"/>
              {product.user.email}
            </p>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"/>
              {product.user.location}
            </p>
          </div>
        )
      };
      let priceBlock = (product) => {
        return (
          <div>
            <p className="td-thead-title">Ціна</p>
            <p>{product.price}</p>
          </div>
        )
      };
      let actionBlock = (product) => {
        return (
          <div>
            <p className="td-thead-title">Дія</p>
            <a id="is_approved" onClick={() => {
              !product.approved ? this.handleClickChangeState(product.id, true) : ''
            }}>
              <i className={ product.approved ? "fa fa-thumbs-o-up active-i" : "fa fa-thumbs-o-up"}
                 aria-hidden="true"
              />
            </a>
            <a id="no_approved" onClick={() => {
              product.approved ? this.handleClickChangeState(product.id, false) : ''
            }}>
              <i className={ product.approved == false ? "fa fa-thumbs-o-down active-i" : "fa fa-thumbs-o-down"}
                 aria-hidden="true"/>
            </a>
            <a data-modal="#modal"
               id="prepaid_product" onClick={() => {
              (product.approved && product.prepaid_products.length <= 0) ? this.handleClickShowModalWindow(product.id) : this.handleClickUnpaidProduct(product.id)
            }}>
              <i
                className={ (product.prepaid_products.length > 0) ? "fa fa-money active-i" : "fa fa-money" }
                aria-hidden="true"/>
            </a>
            <a id="remove_product" onClick={() => {
              this.handleClickRemoveProduct(index, product.id)
            }}>
              <i className="fa fa-trash" aria-hidden="true"/>
            </a>
            {/* Modal window end date prepaid product */}
            <div id="modal-product" className="modal-block">
              <div className="modal modal__bg" role="dialog" aria-hidden="true">
                <div className="modal__dialog">
                  <div className="modal__content ">
                    <h4>Дата оплачення продукту:</h4>
                    <form id="form_prepaid_product" onSubmit={this.handleSubmit.bind(this)}
                          className="auth-block-grid form-with-border">
                      <Grid>
                        <Cell col={12} tablet={12} phone={12}>
                          <Textfield
                            type="date"
                            name="prepaid_end_date"
                            label=""
                            id="prepaid_end_date"
                          />
                        </Cell>
                      </Grid>
                      <Grid>
                        <Cell col={12} className="flex-center">
                          <Button raised ripple
                                  type="submit"
                          >
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"/> Підтвердити
                          </Button>
                        </Cell>
                      </Grid>
                    </form>
                    <span className="modal__close modal-button-close" onClick={this.handleClickHideModalWindow}>
                      <i className="fa fa-times" aria-hidden="true"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      };
      return {
        photo: photoBlock(product),
        description: descriptionBlock(product),
        contact: contactBlock(product),
        price: priceBlock(product),
        action: actionBlock(product),
        className: active,
      }
    });
    return (
      <Grid>
        <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
          <Grid>
            <Cell col={12}>
              <Cell col={12} className="body-header-title new-products">
                <Grid>
                  <Cell col={5} tablet={12} phone={12}>
                    <p>Нові Оголошення:</p>
                  </Cell>
                  <Cell col={7} tablet={12} phone={12} className="checkbox-block">
                    <div>
                      <Switch onChange={this.handleClickSelect.bind(this)} id="approved">Затверджені</Switch>
                    </div>
                    <div>
                      <Switch onChange={this.handleClickSelect.bind(this)} id="deflected">Відхилені</Switch>
                    </div>
                    <div>
                      <Switch onChange={this.handleClickSelect.bind(this)} id="prepaid">Оплачені</Switch>
                    </div>
                  </Cell>
                </Grid>
              </Cell>
            </Cell>
            <Cell col={12}>
              <AdminProductList mappedProducts={mappedProducts}/>
            </Cell>
            <AdminProductsPagination
              query={`approved=${adminFilterOption.approved}&deflected=${adminFilterOption.deflected}&prepaid=${adminFilterOption.prepaid}`}
            />
          </Grid>
        </Cell>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    user: state.session,
    adminFilterOption: state.adminFilterOption
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...productActions, ...paginationActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
