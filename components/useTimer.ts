import { useState, useEffect } from 'react'
import gsap from 'gsap'

function useTimer(index: number, questionsLength: number) {
    const [message, setMessage] = useState('Presta atenção 🧐...')
    const [secondsInitial, setSecondsInitial] = useState(3)
    const [secondsInGame, setSecondsInGame] = useState(0)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to('#timer', {
                top: '3%',
                opacity: 1
            })
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (index === questionsLength) {
            setFinished(true)

            setTimeout(() => {
                gsap.to('.timer-bar', {
                    opacity: 0
                })
    
                setMessage('Fim! 🥳')

                gsap.to('#timer>.time', {
                    display: 'none',
                    onComplete() {
                        gsap.to('#timer>.message', {
                            fontSize: '1.5em'
                        })
                    }
                })
            }, 1000)
        }
    }, [index, questionsLength])

    useEffect(() => {
        if (!finished) {
            if (secondsInitial != 0) {
                const timerInitial = setTimeout(() => {
                    setSecondsInitial(seconds => seconds-1)
                }, 1000)
        
                return () => clearTimeout(timerInitial)
            } else {
                setSecondsInGame(10)
    
                setMessage('Manda a braba! 🔥')
            }
        }
    }, [secondsInitial, finished])

    useEffect(() => {
        if (!finished) {
            if (secondsInGame != 0) {
                const timerInitial = setTimeout(() => {
                    setSecondsInGame(seconds => {
                        const secondsUpdated = seconds-1
                        
                        if (secondsUpdated === 0 && (index+1) != questionsLength) {
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
        }
    }, [secondsInGame, finished])

    return {
        message,
        finished,
        seconds: secondsInitial != 0 ? secondsInitial : secondsInGame
    }
}

export default useTimer