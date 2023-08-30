import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

const Dropdown = ({ options, isMultiSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    if (isMultiSelect) {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.includes(option)
          ? prevSelectedOptions.filter((item) => item !== option)
          : [...prevSelectedOptions, option]
      );
    } else {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="custom-dropdown">
      <div
        className="dropdown-toggle"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {isMultiSelect
          ? selectedOptions.length > 0
            ? selectedOptions.map((option) => option.label).join(', ')
            : 'Select options'
          : selectedOption
          ? selectedOption.label
          : 'Select an option'}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-options">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={
                  isMultiSelect
                    ? selectedOptions.includes(option)
                      ? 'selected'
                      : ''
                    : selectedOption === option
                    ? 'selected'
                    : ''
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
