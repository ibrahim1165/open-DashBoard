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
			<div className="lg:flex lg:flex-row gap-4 lg:w-full md:full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="lg:flex lg:flex-row lg:gap-4 lg:w-full md:full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}