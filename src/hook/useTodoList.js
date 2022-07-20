import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import store from '../store';

export default function useTodoList() {
    const { pathname } = useLocation()
    let listCopy = store.getState().list
    const [list, setList] = useState(listCopy)
    console.log(listCopy, 'listCopy');
    useEffect(() => {
        console.log('触发useEffect');
        switch (pathname) {
            case '/':
                setList(listCopy)
                break
            case '/incompleted':
                listCopy = listCopy.filter(item => !item.isCompleted)
                setList(listCopy)
                break
            case '/completed':
                listCopy = listCopy.filter(item => item.isCompleted)
                setList(listCopy)
                break
            default:
                console.log(1111111);
        }
    }, [pathname, store.getState().list])

    console.log(list, 'list');
    return list
}