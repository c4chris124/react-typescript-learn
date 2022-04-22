
import { useState } from "react"
import Timer from "./Timer"

const TimerParent = () => {

    const [milliSec, setMilliSec] = useState(1000)

    return (
        <>
            <span>milliseconds {milliSec}</span>
            <br />
            <button className="btn btn-outline-success" onClick={() => setMilliSec(1000)}>
                1000
            </button>
            <button className="btn btn-outline-success" onClick={() => setMilliSec(2000)}>
                2000
            </button>
            <Timer milliSec={milliSec} />
        </>
    )
}

export default TimerParent