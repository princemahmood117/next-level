
const AboutPage = async() => {

    await new Promise((resolve) => setInterval(resolve, 3000))

    return (
        <div>
            <p>this is about page component</p>
        </div>
    );
};

export default AboutPage;