import React from "react";
import { useParams } from "react-router-dom";
export default function About(propps){
    const params =useParams()
    console.log(params,"params");
    return(
        <div>
            About {params.id}
        </div>
    )
}