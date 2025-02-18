import { Session } from "next-auth";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const ProfilePage = ( {session}:{session:Session|null}) => {
  const user = session?.user;
  console.log(user);
  return (
   <div className="flex items-center justify-center min-h-screen">
	<div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<Image src={user?.image ?? "/default-profile.png"} alt="" width={150} height={150} className=" mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user?.name}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
		</div>
		<div className="flex justify-center pt-2 space-x-4 align-center">
			<FaGithub size={30} />
			<FaLinkedin size={30} />
			<FaFacebook size={30} />
			<FaTwitter size={30} />
		</div>
	</div>
</div>
   </div>
  );
};

export default ProfilePage;
