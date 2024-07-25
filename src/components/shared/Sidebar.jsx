import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown, HiChevronUp, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FcBullish } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <>
                <div className="lg:hidden p-3">
                    <button onClick={toggleSidebar} className="text-black">
                        {isSidebarOpen ? <HiOutlineX fontSize={24} /> : <HiOutlineMenu fontSize={24} />}
                    </button>
                </div>
                <div
                    ref={sidebarRef}
                    className={classNames(
                        "z-50 bg-neutral-900 lg:w-60 p-3 flex flex-col fixed lg:static top-0 left-0 h-full lg:h-auto transition-transform transform lg:transform-none",
                        { "-translate-x-full": !isSidebarOpen, "translate-x-0": isSidebarOpen }
                    )}
                >
                    <div className="flex items-center gap-2 px-1 py-3">
                        <FcBullish fontSize={24} />
                        <span className="text-neutral-200 text-lg">ROWAY</span>
                    </div>
                    <div className="py-8 flex flex-1 flex-col gap-0.5">
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
        </>
    );
}

function SidebarLink({ link }) {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const hasSubLinks = link.subLinks && link.subLinks.length > 0;

    return (
        <div>
            <Link
                to={link.path || '#'}
                className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
                onClick={hasSubLinks ? handleDropdownToggle : undefined}
            >
                <span className="text-xl">{link.icon}</span>
                {link.label}
                {hasSubLinks && (
                    <span className="ml-auto">
                        {isOpen ? <HiChevronUp /> : <HiChevronDown />}
                    </span>
                )}
            </Link>
            {isOpen && hasSubLinks && (
                <div className="ml-4">
                    {link.subLinks.map((subLink) => (
                        <Link
                            key={subLink.key}
                            to={subLink.path}
                            className={classNames(pathname === subLink.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
                        >
                            {subLink.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
