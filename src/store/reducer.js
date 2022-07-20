import * as actionTypes from './actionTypes'
const defaultState = {
    list: [
        // {
        //     content: "发电房",
        //     isCompleted: false,
        //     id: 7
        // },
        // {
        //     content: "发斯蒂芬",
        //     isCompleted: true,
        //     id: 9
        // },
        // {
        //     content: "1111111",
        //     isCompleted: true,
        //     id: 10
        // },
    ]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_SUCCESS:
            state.list.push(action.newTodo)
            return {
                list: [...state.list]
            }
            break
        case actionTypes.DEL_TODO_SUCCESS:
            const newList = state.list.filter(item => item.id !== action.id)
            return {
                list: newList
            }
            break
        case actionTypes.UPDATE_TODO_SUCCESS:
            const obj = state.list.find(item => item.id === action.id)
            obj.isCompleted = !action.isCompleted
            return {
                list: [...state.list]
            }
            break
        case actionTypes.GET_TODO_SUCCESS:
            const list = action.list
            return {
                list: [...list]
            }
        default:
            return state
    }
    return state

}
export default reducer