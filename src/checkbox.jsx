import React from "react";
import { RxCrossCircled } from "react-icons/rx";
function Checkbox({id, name,done, check,del}){
    function deleteit(){
        del(id);
    }
    return (
        <li className="flex gap-3 items-center">
            <input readOnly checked={check} id={id} onClick={done} type="checkbox"/>
            <label htmlFor={id} className="text-sm">{name}</label>
            <button  onClick={deleteit} ><RxCrossCircled  className="text-sm"/></button>
        </li>
    )
}
export default Checkbox;