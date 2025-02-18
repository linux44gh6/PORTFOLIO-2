'use server'
import ProfilePage from "@/components/Profile/ProfilePage";
import { getServerSession } from "next-auth";

const Page = async () => {
    const session = await getServerSession();

    return (
        <div>
            <ProfilePage session={session} />
        </div>
    );
};

export default Page;
