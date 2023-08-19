import React, { useEffect, useState } from "react";

import { Modal, Button } from "flowbite-react";

const DropdownMenu = ({ options, setSelectedOptions, dropdownTitle }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    selectAllOptions();
  }, []);
  
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    
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
      console.log(optionCheckboxes)
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
      <Button
        onClick={() => props.setOpenModal("default")}
        className="mx-auto my-2"
      >
        Filter by: {dropdownTitle}
      </Button>

      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header
          theme={{
            close: {
              base: "ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-gray-00 hover:bg-gray-200 hover:text-gray-900",
              icon: "h-5 w-5 stroke-black",
            },
          }}
        >
          {dropdownTitle}
        </Modal.Header>

        <Modal.Body>
          <div
            id={dropdownTitle}
            className="z-10 p-2 w-56 bg-white"
          >
            <ul className="space-y-2 text-sm" aria-labelledby={`dropdown${dropdownTitle}`}>
              {options.map((item) => (
                <li className="flex items-center" key={item}>
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
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-wrap justify-center items-center">
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
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DropdownMenu;
