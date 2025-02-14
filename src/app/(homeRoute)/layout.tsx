
import FooterPage from '@/components/Footer/Footer';
import NavBarPage from '@/components/NavBar/nav';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
    return (
        
        <div className=''>
            <NavBarPage/>
            {children}
            <FooterPage/>
        </div>
    );
};

export default layout;