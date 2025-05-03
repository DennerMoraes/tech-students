"use client"

import Link from "next/link"
import Image from "next/image";
import BrandLogo from "../../public/Brand/Logo-colored-white.png"
import Icon from "./IconT";
import { IconName } from "./IconT";

export type FooterLinks = {
    href: string;
    label: string;
    icon?: IconName;
};

export type FooterTypes = {
    title: string;
    linkTitle: string;
    links: FooterLinks[];
};


export default function Footer() {
    const footerItems: FooterTypes[] = [
        {
            title: "Products",
            linkTitle: "/products",
            links: [
                { href: "/#", label: "Pricing" },
                { href: "/#", label: "Overview" },
                { href: "/#", label: "Browse" },
                { href: "/#", label: "Accessibility", icon: "beta" },
            ]
        },
        {
            title: "Solutions",
            linkTitle: "/solutions",
            links: [
                { href: "/#", label: "Brainstorming" },
                { href: "/#", label: "Ideation" },
                { href: "/#", label: "Wireframing" },
                { href: "/#", label: "Research" },
            ]
        },
        {
            title: "Resources",
            linkTitle: "/resources",
            links: [
                { href: "/#", label: "Help Center" },
                { href: "/#", label: "Blog" },
                { href: "/#", label: "Tutorials" },
                { href: "/#", label: "FAQs" },
            ]
        },
        {
            title: "Support",
            linkTitle: "/support",
            links: [
                { href: "/#", label: "Contact Us" },
                { href: "/#", label: "Developers" },
                { href: "/#", label: "Documentation" },
                { href: "/#", label: "Integrations" },
            ]
        },
        {
            title: "Company",
            linkTitle: "/company",
            links: [
                { href: "/#", label: "About" },
                { href: "/#", label: "Press" },
                { href: "/#", label: "Events" },
                { href: "/#", label: "Request Demo", icon: "arrowRight" },
            ]
        },
    ]

    const footerLinks = [
        { href: "/terms", label: "Terms" },
        { href: "/privacy", label: "Privacy" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <footer className="bg-blueText">
            <div className="container mx-auto flex flex-col justify-start items-start px-4 max-w-330">
                <div className="flex flex-row gap-12 py-12 flex-wrap">
                    <Link href="/" className="flex items-start min-w-[174px]">
                        <Image
                            src={BrandLogo}
                            alt="teach logo"
                            className="w-auto"
                            width={173}
                            height={35}
                        />
                    </Link>
                    {footerItems.map((section) => (
                        <div key={section.title} className="min-w-[173px]">
                            <Link
                                key={section.title}
                                href={section.linkTitle}
                                className="text-4 leading-[18px] text-white font-[600] duration-200 font-roboto hover:text-orange"
                            >
                                {section.title}
                            </Link>
                            <ul className="pt-3">
                                {section.links.map(link => (
                                    <li key={`${section.title}-${link.label}`} className="py-3">
                                        <Link href={link.href} aria-label={link.label} className="flex gap-2 flex-row items-center text-4 leading-[18px] text-white font-[400] duration-200 font-roboto hover:text-orange">
                                            {link.label}
                                            {link.icon && (
                                                <Icon name={link.icon} fill="currentColor" aria-hidden="true" />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap py-[25px] items-center justify-between w-full">
                    <p className="text-4 text-white font-[400] font-roboto leading-[1.4] text-center">uteach @ 2025. All rights reserved.</p>
                    <div className="flex flex-row items-center gap-2 lg:gap-8 flex-wrap">
                        {footerLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-4 leading-[22px] py-3 text-white font-[400] duration-200 font-roboto hover:text-orange"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href={'/EN'}
                            className="flex flex-row items-center text-4 leading-[22px] py-3 text-white font-[400] duration-200 font-roboto hover:text-orange"
                        >
                            <Icon name="world" fill="currentColor"/>
                            <p className="pl-2">EN</p>
                        </Link>
                        <Link
                            href={'/EN'}
                            className="flex flex-row items-center text-4 leading-[22px] py-3 text-white font-[400] duration-200 font-roboto hover:text-orange"
                        >
                            <Icon name="euro" fill="currentColor"/>
                            <p className="pl-2">EUR</p>
                        </Link>
                        <Link
                            aria-label="accessibility"
                            href={'/EN'}
                            className="flex flex-row items-center text-4 leading-[22px] py-3 text-white font-[400] duration-200 font-roboto hover:text-orange"
                        >
                            <Icon name="accessibility" fill="currentColor"/>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}
