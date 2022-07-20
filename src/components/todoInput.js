
import { useState } from 'react'
import { addTodoAction } from '../store/actionCreators'
import { connect } from 'react-redux'

function TodoInput({ list, submitTodo }) {
    const [value, setValue] = useState('')
    const add = () => {
        if ((value ?? '') !== '') {
            submitTodo(value)
            setValue('')
        }
    }
    return (
        <div className="todo-input">
            <input
                className="new-todo"
                placeholder="请输入新的待办项"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className='todo-submit' onClick={add}>添加</button>
        </div>

    )
}

const mapStateToProps = state => ({
    list: state.list
})
const mapDispatchToProps = dispatch => ({
    submitTodo(value) {
        dispatch(addTodoAction(value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)