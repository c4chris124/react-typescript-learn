import { ChangeEvent, useState } from "react"
import { useForm } from '../hooks/useForm';

const Form2 = () => {

    const { Form, zip, city, handleChange } = useForm({
        zip: 30223,
        city: 'Guatemala'
    })


    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Zip Code:</label>
                <input type="text"
                    className="form-control"
                    name="zip"
                    value={zip}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">City:</label>
                <input type="text"
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(Form)}</pre>
        </form>
    )
}

export default Form2