// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState, useEffect } from "react"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'
import { FcBullish } from "react-icons/fc";

const SidebarContext = createContext()
const linkClass =
    'py-2 px-3 my-1 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

    
export default function Sidebar2({ children }) {
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth >= 991);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar a la función al inicio para establecer el estado inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <aside className="h-screen ">
      <nav className="h-full flex flex-col  border-r shadow-sm bg-neutral-900">
        <div className="p-4 pb-2 flex justify-between items-center">
        <div className={`flex flex-row m-2 overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}>
        {/* <FcBullish
            className="text-6xl"
            alt=""
          /> */}
        <span className={`text-neutral-100 text-lg`}>MyDashboard</span>
        </div>
          
          
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
              {expanded ? <MdKeyboardDoubleArrowLeft className='text-4xl' /> : <MdKeyboardDoubleArrowRight className='text-4xl' />}
            {/* {expanded ? <ChevronFirst /> : <ChevronLast />} */}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/One-Piece-1047-Spoilers.jpg"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">Axel Andrade</h4>
              <span className="text-xs text-gray-400">villalobos.axel@yahoo.es</span>
            </div>
            {/* <MoreVertical size={20} /> */}
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, link}) {
  const { expanded } = useContext(SidebarContext)
  const { pathname } = useLocation()
  return (
    <Link
    to={link.path}
    className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', "hover:no-underline relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group")}
    >
      <span className="text-white">{icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
       <span className="text-white">{text}</span> 
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </Link>
  )
}