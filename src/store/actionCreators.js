import axios from 'axios'
import * as actionTypes from './actionTypes'
const request = axios.create({
    baseURL: 'http://localhost:3004',
    timeout: 5000
})


export const addTodoAction = (value) => (
    {
        type: actionTypes.ADD_TODO,
        content: value
    }
)

export const delTodoAction = (id) => (
    {
        type: actionTypes.DEL_TODO,
        id
    }
)


export const updateTodoAction = (id, isCompleted) => (
    {
        type: actionTypes.UPDATE_TODO,
        id,
        isCompleted
    }
)

export const getTodoListAction = () => (
    {
        type: actionTypes.GET_TODO,
    }
)

// export const getTodoListRequest = () => {
//     return async (dispatch) => {
//         const res = await request.get('/list')
//         dispatch(getTodoListAction(res.data))
//     }
// }

// export const updateTodoListRequest = (id, isCompleted) => {
//     return async (dispatch) => {
//         const res = await request.patch(`/list/${id}`, {
//             "isCompleted": !isCompleted
//         })
//         dispatch(updateTodoAction(id, isCompleted))
//     }
// }

// export const delTodoListRequest = (id) => {
//     return async (dispatch) => {
//         const res = await request.delete(`/list/${id}`)
//         dispatch(delTodoAction(id))
//     }
// }

// export const addTodoListRequest = (content) => {
//     return async (dispatch) => {
//         const newObj = {
//             content: content,
//             isCompleted: false
//         }
//         const res = await request.post('/list', newObj)
//         dispatch(addTodoAction(res.data))
//     }
// }