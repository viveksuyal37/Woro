const Dropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          ariaExpanded="true"
          ariaHaspopup="true"
        >
          Options
          <svg
            className="w-5 h-5 -mr-1 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            ariaHidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        className="absolute left-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        ariaOrientation="vertical"
        ariaLabelledby="menu-button"
        tabindex="-1"
      >
        <div className="py-1" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <div
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Account settings
          </div>
          <div
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            Support
          </div>
          <div
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="menu-item-2"
          >
            License
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
