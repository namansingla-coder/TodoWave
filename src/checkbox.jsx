import React from "react";
function Checkbox({id, name,done, check}){
    return (
        <li className="flex gap-3">
            <input className="bg-gray-50 text-yellow-600" readOnly checked={check} id={id} onClick={done} type="checkbox"/>
            <label htmlFor={id} className="text-sm">{name}</label>
        </li>
    )
}
export default Checkbox;