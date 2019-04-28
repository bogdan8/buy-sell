import React from 'react'
import {connect} from 'react-redux'
import {FABButton} from 'react-mdl'

function Footer(props) {
  return (
    <div className="footer-block">
      <a href="https://drive.google.com/open?id=18MlApzQmobxQshBycuwzo6LBcdPf2hfS" target="_blank">
        <FABButton ripple id='demo-menu-lower-left'>
          <i className="fa fa-android" aria-hidden="true"/>
        </FABButton>
      </a>
    </div>
  )
}
export default Footer
