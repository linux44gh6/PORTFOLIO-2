
import NavBarPage from '@/components/NavBar/nav';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
    return (
        <div className='bg-gradient-to-r from-color3 to-color4 w-[100%]'>
            <NavBarPage/>
            {children}
        </div>
    );
};

export default layout;