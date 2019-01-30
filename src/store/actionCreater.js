import {
  CHANGE_INPUT_VALUE,
  DELETE_ONE_ITEM,
  ADD_ONE_ITEM
} from './actionTypes'

export const inputValueChangedAction = (inputValue) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value: inputValue
  }
}

export const addOneItemAction = () => {
  return {
    type: ADD_ONE_ITEM
  }
}

export const deleteOneItemAction = (index) => {
  return {
    type: DELETE_ONE_ITEM,
    index
  }
}