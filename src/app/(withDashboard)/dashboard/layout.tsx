
import MySidebar from "@/components/My-Sidebar/My-Siderbar";
import { SidebarProvider } from "@/components/ui/sidebar"

const layout = ({children}:{children:React.ReactNode}) => {
    return (
      <div>
         <div className="flex">
        <div className="w-[20%] absolute md:static lg:static">
            <SidebarProvider>
            <MySidebar/>
            </SidebarProvider>
        </div>
         <div className=" w-[100%] md:w-[87%] lg:w-[87%]">
            {children}
        </div>
       </div>
      </div>
    );
};

export default layout;