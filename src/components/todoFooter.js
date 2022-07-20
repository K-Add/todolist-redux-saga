
import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import { getTodoListAction } from '../store/actionCreators'
import useTodoList from "../hook/useTodoList"


function TodoFooter({ getTodoList }) {
    const list = useTodoList()
    useEffect(() => {
        getTodoList()
    }, [getTodoList])
    return (
        <footer className="footer">
            <span className="todo-count">共有{list.length}项</span>
            <ul className="tab">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => "all" + (isActive ? " selected" : "")}
                    >
                        全部
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/incompleted"
                        className={({ isActive }) => "incomplete" + (isActive ? " selected" : "")}
                    >
                        未完成
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/completed"
                        className={({ isActive }) => "complete" + (isActive ? " selected" : "")}
                    >
                        已完成
                    </NavLink>
                </li>
            </ul>
            {/* <span className="todo-clear" onClick={() => todoList.delAll()}>删除所有完成项</span> */}
        </footer>
    )
}
const mapStateToProps = state => ({
    list: state.list
})
const mapDispatchToProps = dispatch => ({
    getTodoList() {
        dispatch(getTodoListAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)

