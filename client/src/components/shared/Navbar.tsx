import { IoMenu, IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="w-full h-[150px]">
      <div className="h-[40px] flex flex-row bg-black p-2 justify-between">
        <p className="text-white border rounded-full border-white px-2 text-[10px] my-auto py-1">
          <span className="text-slate-300">Mon-Thu:</span> 9:00 AM - 5:30 PM
        </p>
        <p className="text-white text-[10px] my-auto">
          Call Us: (00) 1234 5678
        </p>
      </div>
      <div className="bg-blue-600 h-[110px] p-4">
        <div className="flex flex-row justify-between">
          <MobileMenu />
          <p className="text-white border-2 rounded-full border-white px-4 py-1">
            Our Deals
          </p>
          <BsCart2 className="text-[25px] text-white my-auto" />
          <FaRegCircleUser className="text-[30px] text-white" />
        </div>
        <div className="relative">
          {/* search icon */}
          <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-lg text-slate-400" />
          {/* shadcn input component */}
          <Input
            className="my-2 rounded-full pl-8" // Add left padding to prevent text overlay
            type="text"
            placeholder="Search for goods"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
