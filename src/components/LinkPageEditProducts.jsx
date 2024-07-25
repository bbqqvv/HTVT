import React from 'react'
import { Link } from 'react-router-dom';

const LinkPageEditProducts = ({ product }) => (
    <Link to={`/products/${product.id}/edit`} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
        Edit
    </Link>
);

export default LinkPageEditProducts
