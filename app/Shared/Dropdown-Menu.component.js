import "flowbite";
import React, { useEffect } from "react";

const DropdownMenu = ({ options, setSelectedOptions, dropdownTitle }) => {
  useEffect(() => {
    selectAllOptions();
  }, []);

  const handleOptionChange = (e) => {
    const selectedCheckbox = e.target;
    const selectedValue = selectedCheckbox.value;

    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(selectedValue)) {
        return prevSelectedOptions.filter((value) => value !== selectedValue);
      } else {
        return [...prevSelectedOptions, selectedValue];
      }
    });
  };

  function deselectAllOptions() {
    const optionCheckboxes = document.querySelectorAll(
      `#${dropdownTitle} input[type="checkbox"]`
    );
    optionCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setSelectedOptions([]);
  }

  function selectAllOptions() {
    const optionCheckboxes = document.querySelectorAll(
      `#${dropdownTitle} input[type="checkbox"]`
    );
    optionCheckboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
    const allOptions = Array.from(optionCheckboxes).map(
      (checkbox) => checkbox.value
    );
    setSelectedOptions(allOptions);
  }

  return (
    <div>
      <button
        id={`dropdown${dropdownTitle}`}
        data-dropdown-toggle={dropdownTitle}
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Filter by {dropdownTitle}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id={dropdownTitle}
        className="z-10  hidden  w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          {dropdownTitle}:
        </h6>

        <ul
          className="space-y-2 text-sm"
          aria-labelledby={`dropdown${dropdownTitle}`}
        >
          {options.map((item) => (
            <li className="flex items-center" key={item.value}>
              <input
                id={item}
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                value={item}
                onChange={handleOptionChange}
              />

              <label
                htmlFor={item.value}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-4">
          <button
            className="text-sm text-black hover:text-gray-700"
            onClick={deselectAllOptions}
          >
            Deselect All
          </button>
          <button
            className="ml-4 text-sm text-black hover:text-gray-700"
            onClick={selectAllOptions}
          >
            Select All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
