import React from 'react'
import {useFetch} from '../../hooks/useFetch'

function AuthForm({type,style}){
    const [input,setInput] = React.useState({email: '',password: '',text: ''})
    const [error,setError] = React.useState('')
    const {request} = useFetch()
    const signup = async (e) =>{
        e.preventDefault()
        try{
            if(input.email && input.password && input.text){
                const data = await request('https://jsonplaceholder.typicode.com/users')
                setInput({email: '',password: '',text: ''})
            }
        }
        catch(err){
            setError(err.message)
        }
    }
    const login = async (e) =>{
        e.preventDefault()
        try{
            if(input.email && input.password){
                const data = await request('https://jsonplaceholder.typicode.com/users')
                setInput({email: '',password: '',text: ''})
            }
        }
        catch(err){
            setError(err.message)
        }
    }
    const inputHandler = (e) =>{
        setInput({...input,[e.target.type]: e.target.value})
    }
    React.useEffect(()=>{
        setInput({email: '',password: '',text: ''})
        setError('')
    },[type])
    return (
        <form>
            {type === 'sign' ?
                <>
                    <div>
                        <h3>Почта</h3>
                        <input onChange={inputHandler} value={input.email} type="email" autoFocus/>
                    </div>
                    <div>
                        <h3>Имя пользователя</h3>
                        <input onChange={inputHandler} value={input.text} type="text"/>
                    </div>
                    <div>
                        <h3>Пароль</h3>
                        <input onChange={inputHandler} value={input.password} type="password" />
                    </div>
                    <div className={style.submit}>
                        <button onClick={signup} type="submit">Регистрация</button>
                        <p>{error}</p>
                    </div>
                </> 
                    :
                <>
                    <div>
                        <h3>Почта</h3>
                        <input onChange={inputHandler} value={input.email} type="email" autoFocus/>
                    </div>
                    <div>
                        <h3>Пароль</h3>
                        <input onChange={inputHandler} value={input.password} type="password" />
                    </div>
                    <div className={style.submit}>
                        <button onClick={login} type="submit">Войти</button>
                        <p>{error}</p>
                    </div>
                </>
            }
        </form>
    )
}

export default AuthForm
