"use client";

// import { LoginMenu } from "@/components/login";
import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";
import { MainMobileMenuButton, MainMobileNavigationMenu } from "./menu";

const MainMobileNavigation = () => {
  return (
    <Disclosure>
      {({ open }) => (
        // CHANGE THIS LINE: Use a div instead of a Fragment
        <div className="relative"> {/* You can add styling here if needed */}
          <nav className="mx-auto flex max-w-5xl items-center justify-between bg-gray-50 px-6 py-4 md:hidden">
            {/* Login */}
            <div className="flex flex-1 justify-start pl-2">
              {/* <LoginMenu /> */}
              login menu
            </div>

            {/* Mobile Menu Button */}
            <div className="flex flex-1 justify-end pr-2">
              <MainMobileMenuButton open={open} />
            </div>
          </nav>

          {/* Mobile Navigation */}
          {/* MainMobileNavigationMenu should be inside the Disclosure.Panel */}
          <MainMobileNavigationMenu fragment={Fragment} /> 
        </div>
      )}
    </Disclosure>
  );
};

export default MainMobileNavigation;