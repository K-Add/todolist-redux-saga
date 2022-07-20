
import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'

const request = axios.create({
    baseURL: 'http://localhost:3004',
    timeout: 5000
})

function* todoSaga() {
    yield takeEvery(actionTypes.ADD_TODO, addTodoWorker)
    yield takeEvery(actionTypes.DEL_TODO, delTodoWorker)
    yield takeEvery(actionTypes.UPDATE_TODO, updateTodoWorker)
    yield takeEvery(actionTypes.GET_TODO, getTodoWorker)
}

function* getTodoWorker() {
    try {
        const res = yield call(request.get, '/list')
        switch (res.status) {
            case 200:
                yield put({
                    type: actionTypes.GET_TODO_SUCCESS,
                    list: res.data
                })
                break
        }

    } catch (error) {
        console.log('getTodo', error);
    }
}

function* delTodoWorker({ id }) {
    try {
        const res = yield call(request.delete, `/list/${id}`)
        switch (res.status) {
            case 200:
                yield put({
                    type: actionTypes.DEL_TODO_SUCCESS,
                    id
                })
        }
    } catch (error) {
        console.log('del', error);
    }

}

function* addTodoWorker({ content }) {
    try {
        const newObj = {
            content: content,
            isCompleted: false
        }
        const res = yield call(request.post, '/list', newObj)
        switch (res.status) {
            case 201:
                yield put({
                    type: actionTypes.ADD_TODO_SUCCESS,
                    newTodo: res.data
                })
        }
    } catch (error) {
        console.log('add', error);
    }
}

function* updateTodoWorker({ id, isCompleted }) {
    try {
        const res = yield call(request.patch, `/list/${id}`, {
            "isCompleted": !isCompleted
        })
        switch (res.status) {
            case 200:
                yield put({
                    type: actionTypes.UPDATE_TODO_SUCCESS,
                    id,
                    isCompleted
                })
        }
    } catch (error) {
        console.log('update', error);
    }

}
export default todoSaga