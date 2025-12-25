import Hamburger from 'hamburger-react';
import Image from "next/image";
import Link from "next/link";

import { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";

import Logo from "../../../public/Images/Logo.svg"
import { navLinks, navActions } from "./config";

const MobileView = () => {
    const [isOpen, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);

    return (
        <div className='relative flex items-center justify-between px-3 py-2'>
            <div className="logo">
                <Link href="/">
                        <Image
                            src={Logo}
                            width={80}
                            height={40}
                            loading="eager"
                            alt="Company logo"
                        />
                    </Link>
            </div>

            <div className="flex items-center gap-2">
                <Hamburger size={22} toggled={isOpen} toggle={setOpen} aria-label="Toggle menu" />
            </div>

            {isOpen && (
                <button
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                    className="fixed inset-0 z-10 bg-black/30 backdrop-blur-[2px]"
                />
            )}

            <div
                className={`fixed top-0 right-0 z-20 flex h-full w-64 flex-col bg-white shadow-2xl transition-transform duration-200 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <span className="text-sm font-semibold text-gray-700">Menu</span>
                    <Hamburger size={18} toggled={isOpen} toggle={setOpen} aria-label="Close menu" />
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="w-full rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="h-px bg-gray-200" />

                    <div className="flex flex-col gap-3 text-sm text-gray-800">
                        {navActions.map((action) => {
                            const Icon = action.icon;
                            return (
                                <button
                                    key={action.id}
                                    type="button"
                                    className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
                                    aria-label={action.label}
                                >
                                    <span className="flex items-center gap-2">
                                        <Icon className="text-lg" />
                                        {action.label}
                                    </span>
                                    {action.extra && (
                                        <span className="flex items-center gap-1 text-xs text-gray-600">
                                            {action.extra}
                                            <FiChevronDown className="text-[10px]" />
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileView;