import React from "react";


function StarterSelector(props){

    return (
        <form>
            Pick your favorite pokemon:

                <select onChange = {props.pokFun}>
                    <option value= '0' >{props.pokLst[0]}</option>
                    <option value= '1'>{props.pokLst[1]}</option>
                    <option value= '2'>{props.pokLst[2]}</option>
                </select>
        </form>
    )
}

export default StarterSelector;