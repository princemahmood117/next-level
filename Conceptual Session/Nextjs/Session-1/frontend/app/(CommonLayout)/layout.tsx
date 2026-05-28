import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            
            <Navbar></Navbar> {/* every page will show this navbar*/}

            {/* this is content of all pages */}  
            <div className="container mx-auto px-5">
                {children}
            </div>

        </div>
    );
};

export default CommonLayout;