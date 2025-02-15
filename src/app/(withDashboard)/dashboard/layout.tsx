
import { SidebarProvider } from "@/components/ui/sidebar"
const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <SidebarProvider>
            {children}
            </SidebarProvider>
        </div>
    );
};

export default layout;