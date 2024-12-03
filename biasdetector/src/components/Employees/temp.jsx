import React, { useState } from 'react';

function Temp() {
  // List of items to display
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Strawberry' },
    { id: 5, name: 'Pineapple' },
    { id: 6, name: 'Grapes' },
  ];

  // State to store search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Search Items</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          padding: '8px',
          width: '200px',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      {/* Display Filtered Items */}
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Temp;