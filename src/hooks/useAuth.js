import {useCallback,useEffect,useState } from "react";
import {useDispatch} from 'react-redux'
import {setProfile} from '../redux/actions/profile'

export const useAuth = () =>{
    const dispatch = useDispatch()
    const loginAuth = useCallback((JWT,id)=>{
        localStorage.setItem('data',JSON.stringify({
            id,
            JWT
        }))
        dispatch(setProfile(JWT,id))
    },[])
    const logoutAuth = useCallback(()=>{
        dispatch(setProfile(null,null))
        localStorage.removeItem('data')
    },[])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('data'))
        if(data && data.JWT){
            loginAuth(data.JWT,data.id)
        }
    },[])
    return {loginAuth,logoutAuth}
}
