import Link from 'next/link';
import React from 'react';

const PracticeLayout = ({children, marketingSlot, salesSlot} : {

    children:React.ReactNode,
    marketingSlot:React.ReactNode,
    salesSlot:React.ReactNode,
} ) => {
    return (
        <div>
            <nav className='flex gap-10 m-8'>
                <Link className='hover:underline' href={"/development"}>Development</Link>
                <Link className='hover:underline' href={"/marketing"}>Marketing</Link>
                <Link className='hover:underline' href={"/marketing/settings"}>Settings</Link>
                <Link className='hover:underline' href={"/sales"}>Sales</Link>
            </nav>

            <div className='flex gap-6'>
                {marketingSlot}
                {salesSlot}
            </div>

            <div className='mt-4'>
                {children}
            </div>
        </div>
    );
};

export default PracticeLayout;