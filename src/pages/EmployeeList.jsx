// src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Sử dụng axios để lấy dữ liệu từ tệp JSON
    axios.get('/employees.json')
      .then(response => {
        setEmployees(response.data.data);
      })
      .catch(error => {
        console.error('Failed to fetch employees. Error:', error);
      });
  }, []);

  const handleDelete = (employeeId) => {
    setEmployees(employees.filter(employee => employee.id !== employeeId));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="px-4 py-3 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
            <h4 className="text-lg font-semibold">Danh sách nhân viên</h4>
            <Link to="/employees/create" className="px-4 py-2 font-semibold bg-blue-500 text-white rounded">Thêm nhân viên</Link>
          </div>
          <div className="p-4">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="py-2 px-4 border-b">Id</th>
                  <th className="py-2 px-4 border-b">Tên</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Chức vụ</th>
                  <th className="py-2 px-4 border-b">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td className="py-2 px-4 border-b">{employee.id}</td>
                    <td className="py-2 px-4 border-b">{employee.name}</td>
                    <td className="py-2 px-4 border-b">{employee.email}</td>
                    <td className="py-2 px-4 border-b">{employee.position}</td>
                    <td className="py-2 px-4 border-b space-x-2">
                      <Link to={`/employees/${employee.id}/edit`} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Edit</Link>
                      <button onClick={() => handleDelete(employee.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
