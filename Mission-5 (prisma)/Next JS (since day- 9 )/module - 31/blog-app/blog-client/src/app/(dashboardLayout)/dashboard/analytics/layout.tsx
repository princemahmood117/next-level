import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

// "monthly and weekly" will be the "children" in this Layout
const AnalyticsLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <div className='space-x-4'>
                <Button asChild>
                    <Link href="/dashboard/analytics/weekly">Weekly</Link>
                </Button>
                
                <Button asChild>
                    <Link href="/dashboard/analytics/monthly">Monthly</Link>
                </Button>
            </div>

            {children}
        </div>
    );
};

export default AnalyticsLayout;