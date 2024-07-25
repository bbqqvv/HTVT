import React from 'react'
import { Link } from 'react-router-dom';

const LinkPageShowProducts = ({ product }) => (
    <Link to={`/products/${product.id}`} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Show
    </Link>
);

export default LinkPageShowProducts
