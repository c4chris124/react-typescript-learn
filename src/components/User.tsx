import { useState } from "react"


interface User {
    uid: string,
    name: string
}

const tempUser: User = {
    uid: 'XYTS',
    name: 'Dave Castellanos'
}   

const User = () => {
    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Christian Castellanos'
        })
    }

    return (
        <div className="mt-5">
            <h3>User</h3>

            <button
                onClick={login}
                className="btn btn-outline-primary"
            >
                Login
            </button>
            {
                (!user)
                    ? <pre>No hay user</pre>
                    : <pre>{JSON.stringify(user)}</pre>
            }
           
        </div>
    )
}

export default User