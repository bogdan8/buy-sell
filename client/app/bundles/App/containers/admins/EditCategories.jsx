import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Cell, Button, Textfield} from 'react-mdl';

import * as categoryActions from '../../actions/categoryActions';

class EditCategories extends Component {
  handleClickHideModalWindow() { // hide modal window
    document.getElementById('modal-category-edit').style.display = "none";
  };

  handleSubmitEdit(e) { // submit form edit category
    e.preventDefault();
    let id = document.getElementById('category-id').value;
    let name = document.getElementById('category-edit').value;

    let paramsCategory = {
      id: id,
      name: name
    };

    this.props.actions.editCategory(paramsCategory);

    document.getElementById('modal-category-edit').style.display = "none"; // hide modal window
  };

  render() {
    return (
      <Cell col={12}>
        <div id="modal-category-edit" className="modal-block">
          <div className="modal modal__bg" role="dialog" aria-hidden="true">
            <div className="modal__dialog">
              <div className="modal__content">
                <h4>Редагувати рубрику:</h4>
                <form id="form_category_edit" onSubmit={this.handleSubmitEdit.bind(this)}>
                  <input type="text" hidden="hidden" value='' id="category-id"/>
                  <Textfield
                    type="text"
                    name="category-edit"
                    label="Назва рубрики:"
                    floatingLabel
                    id="category-edit"
                    placeholder=" "
                    required
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


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(EditCategories);
