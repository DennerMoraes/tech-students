"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import BrandLogo from "../../public/Brand/Logo-colored.svg"
import Icon from "./icon";

type AutButtonProps = {
    className?: string;
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev)
    }, [])

    const toggleDropdown = useCallback(() => {
        setDropdownOpen(prev => !prev)
    }, [])

    const closeAllMenus = useCallback(() => {
        setMenuOpen(false)
        setDropdownOpen(false)
    }, [])

    const navItems = [
        { href: "/products", label: "Products" },
        { href: "/solutions", label: "Solutions" },
        { href: "/pricing", label: "Pricing" },
    ]

    const dropdownItems = [
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
    ]

    const NavContent = () => (
        <>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-4 leading-6 px-2 py-3 text-blueText font-[600] duration-200 font-roboto hover:text-blueLink"
                    onClick={closeAllMenus}
                >
                    {item.label}
                </Link>
            ))}

            <div className="relative">
                <button
                    className="group flex items-center text-4 leading-6 px-2 py-3 text-blueText font-[600] duration-200 font-roboto hover:text-blueLink"
                    onClick={toggleDropdown}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                >
                    <span className="pr-2">Resources</span>
                    <div
                        className={`inline-block transition-transform duration-200 group-hover:text-blueLink ${dropdownOpen ? 'rotate-180' : ''}`}
                    >
                        <Icon name="arrowDown" fill="currentColor" />
                    </div>
                </button>
                {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 p-4 bg-white shadow rounded-md z-50">
                        {dropdownItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex col leading-3 px-2 py-3 text-blueText font-[500] duration-200 font-roboto hover:text-blueLink"
                                onClick={closeAllMenus}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    )

    const AutButton = ({ className }: AutButtonProps) => (
        <div className={`flex flex-col items-start lg:flex-row gap-4 ${className}`}>
            <Link
                href="/login"
                className="text-4 leading-6 px-2 py-3 text-blueText font-[600] duration-200 font-roboto hover:text-blueLink"
                onClick={closeAllMenus}
            >
                Login
            </Link>
            <Link
                href="/signup"
                className="text-4 leading-6 px-6 py-3 text-blueText font-[600] duration-200 font-roboto hover:text-blueLink border-2 rounded-lg"
                onClick={closeAllMenus}
            >
                Sign Up Now
            </Link>
        </div>
    )

    return (
        <header className="bg-white w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-6 px-4 max-w-330">
                <Link href="/" className="flex items-center lg:hidden" onClick={closeAllMenus}>
                    <Image
                        src={BrandLogo}
                        alt="teach logo"
                        className="w-auto"
                        width={103}
                        height={35}
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-12">
                    <Link href="/" className="flex items-center" onClick={closeAllMenus}>
                        <Image
                            src={BrandLogo}
                            alt="teach logo"
                            className="w-auto"
                            width={103}
                            height={35}
                        />
                    </Link>
                    <NavContent />
                </nav>

                <AutButton className="hidden lg:flex" />

                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`block absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 top-1/2' : 'top-1/4'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'top-1/2'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 top-1/2' : 'top-3/4'}`}></span>
                </button>
            </div>

            {menuOpen && (
                <div
                    className="fixed inset-0 bg-white bg-opacity-95 z-40 p-4 mt-16 lg:hidden"
                >
                    <div className="flex flex-col">
                        <NavContent />
                        <AutButton className="pt-8" />
                    </div>
                </div>
            )}
        </header>
    )
}
