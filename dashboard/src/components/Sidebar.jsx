import React, { createContext, useContext, useState } from 'react'
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'
import { FaX } from 'react-icons/fa6';
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const SidebarContext = createContext()
function Sidebar() {
    const [expanded, setExpanded] = useState(true)
    return (
        <div className={`flex flex-col bg-neutral-900  p-3 text-white ${expanded ? "w-62" : "w-12.3"} `}>
            <div className='flex items-center justify-between p-2 pb-2'>
                <div className={`flex flex-row overflow-hidden transition-all ${expanded ? "w-32" : "w-0"} overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>

                    <span> <FcBullish className='' /></span>
                    <span className={`text-neutral-100 text-lg`}>MyDashboard</span>
                </div>

                {/* <FaX className='ml-10 lg:hidden'/> */}
                <button className='p-3.5' onClick={() => setExpanded(curr => !curr)}>
                    {expanded ? <MdKeyboardDoubleArrowLeft className='text-4xl' /> : <MdKeyboardDoubleArrowRight className='text-4xl' />}

                </button>

            </div>
            <SidebarContext.Provider value={{expanded}}>
            <div className='flex-1 px-3'>
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            {/* <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div> */}
            </SidebarContext.Provider>
        </div>
    )
}

function SidebarLink({ link }) {

    const {expanded} = useContext(SidebarContext)
    const { pathname } = useLocation()
    return (

        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            <span className={`overflow-hidden transition-all ${expanded ? "w-52": "w-0 "}`}>{link.label}</span>
        </Link>
    )
}

export default Sidebar
