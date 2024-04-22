import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

function Dashboard() {
  return (
    <div className='flex gap-4 flex-col'>
      <DashboardStatsGrid/>
      <div className="flex flex-row gap-4 w-full flex-container  ">
				<TransactionChart />
				<BuyerProfileChart />
			</div>

      <div className="flex flex-row gap-4 w-full flex-container">
				<RecentOrders className="inline-block" /> 
        <PopularProducts/>
				{/* <PopularProducts /> */}
			</div>
      {/* <h1　className='m-2'>こんにちは、アクセルだ。
      </h1>
      <h3 className='m-2'>ウェブデベロッパーだよ</h3>
      <Link className='m-2' to="/register">ページへ</Link> */}
    </div>
  )
}

export default Dashboard
