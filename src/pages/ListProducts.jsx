import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkPageAddProducts from '../components/LinkPageAddProducts';
import LinkPageEditProducts from '../components/LinkPageEditProducts';
import LinkPageShowProducts from '../components/LinkPageShowProducts';
import LinkPageDeleteProducts from '../components/LinkPageDeleteProducts';

// Hàm trả về dữ liệu mẫu
const getSampleProducts = () => {
  return [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: 100,
      description: 'Description of product 1',
      guarantee: '1 year',
      category: 'Category 1',
      status: 1
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: 200,
      description: 'Description of product 2',
      guarantee: '2 years',
      category: 'Category 2',
      status: 0
    },
    // Thêm nhiều sản phẩm mẫu hơn nếu cần
  ];
}

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch products when component mounts
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        if (response.data.data.length === 0) {
          setProducts(getSampleProducts()); // Sử dụng dữ liệu mẫu nếu API không trả về dữ liệu
        } else {
          setProducts(response.data.data);
        }
      })
      .catch(error => {
        console.error('Failed to fetch products. Error:', error);
        setProducts(getSampleProducts()); // Sử dụng dữ liệu mẫu nếu API gặp lỗi
      });
  }, []);

  const handleDelete = (productId) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${productId}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== productId));
      })
      .catch(error => {
        console.error('Failed to delete product. Error:', error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col">
        {status && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-md">
            {status}
          </div>
        )}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <LinkPageAddProducts />
          <div className="p-4">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="py-2 px-4 border-b">Id</th>
                  <th className="py-2 px-4 border-b">Ảnh</th>
                  <th className="py-2 px-4 border-b">Tên</th>
                  <th className="py-2 px-4 border-b">Giá</th>
                  <th className="py-2 px-4 border-b">Mô tả</th>
                  <th className="py-2 px-4 border-b">Bảo hành</th>
                  <th className="py-2 px-4 border-b">Danh mục</th>
                  <th className="py-2 px-4 border-b">Trạng thái</th>
                  <th className="py-2 px-4 border-b">Hành động</th>
                </tr>
              </thead>
              <tbody id="product-list">
                {products.map(product => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border-b">{product.id}</td>
                    <td className="py-2 px-4 border-b">
                      <img src={product.image} alt="Product Image" className="w-16 h-16 object-cover" />
                    </td>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">{product.price}</td>
                    <td className="py-2 px-4 border-b">{product.description}</td>
                    <td className="py-2 px-4 border-b">{product.guarantee}</td>
                    <td className="py-2 px-4 border-b">{product.category}</td>
                    <td className="py-2 px-4 border-b">{product.status === 1 ? 'Còn hàng' : 'Hết hàng'}</td>
                    <td className="py-2 px-4 border-b space-x-2">
                      <LinkPageEditProducts product={product} />
                      <LinkPageShowProducts product={product} />
                      <LinkPageDeleteProducts productId={product.id} onDelete={handleDelete} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Add pagination if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
