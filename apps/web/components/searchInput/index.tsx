"use client";
import React, { useState, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  onClose: () => void;
  onInputChange?: (val: string) => void;
};

function SearchInput({ onClose, onInputChange }: Props) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onInputChange && onInputChange(val);
  };
  return (
    <div className="bg-[#f2f1eb]  items-center flex lg:ml-auto lg:max-w-[320px] h-[40px] w-full rounded-lg lg:flex">
      <MagnifyingGlassIcon className="w-[22px] lg:w-[22px] pl-2" />
      <input
        type="text"
        className="grow bg-[color:var(--cr-light-3)] indent-3 text-[length:var(--text-sm)] tracking-[1.2px] outline-none lg:rounded-lg lg:text-[length:var(--text-2sm)]"
        placeholder="Product or usage"
        id="search-box"
        value={value}
        onChange={onChange}
      />
      <XMarkIcon className="w-[22px] pr-2" onClick={onClose} />
    </div>
  );
}

export default SearchInput;
