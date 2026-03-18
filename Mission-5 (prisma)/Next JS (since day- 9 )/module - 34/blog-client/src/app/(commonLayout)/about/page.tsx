"use client"

import { getBlogs } from "@/actions/blog.action";
import BlogCard from "@/components/modules/homepage/BlogCard";
import { BlogPost } from "@/types";
import { useEffect, useState } from "react";

// can not write 'async' inside client component


const AboutPage = () => {


    const [data, setData] = useState();

    console.log(data);


    useEffect(() => {

        (async() => {
            const {data} = await getBlogs()

            setData(data)
        })()
    },[])


    return (
        <div>
            <p>this is about page component for loading the data</p>
        </div>
    );
};

export default AboutPage;