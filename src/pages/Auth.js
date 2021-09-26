import React from 'react'
import AuthForm from '../component/Auth/Auth.form'
import style from '../styles/auth.module.css'

function Auth() {
    const [sign,setSign] = React.useState({type: 'sign', name: 'Регистрация'}) 
    const btnHandler = (e) =>{
        setSign({type: e.target.id, name: e.target.id === 'sign' ? 'Регистрация' : 'Вход'})
    }
    return (
        <div className={style.auth}>
            <div className={style.margin}>
                <div className={style.box}>
                    <div className={style.btnHandler}>
                        <button id="sign" className={sign.type === 'sign' && style.active} onClick={btnHandler}>Регистрация</button>
                        <button id="login" className={sign.type === 'login' && style.active} onClick={btnHandler}>Вход</button>
                    </div>
                    <div className={style.content}>
                        <h2>{sign.name}</h2>
                        <AuthForm type={sign.type} style={style}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
