import React from 'react';
import FilterComponent from '../components/FilterCategories';
import Pagination from '../components/Pagination';
import SearchComponent from '../components/SearchComponent';

const products = [
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },
    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },

    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },

    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },

    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },

    {
        id: 1,
        name: 'Sơ mi họa tiết cọ xanh',
        description: 'Một chiếc sơ mi họa tiết đẹp với chất liệu vải cao cấp.',
        originalPrice: '280.000đ',
        salePrice: '199.000đ',
        rating: 4.5,
        reviewsCount: 15,
        image1: 'https://statics.pancake.vn/web-media/5c/ee/e6/c5/d2289add92807fef8ad2d0bfdf89cb169b77f4d5beffcb5e9f23b427.jpg',
        image2: 'https://statics.pancake.vn/web-media/7a/94/3a/a2/6a73d81c276dfe75c384200ca9ff5fce35a4ae11b6c27ea9d0ed8d0a.jpg',
        url: '/products/so-mi-hoa-tiet-co-xanh',
        discount: '-29%',
    },



    // Add other products here...
];

const ProductGrid = () => {
    return (
        <div className="container mx-auto px-4 py-8 z-1">
            <div className="flex flex-col lg:flex-row">
                {/* Left Section */}
                <div className="w-full lg:w-3/4 p-4 border">
                    <section className="mt-12 w-full">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <div key={product.id} className="product group bg-white border rounded-lg shadow-md overflow-hidden relative">
                                        <a href={product.url} className="block">
                                            <div className="relative w-full h-auto overflow-hidden">
                                                <img
                                                    src={product.image1}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                                />
                                                <img
                                                    src={product.image2}
                                                    alt={product.name}
                                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-white text-sm font-semibold">Xem Ngay</span>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="text-lg font-semibold text-gray-800">{product.name}</div>
                                                <div className="text-gray-600 text-sm mt-1">{product.description}</div>
                                                <div className="mt-2 flex items-baseline">
                                                    <div className="text-red-600 font-semibold">{product.salePrice}</div>
                                                    <div className="ml-2 text-gray-500 line-through">{product.originalPrice}</div>
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div className="text-yellow-500 flex">
                                                        {Array.from({ length: 5 }, (_, i) => (
                                                            <svg key={i} className={`w-5 h-5 ${i < product.rating ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="text-gray-500 text-sm ml-2">({product.reviewsCount} đánh giá)</span>
                                                </div>
                                            </div>
                                        </a>
                                        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <div>
                        <Pagination />
                    </div>

                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/4 p-4 border mt-4 lg:mt-0">
                    <div className=''>
                        <SearchComponent />
                    </div>
                    <div>
                        <FilterComponent />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductGrid;
