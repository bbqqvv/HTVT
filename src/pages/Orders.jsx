import React, { useState } from 'react';

const OrdersManagement = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            customerName: 'Nguyễn Văn A',
            address: '123 Đường ABC, Quận 1, TP.HCM',
            phoneNumber: '0123456789',
            notes: 'Giao hàng buổi sáng',
            products: [
                { name: 'Áo sơ mi', price: 200000 },
                { name: 'Áo polo', price: 250000 },
            ],
            status: 'Đã đặt',
        },
        {
            id: 2,
            customerName: 'Trần Thị B',
            address: '456 Đường DEF, Quận 2, TP.HCM',
            phoneNumber: '0987654321',
            notes: 'Giao hàng buổi chiều',
            products: [
                { name: 'Áo phông', price: 150000 },
            ],
            status: 'Đã giao',
        },
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleSelectOrder = (order) => {
        setSelectedOrder(order);
    };

    const handleChangeStatus = (orderId, status) => {
        setOrders(orders.map(order => order.id === orderId ? { ...order, status } : order));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-6">Quản Lý Đơn Đặt Hàng</h1>
            <div className="mb-6">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Mã Đơn Hàng</th>
                            <th className="py-2 px-4 border">Tên Khách Hàng</th>
                            <th className="py-2 px-4 border">Địa Chỉ</th>
                            <th className="py-2 px-4 border">Số Điện Thoại</th>
                            <th className="py-2 px-4 border">Trạng Thái</th>
                            <th className="py-2 px-4 border">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectOrder(order)}>
                                <td className="py-2 px-4 border">{order.id}</td>
                                <td className="py-2 px-4 border">{order.customerName}</td>
                                <td className="py-2 px-4 border">{order.address}</td>
                                <td className="py-2 px-4 border">{order.phoneNumber}</td>
                                <td className="py-2 px-4 border">{order.status}</td>
                                <td className="py-2 px-4 border">
                                    <select
                                        value={order.status}
                                        onChange={(e) => handleChangeStatus(order.id, e.target.value)}
                                        className="bg-white border border-gray-300 rounded px-2 py-1"
                                    >
                                        <option value="Đã đặt">Đã đặt</option>
                                        <option value="Đang giao">Đang giao</option>
                                        <option value="Đã giao">Đã giao</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedOrder && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                    <h2 className="text-xl font-bold mb-4">Chi Tiết Đơn Hàng</h2>
                    <p><strong>Mã Đơn Hàng:</strong> {selectedOrder.id}</p>
                    <p><strong>Tên Khách Hàng:</strong> {selectedOrder.customerName}</p>
                    <p><strong>Địa Chỉ:</strong> {selectedOrder.address}</p>
                    <p><strong>Số Điện Thoại:</strong> {selectedOrder.phoneNumber}</p>
                    <p><strong>Ghi Chú:</strong> {selectedOrder.notes}</p>
                    <h3 className="text-lg font-bold mt-4">Sản Phẩm</h3>
                    <ul>
                        {selectedOrder.products.map((product, index) => (
                            <li key={index}>
                                {product.name} - {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4"><strong>Trạng Thái:</strong> {selectedOrder.status}</p>
                </div>
            )}
        </div>
    );
};

export default OrdersManagement;
