import React from 'react';
import './Homestyles.css'

function listBox({options, selected, onSelect}){
    return (
        <select value={selected} onChange={(e) => onSelect(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
}

function Home() {
    return (
        <body>
            <div class = "Add Employee">
                <h1> This is where the add employee menu will go</h1>
                
            </div>
            <div class = "Employees">
                <h1> This is where the current employees will go</h1>

            </div>
        </body>
    );
}

export default Home;