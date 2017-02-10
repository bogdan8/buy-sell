import React, {Component} from 'react';
import {connect} from 'react-redux';
import createFragment from 'react-addons-create-fragment';
import {Cell, Button, Textfield, DataTable, TableHeader} from 'react-mdl';

import {editCategory, removeCategory} from '../../actions/categories.js';

class EditCategories extends Component {

  handleClickShowModalWindow(id, name) {
    document.getElementById('modal-category-edit').style.display = "block";
    document.getElementById('category-id').value = id;
    document.getElementById('category-edit').value = name;
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-category-edit').style.display = "none";
  };

  handleSubmitEdit(e) {
    e.preventDefault();
    var id = document.getElementById('category-id').value;
    var name = document.getElementById('category-edit').value;

    var paramsCategory = {
      id: id,
      name: name
    };

    this.props._editCategory(paramsCategory);

    document.getElementById('modal-category-edit').style.display = "none";

    alert('Успішно відредаговано');
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
            <a data-modal="#modal" onClick={() => {
              this.handleClickShowModalWindow(category.id, category.name)
            }}>
              <i className="fa fa-pencil" aria-hidden="true"/>
            </a>
            <a onClick={() => {
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
              <p>{category.name}</p>
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
        <Cell col={12}>
          <DataTable
              className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
              data-tablesaw-mode="stack"
              rows={mappedCategories}
          >
            <TableHeader
                name="name"
                tooltip="Назва рубрики"
                scope="col"
                data-tablesaw-priority="1"
                data-tablesaw-sortable-col
                width="90%"
                className="table-thead"
            >
              Назва
            </TableHeader>
            <TableHeader
                name="action"
                tooltip="Дії над рубрикою"
                scope="col"
                data-tablesaw-priority="2"
                data-tablesaw-sortable-col
                width="10%"
                className="table-thead"
            >
              Дії
            </TableHeader>
          </DataTable>

          <div id="modal-category-edit" className="modal-block">
            <div className="modal modal__bg" role="dialog" aria-hidden="true">
              <div className="modal__dialog">
                <div className="modal__content">
                  <h4>Редагувати рубрику:</h4>
                  <form onSubmit={this.handleSubmitEdit.bind(this)}>
                    <input type="text" hidden="hidden" value='' id="category-id"/>
                    <Textfield
                        type="text"
                        name="category-edit"
                        label="Назва рубрики:"
                        floatingLabel
                        id="category-edit"
                        placeholder=" "
                    />
                    <div className="flex-center">
                      <Button raised ripple
                              type="submit"
                      >
                        <i className="fa fa-plus-pencil" aria-hidden="true"/> Редагувати
                      </Button>
                    </div>
                  </form>
                  <span className="modal__close modal-button-close"
                        onClick={this.handleClickHideModalWindow.bind(this)}>
                          <i className="fa fa-times" aria-hidden="true"/>
                        </span>
                </div>
              </div>
            </div>
          </div>
        </Cell>
    )
  }
}
export default connect(
    state => ({
      categories: state.categories
    }),
    dispatch => ({
      _editCategory: (paramsCategory) => {
        dispatch(editCategory(paramsCategory))
      },
      _removeCategory: (indexCategory) => {
        dispatch(removeCategory(indexCategory))
      }
    })
)(EditCategories);
