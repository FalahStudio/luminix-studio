import { Image } from "@heroui/react";
import SectionFocus1 from "../assets/images/SectionFocus1.png";
import SectionFocus2 from "../assets/images/SectionFocus2.png";
import SectionFocus3 from "../assets/images/SectionFocus3.png";
import { Icons } from "./icons/Icon";

export default function SectionFocus() {
    const focus = [
        {
            title: 'UI/UX Design',
            desc: 'Product that have a good appearance can attract users',
            image: SectionFocus3
        },
        {
            title: 'Logo Branding',
            desc: 'Product identity is needed to have a characteristic',
            image: SectionFocus2
        },
        {
            title: 'Digital Printing',
            desc: 'In this era, digital painting is still very popular with young people',
            image: SectionFocus1
        },
    ];

    return (
        <div className="containerls py-10 flex flex-col justify-center items-center gap-10 md:gap-20 w-full h-[90vh] relative overflow-hidden">
            <h1 className="text-display-xs-bold md:text-display-sm-bold lg:text-display-lg-bold w-full text-center">What we focus on</h1>

            <div className="relative flex justify-center w-full h-full gap-2">
                {focus.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute transition-all duration-500 ease-in-out cursor-pointer
                            ${index === 0 ? "z-30 top-0 left-10" : ""}
                            ${index === 1 ? "z-20 top-10" : ""}
                            ${index === 2 ? "z-10 top-20 right-10" : ""}
                            hover:z-30 hover:scale-110`}
                    >
                        <div className="bg-support-background rounded-md p-4 text-white w-full flex flex-col gap-8 border border-neutral-600">
                            <div className="flex flex-row gap-4 items-center">
                                <div className="rounded-full p-4 border border-neutral-600">
                                    <Icons.Sparkles />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h6 className="text-body-lg-bold md:text-body-xl-bold lg:text-display-sm-bold text-neutral-100">{item.title}</h6>
                                    <p className="text-body-xs-bold md:text-body-sm-regular text-neutral-300">{item.desc}</p>
                                </div>
                            </div>

                            <Image
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
