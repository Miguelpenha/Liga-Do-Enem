import { useState, useEffect } from 'react'
import gsap from 'gsap'

function useAnimation() {
    const [message, setMessage] = useState('Presta atenção 🧐...')
    const [secondsInitial, setSecondsInitial] = useState(3)
    const [secondsInGame, setSecondsInGame] = useState(0)

    useEffect(() => {
        gsap.to('#timer', {
            top: '3%',
            opacity: 1
        })
    }, [])

    useEffect(() => {
        if (secondsInitial != 0) {
            const timerInitial = setTimeout(() => {
                setSecondsInitial(seconds => seconds-1)
            }, 1000)
    
            return () => clearTimeout(timerInitial)
        } else {
            setSecondsInGame(10)

            setMessage('Manda a braba! 🔥')
        }
    }, [secondsInitial])

    useEffect(() => {
        if (secondsInGame != 0) {
            const timerInitial = setTimeout(() => {
                setSecondsInGame(seconds => {
                    const secondsUpdated = seconds-1
                    if (secondsUpdated === 0) {
                        setTimeout(() => {
                            setSecondsInitial(3)
                            setMessage('Presta atenção 🧐...')
                        }, 4000)

                        return secondsUpdated
                    } else {
                        return secondsUpdated
                    }
                })
            }, 1000)
    
            return () => clearTimeout(timerInitial)
        }
    }, [secondsInGame])

    if (secondsInitial != 0) {
        return {
            message,
            seconds: secondsInitial
        }
    } else {
        return {
            message,
            seconds: secondsInGame
        }
    }
}

export default useAnimation