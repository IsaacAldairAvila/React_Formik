import React from 'react'
import { useField } from 'formik'

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox'})
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {
                meta.touched && meta.error ? <div>{meta.error}</div> : null
            }
        </div>
    )
}

export default Checkbox