// import React from 'react'
// import classNames from 'classnames'
// import { Link, useLocation } from 'react-router-dom'
// import { FcBullish } from 'react-icons/fc'
// import { HiOutlineLogout } from 'react-icons/hi'
// import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'


// const linkClass =
// 	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

// export default function Sidebar() {
// 	return (
// 		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
// 			<div className="flex items-center gap-2 px-1 py-3">
// 				<FcBullish fontSize={24} />
// 				<span className="text-neutral-200 text-lg">OpenShop</span>
// 			</div>
// 			<div className="py-8 flex flex-1 flex-col gap-0.5">
// 				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
// 					<SidebarLink key={link.key} link={link} />
// 				))}
// 			</div>
// 			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
// 				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
// 					<SidebarLink key={link.key} link={link} />
// 				))}
// 				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
// 					<span className="text-xl">
// 						<HiOutlineLogout />
// 					</span>
// 					Logout
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// function SidebarLink({ link }) {
// 	const { pathname } = useLocation()

// 	return (
// 		<Link
// 			to={link.path}
// 			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
// 		>
// 			<span className="text-xl">{link.icon}</span>
// 			{link.label}
// 		</Link>
// 	)
// }



import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineAnnotation, HiOutlineCog, HiOutlineCube, HiOutlineDocumentText, HiOutlineQuestionMarkCircle, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FcBullish } from 'react-icons/fc'
import { FaComputer} from "react-icons/fa6"
const Home = () => {
  const menus = [
    // { name: "ComputerHouse", link: "/", icon: FaComputer },
    { name: "Dashboard", link: "/home", icon: HiOutlineViewGrid },
    { name: "Products", link: "/home/product", icon: HiOutlineCube },
    { name: "Orders", link: "/home/orders", icon: HiOutlineShoppingCart },
    { name: "Customers", link: "/home/customers", icon: HiOutlineUsers, margin: true },
    { name: "Transactions", link: "/home/transactions", icon: HiOutlineDocumentText },
    { name: "messages", link: "/home/messages", icon: HiOutlineAnnotation  },
    { name: "Settings", link: "/home/settings", icon: HiOutlineCog, margin: true },
    { name: "Help & Support", link: "/home/support", icon: HiOutlineQuestionMarkCircle },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
		
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
		
        <div className="py-3 flex justify-center ">
          <div className={ `text-secondary flex justify-center pr-10 ${
          open ? "w-72" : "hidden"
        } `}>
            <div className="px-3">
              <FaComputer size={26}
            className="cursor-pointer"/>
            </div>
              <h2>
            <p className="text-lg">ComputerHouse</p>
              </h2>
          </div>
          <div>

          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          </div>
        </div>
		{/* <div className="lg:flex items-center gap-2 px-1 py-8">
				<FcBullish fontSize={24} />
 				<span className="text-neutral-200 text-lg">OpenShop</span>
 			</div> */}
        <div className="mt-4 flex flex-col gap-4 relative py-8">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-lg  gap-3 font-medium p-2 hover:bg-gray-800 rounded-md hover:no-underline  text-white`}
            >
              <div>{React.createElement(menu?.icon, { size: "24" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-24 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;