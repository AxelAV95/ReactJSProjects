import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLogout
} from 'react-icons/hi'

// export const DASHBOARD_SIDEBAR_LINKS = [
// 	{
// 		key: 'dashboard',
// 		label: 'ダッシュボード',
// 		path: '/',
// 		icon: <HiOutlineViewGrid />
// 	},
// 	{
// 		key: 'products',
// 		label: '商品',
// 		path: '/products',
// 		icon: <HiOutlineCube />
// 	},
// 	{
// 		key: 'orders',
// 		label: '注文',
// 		path: '/orders',
// 		icon: <HiOutlineShoppingCart />
// 	},
// 	{
// 		key: 'customers',
// 		label: '顧客',
// 		path: '/customers',
// 		icon: <HiOutlineUsers />
// 	},
// 	{
// 		key: 'transactions',
// 		label: '取引',
// 		path: '/transactions',
// 		icon: <HiOutlineDocumentText />
// 	},
// 	{
// 		key: 'messages',
// 		label: 'メッセージ',
// 		path: '/messages',
// 		icon: <HiOutlineAnnotation />
// 	}
// ]

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
// 	{
// 		key: 'settings',
// 		label: '設定',
// 		path: '/settings',
// 		icon: <HiOutlineCog />
// 	},
// 	{
// 		key: 'support',
// 		label: 'ヘルプ＆サポート',
// 		path: '/support',
// 		icon: <HiOutlineQuestionMarkCircle />
// 	}
// ]



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid size={25} />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube size={25} />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart size={25} />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers size={25}/>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText size={25}/>
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation size={25} />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog size={25}/>
	},
	{
		key: 'support',
		label: 'Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle size={25}/>
	},
	{
		key: 'logout',
		label: ' Logout',
		path: '/logout',
		icon: <HiOutlineLogout size={25}/>
	}
]