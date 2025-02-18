import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react'
import Logo from '../logo/Logo';
import Routes from "./Routes";

export default function Header() {
    return (
        <Navbar
            shouldHideOnScroll
            maxWidth="full"
            className="bg-transparent md:px-4 lg:px-14 py-2 md:py-4 lg:py-6"
        >
            <NavbarBrand>
                <Logo />
            </NavbarBrand>
            <NavbarContent
                className="hidden md:flex gap-4 md:gap-6 lg:gap-12 text-neutral-50 border border-neutral-600 rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4"
                justify="center"
            >
                {Routes.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            href={item.route}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent className="hidden sm:flex md:hidden lg:flex" justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#"
                        radius='full'
                        className="bg-gradient-to-b from-[#285F76] via-[#2F90AB] to-[#42A8C2] border border-primary-300 text-body-md-semibold text-neutral-50"
                    >
                        Let’s Talk
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
