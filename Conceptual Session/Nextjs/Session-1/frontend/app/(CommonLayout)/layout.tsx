import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            
            <Navbar></Navbar> {/* every page will show this navbar*/}

            {children}  {/* this is Home component (slider)*/}  

        </div>
    );
};

export default CommonLayout;