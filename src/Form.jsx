import React from "react";
import { useField } from "formik";
function Forms({label, name, placeholder, type,id, ...rest}){
    const allData = useField(name);
        const data = allData[0]
        const meta = allData[1];
    return (
        <div>
            <label htmlFor={id} className="sr-only">{label}</label>
            <input id={id} onChange={data.onChange} onBlur={data.onBlur} name={name} type={type} placeholder={placeholder} className="py-2 px-3 border rounded-md w-[320px]"/>
            {meta.touched && meta.error && <p className="text-red-500">{meta.error}</p>}
        </div>
    )
}
export default Forms;