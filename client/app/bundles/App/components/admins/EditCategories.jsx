import React, {Component} from 'react';
import {connect} from 'react-redux';

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

    this.props.categories.map((item) => {
      if(item.id == id){
        item.name = name;
      }
    });

    this.props.editCategory(paramsCategory);

    document.getElementById('modal-category-edit').style.display = "none";

    alert('Успішно відредаговано');
  };

  render() {
    return (
        <div className="mdl-cell mdl-cell--12-col">
          <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                 data-tablesaw-mode="stack">
            <thead className="table-thead">
            <tr>
              <th scope="col" data-tablesaw-priority="1" data-tablesaw-sortable-col width="90%">Назва рубрики
              </th>
              <th scope="col" data-tablesaw-priority="2" data-tablesaw-sortable-col width="10%">Дії</th>
            </tr>
            </thead>
            <tbody>
            { this.props.categories.map((items, index) => {
              return (
                  <tr key={items.id} className={(index % 2) ? "active-tr" : ""}>
                    <td className="mdl-data-table__cell--non-numeric">
                      <p className="td-thead-title">Назва рубрики</p>
                      <p>{items.name}</p>
                    </td>
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a data-modal="#modal" onClick={() => {
                        this.handleClickShowModalWindow(items.id, items.name)
                      }}>
                        <i className="fa fa-pencil" aria-hidden="true"/>
                      </a>
                      <a href="">
                        <i className="fa fa-trash" aria-hidden="true"/>
                      </a>
                    </td>
                  </tr>
              )
            })}
            </tbody>
          </table>
          <div id="modal-category-edit" className="modal-block">
            <div className="modal modal__bg" role="dialog" aria-hidden="true">
              <div className="modal__dialog">
                <div className="modal__content">
                  <h4>Редагувати рубрику:</h4>
                  <form onSubmit={this.handleSubmitEdit.bind(this)}>
                    <input type="text" hidden="hidden" value='' id="category-id"/>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input" type="text" id="category-edit" placeholder=""/>
                      <label className="mdl-textfield__label" htmlFor="sample3">Назва рубрики:</label>
                    </div>
                    <div className="flex-center">
                      <button type="submit"
                              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                        <i className="fa fa-plus-pencil" aria-hidden="true"/> Редагувати
                      </button>
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
        </div>
    )
  }

}
export default connect(
    state => ({
      categories: state.categories
    }),
    dispatch => ({
      editCategory: (items) => {
        dispatch({
          type: 'EDIT_CATEGORY',
          data: items
        });
      }
    })
)(EditCategories);
