const defaultState = {
  inputValue: '',
  msg: []
}

export default (state = defaultState, action) => {
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === 'add_one_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.msg.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === 'delete_one_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.msg.splice(action.index, 1)
    return newState
  }

  return state
}