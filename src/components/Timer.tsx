import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milliSec: number
}

const Timer = ({ milliSec }: TimerArgs) => {
    const [sec, setSec] = useState(0)
    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(() => setSec(s => s + 1), milliSec)
    }, [milliSec])

    return (
        <>
            <h4>Timer: <small>{sec}</small></h4>
        </>
    )
}

export default Timer