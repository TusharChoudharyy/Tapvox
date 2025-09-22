import { FilePen } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[23%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/admin/blogs"
        >
          <FilePen />
          <p className="hidden md:block">Blogs</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/admin/contact"
        >
          <FilePen />
          <p className="hidden md:block">Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
