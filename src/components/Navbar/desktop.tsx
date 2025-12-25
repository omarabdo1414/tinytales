import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

import Logo from "../../../public/Images/Logo.svg";
import { navLinks, navActions } from "./config";

const DesktopView = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur border-b border-gray-100">

            <div className="flex justify-between items-center gap-10">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={Logo}
                            width={90}
                            height={50}
                            loading="eager"
                            alt="Company logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center gap-2 font-medium hover:text-blue-600 transition-colors"
                            >
                                {Icon && <Icon className="text-base" />}
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center gap-5 text-gray-700">
                {navActions.map((action) => {
                    const Icon = action.icon;
                    const isLanguage = action.id === "language";

                    return (
                        <button
                            key={action.id}
                            type="button"
                            className="flex items-center gap-1 hover:text-blue-600 transition-colors text-sm"
                            aria-label={action.label}
                        >
                            {isLanguage ? (
                                <>
                                    <Icon className="text-lg" />
                                    <span className="text-xs font-medium">EN</span>
                                    <FiChevronDown className="text-[10px]" />
                                </>
                            ) : (
                                <Icon className="text-lg" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default DesktopView;