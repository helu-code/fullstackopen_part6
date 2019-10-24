
const MsgData = (msg,msgtype) => {
  return {
    msg: msg,
    msgtype: msgtype,
  }
}

const initialState =  MsgData('',0)

const notificationReducer = (state = initialState,action) => {
  console.log('notification state now: ', state)
  console.log('notification action', action)
  switch (action.type) {
    case 'SET_MSG':
      state = MsgData(action.data.msg,action.data.msgtype)
      return state
    default:
      return state
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const setNotification = (msg,msgtype,timeout) => {
  return async dispatch => {
    dispatch({
    type: 'SET_MSG',
    data:{
      msg: msg,
      msgtype: msgtype,
    }
  })
  await sleep(timeout * 1000)
  dispatch({
    type: 'SET_MSG',
    data:{
      msg: '',
      msgtype: 0,
    }
  })
}
}


export default notificationReducer