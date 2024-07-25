import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiUserGroup,
	HiOutlineDocumentReport
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Sản phẩm',
		path: '',
		icon: <HiOutlineCube />,
		subLinks: [
			{
				key: 'listProducts',
				label: 'Danh sách sản phẩm',
				path: '/products/list',
			},
			{
				key: 'gridProducts',
				label: 'Danh sách lưới',
				path: '/products/grid',
			},
		]
	},

	{
		key: 'orders',
		label: 'Đặt hàng',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	// {
	// 	key: 'customers',
	// 	label: 'Khách hàng',
	// 	path: '/customers',
	// 	icon: <HiOutlineUsers />
	// },
	{
		key: 'employees',
		label: 'Nhân viên',
		path: '/employees',
		icon: <HiUserGroup />
	},
	{
		key: 'transactions',
		label: 'Giao dịch',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'feedback',
		label: 'Đánh giá',
		path: '/feadback',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'components',
		label: 'Thành phần',
		path: '/components',
		icon: <HiOutlineDocumentReport />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Cài đặt',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Giúp đỡ & Hỗ trợ',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
