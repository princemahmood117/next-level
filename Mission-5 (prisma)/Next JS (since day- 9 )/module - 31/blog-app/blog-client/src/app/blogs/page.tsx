
const Blogs = async() => {
    await new Promise((r) => setInterval(r,4000))

    
    return (
        <div>
             <p>this is blog page component</p>
        </div>
    );
};

export default Blogs;