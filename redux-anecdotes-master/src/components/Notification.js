import React from 'react'
import {setNotification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notification = props.notification
  
  if (notification.msgtype)
  {
    return (
      <div style={style}>
        {notification.msg}
      </div>
    )
  }
  else
    return null
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Notification)