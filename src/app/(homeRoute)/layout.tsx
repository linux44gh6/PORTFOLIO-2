
import FooterPage from '@/components/Footer/Footer';
import NavBarPage from '@/components/NavBar/nav';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const layout =async ({ children }: LayoutProps) => {
    const season=await getServerSession();
    return (
        <div className=''>
            <NavBarPage season={season}/>
            {children}
            <FooterPage/>
        </div>
    );
};

export default layout;