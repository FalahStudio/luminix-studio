import React from "react";
import { Button, Link } from "@heroui/react";
import { Icons } from "../../components/icons/Icon";
import Logo from "../logo/Logo";

export default function Footer() {
    const icon: Array<keyof typeof Icons> = ['Facebook', 'Instagram', 'Linkedin', 'Youtube'];
    const linkInformation = [
        {
            title: 'overview',
            link: [
                {
                    name: 'What we do',
                    location: '#'
                },
                {
                    name: 'Our Services',
                    location: '#'
                },
                {
                    name: 'Carier',
                    location: '#'
                },
                {
                    name: 'Our Work',
                    location: '#'
                },
            ]
        },
        {
            title: 'company',
            link: [
                {
                    name: 'About',
                    location: '#'
                },
                {
                    name: 'Blog',
                    location: '#'
                },
                {
                    name: 'Blog Post',
                    location: '#'
                },
                {
                    name: 'Login',
                    location: '#'
                },
            ]
        },
        {
            title: 'resources',
            link: [
                {
                    name: 'Contact Sales',
                    location: '#'
                },
                {
                    name: 'Support Center',
                    location: '#'
                },
                {
                    name: 'App Marketplace',
                    location: '#'
                },
                {
                    name: 'Terms of Service',
                    location: '#'
                },
            ]
        },
    ];

    return (
        <div className="containerls y-5 md:py-10 lg:py-20 bg-support-background flex flex-row flex-wrap gap-10 md:justify-between z-20 relative">
            <div className="flex flex-col gap-5 w-full md:max-w-[399px]">
                <Logo
                    width={329}
                    height={52}
                />
                <span className="text-body-lg-medium">Curious about new developments and updates? follow our social media</span>

                <div className="mt-3 flex flex-row gap-3.5">
                    {icon.map((item, index) => (
                        <Button
                            key={index}
                            isIconOnly
                            className="bg-primary-700"
                            radius="full"
                        >
                            {React.createElement(Icons[item], { width: 18, height: 18 })}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="p-6 rounded-md bg-white/[0.02] border border-neutral-600 flex flex-row gap-8 md:gap-12">
                {linkInformation.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-6 p-2.5"
                    >
                        <p className="uppercase text-body-md-semibold">{item.title}</p>
                        <div className="flex flex-col gap-4">
                            {item.link.map((link, key) => (
                                <Link
                                    key={key}
                                    href={link.name}
                                    className="text-body-md-regular"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
