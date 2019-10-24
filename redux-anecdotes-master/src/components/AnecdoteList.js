import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer.js'
import {setNotification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const anecdotes = props.visibleAnecdotes

  const vote = (id) => {
    console.log('vote', id)
    const anecToChange = anecdotes.find(n => n.id === id)
    props.voteAnecdote(anecToChange)
    props.setNotification('you voted '+anecToChange.content,1,2)
  }

  return (
    
    <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
      
      </div>
  )

}

const anecdotesToShow = ({anecdotes,filter}) => {
  if (filter.length > 0)
  return anecdotes.filter(anecdote => anecdote.content.includes(filter))

return anecdotes
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(AnecdoteList)

//export default AnecdoteList