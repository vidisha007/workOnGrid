import React from 'react';
import ReactDOM from "react-dom/client";
import Dropdown from './Dropdown';

const options = [
  { value: 1, label: 'react.js' },
  { value: 2, label: 'javaScript' },
  { value: 3, label: 'html' },
  { value: 4, label: 'css' },
  { value: 5, label: 'firebase' },
  { value: 6, label: 'graphql' },
  // ... Add more options as needed
];

const Sidebar = ()=>{
    return(
    <div className="header">
      <div className="navItems">
        <ul>
            <li><Dropdown options={options} isMultiSelect={true}/></li>
            
        </ul>
      </div>
    </div>
    );
    }

    export default Sidebar;