import ProfilePage from "@/components/Profile/ProfilePage";
import { getServerSession } from "next-auth";
const page = () => {
    const season=getServerSession()
    console.log(season);
    return (
        <div>
            <ProfilePage/>
        </div>
    );
};

export default page;