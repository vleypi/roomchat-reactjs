import Image from 'next/image'
import style from '../../styles/main.module.css'
import logo from '../../image/chat.png'

function Logo({routeHandler,profile}) {
    return (
        <div className={style.logo}>
            <div>
                <Image src={logo} alt="roomchat" />
                <h2><span>Room</span>chat</h2>
            </div>
            <div>
                <button onClick={routeHandler}>{!profile.id ? 'Войти' : 'Открыть RoomChat'}</button>
            </div>
        </div>
    )
}

export default Logo
