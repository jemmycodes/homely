import { Fragment } from "react";

function NavbarSmallScreens() {
  return (
    <Fragment>
      <div className=" h-9 w-10 flex space-y-1 flex-col lg:hidden">
        <div className="bg-orange rounded-2xl  h-[.5rem] w-full"></div>
        <div className="bg-orange rounded-2xl h-[.5rem] w-full"></div>
        <div className="bg-orange rounded-2xl h-[.5rem] w-full"></div>
      </div>
    </Fragment>
  );
}

export default NavbarSmallScreens;
