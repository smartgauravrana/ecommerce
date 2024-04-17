"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TruckIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import SearchInput from "../searchInput";

type Props = {};

function Header({}: Props) {
  const [isSearchMode, setIsSearchMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex  flex-col shadow-lg overflow-hidden lg:overflow-visible false">
      <div className="relative box-border items-center flex h-14 shrink-0 justify-between gap-3 border-b-[0.14px] border-b-[#DDDDD9] bg-[#fff] px-4 shadow-[0px_1px_5px_#C1C1C1BF] lg:h-[71px] lg:gap-5">
        {isSearchMode ? (
          <SearchInput onClose={() => setIsSearchMode(false)} />
        ) : (
          <>
            {" "}
            <div className="flex items-center">
              <Bars3Icon className="h-10 mr-3" />
              <p>KAPIVA</p>
            </div>
            <div className="flex items-center">
              {/* ICONS */}
              <MagnifyingGlassIcon
                className="w-[22px]"
                onClick={() => setIsSearchMode(true)}
              />
              <TruckIcon className="w-[22px] ml-3" />
              <ShoppingCartIcon className="w-[22px] ml-3" />
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
