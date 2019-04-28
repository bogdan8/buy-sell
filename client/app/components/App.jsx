import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from '../routes'
import '../style/App.sass';
import '../style/Auth.sass';
import '../style/Header.sass'
import '../style/Product.sass';
import '../style/Footer.sass';

import 'react-mdl/extra/material.js';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={ history }>
      { routes }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
