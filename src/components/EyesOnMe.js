// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    
    function Blur(event){
        console.log("Hey! Eyes on me!")

    };

    function Focus(event){
        console.log("Good!")
    };

    return (
        <div>
            <button onBlur={Blur}
            onFocus= {Focus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;