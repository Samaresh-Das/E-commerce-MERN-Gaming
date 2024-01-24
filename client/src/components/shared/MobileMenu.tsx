import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

import Filter from "./Filter";
import { dropdown } from "../ui-data/dropdowns";
import Dropdown from "./Dropdown";
import Test from "./test";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenu className="text-[30px] text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="mt-[150px] w-full">
        <SheetHeader>
          <SheetTitle className="text-left">Filter By</SheetTitle>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          {/* {dropdown.map((drop: string) => (
            <Dropdown title={drop} key={drop} />
          ))} */}
          <Test />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
