'use client'

import { useEffect } from "react";



const AboutError = ({error, reset} : {error : Error & {digest?: string}; reset : () => void}) => {


    // digest+error are came from nextjs
    useEffect(() => {
        console.log(error);
    },[])


    return (
        <div>
            <p>something went wrong.....!</p>

            <button onClick={() => reset}>Retry</button>
        </div>
    );
};

export default AboutError;