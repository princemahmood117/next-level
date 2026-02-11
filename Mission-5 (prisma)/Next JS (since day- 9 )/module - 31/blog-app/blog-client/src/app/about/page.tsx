
const AboutPage = async() => {

    await new Promise((resolve) => setInterval(resolve, 2000))

    throw new Error("error occured after the resolve")

    return (
        <div>
            <p>this is about page component</p>
        </div>
    );
};

export default AboutPage;