import React from 'react'
import DashboardStatsGrid from '../pages/DashboardStatsGrid'
import RecentOrders from '../pages/RecentOrders'
import PopularProducts from './../pages/PopularProducts';
import BuyerProfilePieChart from './../pages/BuyerProfilePieChart'
import TransactionChart from './../pages/TransactionChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}