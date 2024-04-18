import React from 'react'
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

function Sidebar() {
    return (
        <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish />
                <span className='text-neutral-100 text-lg'>MyDashboard</span>
            </div>
            <div className='flex-1'>
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout /> 
					</span>
					Logout
				</div>
			</div>
        </div>
    )
}

function SidebarLink({ link }) {

    const { pathname } = useLocation()
    return (

        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}

export default Sidebar
