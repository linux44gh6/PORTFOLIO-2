/* eslint-disable @typescript-eslint/no-explicit-any */

import FooterPage from '@/components/Footer/Footer';
import NavBarPage from '@/components/NavBar/nav';
import { getUser } from '@/services';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const layout =async ({ children }: LayoutProps) => {
    const season = await getServerSession();
    const user = await getUser(); // Ensure getUser returns User | null
    return (
        <div className=''>
            <NavBarPage season={season} user={user as any}/>
            {children}
            <FooterPage/>
        </div>
    );
};

export default layout;