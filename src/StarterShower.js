import React from "react";

function StarterShower(props){

    return (
        <div>
            <img src = {props.pokImg[props.poknum]}/>
        </div>
    );
}

export default StarterShower;