import React from 'react'
import 'antd/dist/antd.min.css'
import { Button, List, Input } from 'antd'
import { connect } from 'react-redux'
import {
  inputValueChangedAction,
  addOneItemAction,
  deleteOneItemAction,
  getInitListActionFromAJAX
} from '../store/actionCreater'

class Comment extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <header style={{ margin: '10px 10px' }}>
          <Input
            style={{ width: '200px' }}
            onChange={ this.props.txtChanged }
          />
          <Button
            type="primary"
            style={{ marginLeft: '10px' }}
            onClick={ this.props.add }
          >添加</Button>
        </header>

        <List
          style={{ marginLeft: '10px', width: '400px' }}
          bordered
          dataSource={ this.props.msg }
          renderItem={(item, index) => (<List.Item onClick={ () => this.props.deleteItem(index) }>{item}</List.Item>)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    msg: state.msg,
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    txtChanged(e) {
      const action = inputValueChangedAction(e.target.value)
      dispatch(action)
    },
    add() {
      const action = addOneItemAction()
      dispatch(action)
    },
    deleteItem(index) {
      const action = deleteOneItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)