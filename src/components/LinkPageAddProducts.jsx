import React from 'react';
import { Link } from 'react-router-dom';

const LinkPageAddProducts = () => {
    return (
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
            <h4 className="text-lg font-semibold">Danh sách sản phẩm</h4>
            <Link to="/products/create" className="px-4 py-2 font-semibold bg-blue-500 text-white rounded hover:bg-blue-600">
                Thêm sản phẩm
            </Link>
        </div>
    );
}

export default LinkPageAddProducts;
