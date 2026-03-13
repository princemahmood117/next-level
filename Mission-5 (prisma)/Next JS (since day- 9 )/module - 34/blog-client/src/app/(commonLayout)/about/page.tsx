"use client"

import { blogService } from "@/service/blog.service";
import { useEffect, useState } from "react";

// can not write 'async' inside client component


const AboutPage = () => {


    const [data, setData] = useState();

    useEffect(() => {

        (async() => {
            const {data} = await blogService.getBlogsPost()

            setData(data)
        })()
    },[])


    return (
        <div>
            <p>this is about page component for loading the data {data}</p>
        </div>
    );
};

export default AboutPage;