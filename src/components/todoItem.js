import React from "react";
import { connect } from 'react-redux'
import { delTodoAction, updateTodoAction } from '../store/actionCreators'
import useTodoList from "../hook/useTodoList";

function TodoItem({ list, updateTodo, deleteTodo }) {

    const curList = useTodoList()

    return (
        <ul className="todo-list">
            {
                curList.map((item) =>
                (
                    <li className="todo-item" key={item.id} >
                        <input
                            className="toggle"
                            type="checkbox"
                            defaultChecked={item.isCompleted}
                            onChange={() => updateTodo(item.id, item.isCompleted)}

                        />
                        <label className={item.isCompleted ? 'finish' : ''}>{item.content}</label>
                        <span className="delete" onClick={() => deleteTodo(item.id)}></span>
                    </li>
                )
                )
            }
        </ul>
    )
}

const mapStateToProps = state => ({
    list: state.list
})
const mapDispatchToProps = dispatch => ({
    updateTodo(id, isCompleted) {
        dispatch(updateTodoAction(id, isCompleted))
    },
    deleteTodo(id) {
        dispatch(delTodoAction(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)