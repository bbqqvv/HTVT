import React, { useState } from 'react';

const AddEmployeeForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(name, role);
        setName('');
        setRole('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <h2 className="text-xl font-bold mb-2">Thêm nhân viên mới</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Tên nhân viên</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Vai trò</label>
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Thêm</button>
        </form>
    );
};

export default AddEmployeeForm;
