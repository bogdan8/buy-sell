import React from 'react'
import { Menu, Notification, Footer } from '../components'
import history from '../history'
import routes from '../routes'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    history.push('/products')
  }

  render() {}
}
