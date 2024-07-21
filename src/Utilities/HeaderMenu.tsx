const HeaderMenu = ({ title }) => {
   return (
      <div>
         <br />
         <div className="p-2">
            <div className="text-center text-bold text-color-primary text-xl">
               {title}
            </div>
         </div>
      </div>
   );
};

export default HeaderMenu;
