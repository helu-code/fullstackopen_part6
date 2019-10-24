import anecdoteService from "../services/anecdotes"


// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

//const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [],action) => {
  console.log('anecdotes state now: ', state)
  console.log('anecdotes action', action)
  switch (action.type) {
    case 'NEW_ANECDOTE':
      state =  [...state, action.data]
      return state
    case 'INIT_ANECDOTES':
      state = action.data
      state = state.sort((a,b) => (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))
      return state
    case 'VOTE':
      const changedAnec = action.data.anecdote
      state = state.map(anec => anec.id !== changedAnec.id ? anec : changedAnec)
      state = state.sort((a,b) => (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))
      return state
    default:
      state = state.sort((a,b) => (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  })
}
}

export const createAnecdote = (content) => { // highlight-line
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
    type: 'NEW_ANECDOTE',
    data: newAnecdote
  })
}
}

export const voteAnecdote = (anecdote) => {
  return async dispatch =>{
    anecdote.votes += 1
    await anecdoteService.update(anecdote)
    dispatch({
    type: 'VOTE',
    data: {anecdote},
  })
}
}


export default anecdoteReducer