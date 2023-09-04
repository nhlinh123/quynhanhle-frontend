import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import './navbar.css'
export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { title: "trang chủ", link: '/' },
        { title: "Artwork", link: '/exhibition' },
        { title: "Giới thiệu", link: '/about' },
        { title: "Event & Blog", link: '/' },
        { title: "Log Out", link: '/' },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="justify-between">
            <NavbarContent>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-20" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        trang chủ
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/exhibition" aria-current="page">
                        Artwork
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about">
                        Giới thiệu
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Event & Blog
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item?.link}
                            size="lg"
                        >
                            {item?.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
