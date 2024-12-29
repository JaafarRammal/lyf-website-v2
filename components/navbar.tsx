"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";

const navLinks = [
    { href: "/calendar", label: "Calendar" },
    // { href: "/blog", label: "Blog" },
    // { href: "/merch", label: "Merch" },
];

// Desktop NavLink with NavigationMenuItem
const DesktopNavLink = ({ href, label }: { href: string; label: string }) => (
    <NavigationMenuItem>
        <Link
            href={href}
            className="inline-flex items-center px-4 py-2 text-sm rounded-lg text-white font-semibold bg-black hover:bg-white hover:text-black transition-colors active:bg-white active:text-black"
        >
            {label}
        </Link>
    </NavigationMenuItem>
);

// Mobile NavLink without NavigationMenu components
const MobileNavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="inline-flex items-center px-4 py-2 text-sm rounded-lg text-white font-semibold bg-black hover:bg-white hover:text-black transition-colors active:bg-white active:text-black"
    >
        {label}
    </Link>
);

// Donate button
const DonateButton = () => (
    <NavigationMenuItem>
        <Link
            href="https://pay.sumup.io/b2c/QJMTG9LM"
            target="_blank"
            className="inline-flex items-center px-6 py-2 text-sm rounded-lg bg-primary hover:bg-primary-dark transition-colors text-black font-semibold bg-white"
        >
            Donate
        </Link>
    </NavigationMenuItem>
);

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <nav className="bg-black text-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex gap-2 items-center">
                    LYF
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-6">
                            {navLinks.map((link) => (
                                <DesktopNavLink key={link.href} href={link.href} label={link.label} />
                            ))}
                            <DonateButton />
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black border-b z-50 md:hidden border-t">
                        <NavigationMenu>
                            <NavigationMenuList className="px-4 py-4 flex flex-col space-y-4 items-start ">
                                {navLinks.map((link) => (
                                    <MobileNavLink key={link.href} href={link.href} label={link.label} onClick={handleClose} />
                                ))}
                                <DonateButton />
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                )}
            </div>
        </nav>
    );
}
