import Sidebar from "./sidebar";

const Navbar = () => {
   return (
      <div className="bg-color-accent sticky-navbar p-1">
         <div>
            <Sidebar />
         </div>
      </div>
   );
};

export default Navbar;
