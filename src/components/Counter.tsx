import { useState } from "react"

const Counter = () => {
    const [Counter, setCounter] = useState(0)

    const increment = (number: number = 1): void => {
        setCounter(Counter + number)
    }

    return (
        <div className="mt-5">
            <h3>Counter</h3>
            <span>Value: {Counter}</span>
            <br />
            <button
                className="btn btn-outline-primary mt-2"
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary mt-2"
                onClick={() => increment(2)}
            >
                +2
            </button>
            <button
                className="btn btn-outline-danger mt-2"
                onClick={() => setCounter(0)}
            >
                Reset
            </button>
        </div>
    )
}

export default Counter