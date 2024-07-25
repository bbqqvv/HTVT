import React, { useState } from 'react';

const categories = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Áo polo', value: 'accessories' },
  { label: 'Áo phông', value: 'phone' },
  { label: 'Áo sơ mi', value: 'headphone' },
  { label: 'Giày & dép', value: 'camera' }
];

const FilterCategories = ({ selectedCategories, onCategoryChange }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (value === 'all') {
      onCategoryChange(checked ? categories.map(cat => cat.value) : []);
    } else {
      onCategoryChange(prev =>
        checked ? [...prev, value] : prev.filter(cat => cat !== value)
      );
    }
  };

  return (
    <div className=' bg-white w-full rounded-2xl'>
      <div className="p-4">
        <label className="block text-gray-700 font-medium mb-2">Danh mục</label>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.value} className="flex items-center">
              <input
                type="checkbox"
                value={category.value}
                checked={selectedCategories.includes(category.value)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label className="ml-2 block text-gray-700">{category.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ParentComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="">
      <FilterCategories
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
      />

    </div>
  );
};

export default ParentComponent;
