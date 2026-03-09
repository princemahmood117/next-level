import { Navbar } from "@/components/layout/Navbar";

const CommonLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default CommonLayout;