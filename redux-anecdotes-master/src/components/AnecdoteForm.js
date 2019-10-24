import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer.js'
import {setNotification} from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value

    props.createAnecdote(content)
    
    props.setNotification('you added '+content,1,5)
  }


return(
  <form onSubmit={addAnecdote}>
  <div><input name="anecdote" /></div>
  <button type="submit">create</button>
</form>
)
}


const mapDispatchToProps = {
  createAnecdote,
  setNotification
}


export default connect(
  null,
  mapDispatchToProps  
 ) (NewAnecdote)