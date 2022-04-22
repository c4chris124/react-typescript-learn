import { ChangeEvent, useState } from "react"

// export function useForm<T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {
    const [Form, setForm] = useState(initState)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setForm({
            ...Form,
            [name]: value
        })
    }

    return{
        Form,
        handleChange,
        ...Form
    }
}