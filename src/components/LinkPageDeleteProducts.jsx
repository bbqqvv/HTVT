import React from 'react'
import { Link } from 'react-router-dom';

const LinkPageDeleteProducts = ({ productId, onDelete }) => (
    <button onClick={() => onDelete(productId)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Delete
    </button>
);

export default LinkPageDeleteProducts
