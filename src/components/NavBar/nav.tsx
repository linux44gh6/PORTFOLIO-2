import Image from 'next/image';
import Link from 'next/link';
import { Session } from "next-auth";
type Props = {
    title:string,
    section:string
}
type SeasonProps = {
  season:Session|null
};

const NavBarPage = ({ season }: SeasonProps) => {
  const link: Props[] = [
    { title: 'service', section: 'service' },
    { title: 'Works', section: 'project-section' },
    { title: 'Resume', section: 'education-section' },
    { title: 'Skills', section: 'skill-section' },
  ];

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-color3 to-color4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {link.map((li) => (
                <Link key={li.title} className="text-black font-bold text-xl font-font1 capitalize" href={`#${li.section}`}>
                  {li.title}
                </Link>
              ))}
              <Link href="/blog" className="text-black font-bold text-lg md:text-lg font-font1 capitalize">
                Blog
              </Link>
              <Link href="/contact" className="text-black font-bold text-lg md:text-lg font-font1 capitalize">
                Contact
              </Link>
            </ul>
          </div>
          <div>
            <div className="flex items-center text-white">
              <Link href="/">
                <Image width={200} height={12} className="w-[50px] sm:w-[80px] md:w-[100px] lg:w-[100px] xl:w-[100px]" src="/logo.png" alt="next" />
              </Link>
              <span className="font-font1 lg:text-2xl">abireshan32@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            {link.map((li) => (
              <Link key={li.title} className="text-white font-bold text-lg md:text-lg font-font1 capitalize" href={`#${li.section}`}>
                {li.title}
              </Link>
            ))}
            <Link href="/blog" className="text-white font-bold text-lg md:text-lg font-font1 capitalize">
              Blog
            </Link>
            <Link href="/contact" className="text-white font-bold text-lg md:text-lg font-font1 capitalize">
              Contact
            </Link>
          </ul>
          <div className="ms-2">
            {season?.user ? (
              <span>
                <Image
                  src={season.user.image || '/default-avatar.png'} // Use a default image if missing
                  width={40}
                  height={40}
                  alt="Profile"
                  className="rounded-full"
                />
              </span>
            ) : (
              <Link href="/login">
                <button className="btn rounded-full px-6 bg-color4 hover:bg-color1 text-white transition font-bold">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPage;