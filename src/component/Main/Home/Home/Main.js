import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'
import Logo from './Logo'
import style from '../../styles/main.module.css'

const Main = () => {
    const profile = useSelector(({profile}) => profile)
    const route = useRouter()
    const routeHandler = (e) =>{
        e.preventDefault()
        route.push(profile.id ? '/home' : '/auth')
    }
    return (
        <div className={style.main}>
            <div className={style.margin}>
                <Logo profile={profile} routeHandler={routeHandler}/>
                <div className={style.about}>
                    <h1><span>Room</span>chat</h1>
                    <div>
                        <p>Это чат социальная-сеть, где вы можете общаться с друзьями!</p>
                        <p>Создайте или найдите уже существующую комнату и переписывайтесь😎</p>
                        <button onClick={routeHandler} className={style.btn}>Начать общение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
