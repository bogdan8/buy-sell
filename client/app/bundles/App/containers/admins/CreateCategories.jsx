import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {v4} from 'node-uuid';
import {Cell, Button, Textfield} from 'react-mdl';

import * as categoryActions from '../../actions/categoryActions';

class CreateCategories extends Component {
  handleClickShowModalWindow() {
    document.getElementById('modal-category').style.display = "block";
    document.getElementById("form_create_category").reset();
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-category').style.display = "none";
  };

  handleSubmit(e) {
    e.preventDefault();
    var paramsCategory = {
      id: v4(),
      name: document.getElementById('category').value
    };

    this.props.actions.addCategory(paramsCategory);
    document.getElementById('modal-category').style.display = "none";
  };

  render() {
    return (
      <Cell col={12} className="flex-center">
        <Cell col={12} className="flex-center">
          <Button id="create_category_btn" raised ripple
                  data-modal="#modal"
                  onClick={this.handleClickShowModalWindow}
          >
            <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Рубрику
          </Button>
        </Cell>
        <div id="modal-category" className="modal-block">
          <div className="modal modal__bg" role="dialog" aria-hidden="true">
            <div className="modal__dialog">
              <div className="modal__content">
                <h4>Додати нову рубрику:</h4>
                <form id="form_create_category" onSubmit={this.handleSubmit.bind(this)}>
                  <Textfield
                    type="text"
                    name="category"
                    label="Назва нової рубрики:"
                    floatingLabel
                    id="category"
                    required
                  />
                  <div className="flex-center">
                    <Button raised ripple
                            type="submit"
                    >
                      <i className="fa fa-plus-circle" aria-hidden="true"/> Додати
                    </Button>
                  </div>
                </form>
                <span className="modal__close modal-button-close" onClick={this.handleClickHideModalWindow}>
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

export default connect(null, mapDispatchToProps)(CreateCategories);
