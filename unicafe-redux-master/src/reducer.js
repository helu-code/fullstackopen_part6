const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const goodstate = {good:state.good + 1,ok:state.ok,bad:state.bad}
      return goodstate
    case 'OK':
      //state.ok += 1
      const okstate = {good:state.good,ok:state.ok + 1,bad:state.bad}
      return okstate
    case 'BAD':
        const badstate = {good:state.good,ok:state.ok,bad:state.bad + 1}
      return badstate
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer