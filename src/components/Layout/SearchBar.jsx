import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Fragment, useState, useEffect } from "react";
import ProductSearch from "../ProductSearch/ProductSearch";
import products from "./products";
import api from "../api/woocommerce";

function SearchBar({ open, handleSearch }) {
  const [search, setSearch] = useState("");
//   const [totalproducts, setTotalProducts] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
	(async () => {
	  const res = await fetch(
		"https://kottfabriken.wargmedia.nu/wp-json/menus/v1/menus/476"
	  );
	  let response;
	  if (res.status === 200) {
		response = await res.json();
	  }
	  setCategoriesData(response);
	})();
  }, []);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  return (
    <Transition.Root show={open} className="absolute w-full">
      <Transition.Child
        enter="ease-linear duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-linear duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="bg-white w-full border-t border-black/10"
      >
        <div className="w-full py-3 border-y border-black/10">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-7">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="search"
              className="block w-full border-0 focus:ring-transparent pl-14 sm:text-sm"
              placeholder="Sök"
              value={search}
              onChange={(e) => {inputHandler(e)}}
            />
          </div>
        </div>
        <div className="w-full flex">
          <ProductSearch
            search={search}
			data = {categoriesData}
          />
        </div>
      </Transition.Child>
      <Transition.Child
        enter="ease-linear duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-linear duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`fixed w-full h-screen ${open ? "block" : "hidden"}`}
          onClick={() => {
            handleSearch(null, false);
            console.log("hej");
          }}
        ></div>
      </Transition.Child>
    </Transition.Root>
  );
}

export default SearchBar;
