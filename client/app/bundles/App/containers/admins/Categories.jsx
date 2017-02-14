import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell} from 'react-mdl';
import {removeCategory} from '../../actions/categories.js';

import {CreateCategories, EditCategories, CategoriesList} from '../../components/admin';

class Categories extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickShowModalWindow(id, name) {
    document.getElementById('modal-category-edit').style.display = "block";
    document.getElementById('category-id').value = id;
    document.getElementById('category-edit').value = name;
  };

  handleClickRemoveCategory(index) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props._removeCategory(index);
      alert("Видалено!")
    } else {
      alert("Відмінено")
    }
  }

  render() {
    const {categories} = this.props;
    const categoryAction = (category, index) => {
      return (
          <div>
            <a id="edit_category_input" data-modal="#modal" onClick={() => {
              this.handleClickShowModalWindow(category.id, category.name)
            }}>
              <i className="fa fa-pencil" aria-hidden="true"/>
            </a>
            <a id="remove_category" onClick={() => {
              this.handleClickRemoveCategory(index)
            }}>
              <i className="fa fa-trash" aria-hidden="true"/>
            </a>
          </div>
      )
    };
    const mappedCategories = categories.map((category, index) => {
      let active = ((index % 2) ? "active-tr" : "");
      let nameBlock = (category) => {
        return (
            <div>
              <p className="td-thead-title">Назва</p>
              <p id="name_category">{category.name}</p>
            </div>
        )
      };
      return {
        name: nameBlock(category),
        action: categoryAction(category, index),
        className: active,
      }
    });
    return (
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <div className="body-header-title">
                  <p>Таблиця Рубрик:</p>
                </div>
              </Cell>
              <CategoriesList mappedCategories={mappedCategories}/>
              <EditCategories/>
              <CreateCategories />
            </Grid>
          </Cell>
        </Grid>
    )
  }
}
export default connect(
    state => ({
      categories: state.categories
    }),
    dispatch => ({
      _removeCategory: (indexCategory) => {
        dispatch(removeCategory(indexCategory))
      }
    })
)(Categories);