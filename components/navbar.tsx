import Image from "next/image";
import NavMenu from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="md:px-32 md:py-4">
      <div className="bg-amber-50 px-8 py-2 md:rounded-full text-black flex items-center">
        <div>
          <Image src="/gigxd.png" alt="" width={50} height={50} />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
