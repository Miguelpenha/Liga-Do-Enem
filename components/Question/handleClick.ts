import gsap from 'gsap'

interface IQuestion {
    area: string
    image: string
    matter: string
    answer: string
    asking: string
    subject: string
    difficulty: string
    alternatives: {
        a: string
        b: string
        c: string
        d: string
    }
}

function useHandleClick(question: IQuestion) {
    function handleClick(alternative: 'a' | 'b' | 'c' | 'd') {
        if (question.alternatives[alternative] === question.answer) {
            gsap.to(`.question .alternatives-${alternative}`, {
                duration: 0.5,
                color: '#ffffff',
                backgroundColor: 'green'
            })
        } else {
            gsap.to(`.question .alternatives-${alternative}`, {
                duration: 0.5,
                color: '#ffffff',
                backgroundColor: 'red'
            })
        }

        gsap.to('.question>.alternatives', {
            pointerEvents: 'none'
        })
    }

    return handleClick
}

export default useHandleClick