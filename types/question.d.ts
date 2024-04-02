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

export default IQuestion