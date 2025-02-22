import { Button, Image } from "@heroui/react";
import ProjectImage1 from "../assets/images/ProjectImage1.png";
import ProjectImage2 from "../assets/images/ProjectImage2.png";
import ProjectImage3 from "../assets/images/ProjectImage3.png";
import { Icons } from "./icons/Icon";

export default function ProjectSection() {
    const projects = [
        {
            title: 'Flowers Book Illustration',
            desc: 'Dataly mobile apps is an application to detect weather data directly',
            image: ProjectImage2,
        },
        {
            title: 'AR 3D Design Concept',
            desc: 'Dataly mobile apps is an application to detect weather data directly',
            image: ProjectImage1,
        },
        {
            title: 'NFT Bored Scooters ',
            desc: 'Dataly mobile apps is an application to detect weather data directly',
            image: ProjectImage3,
        },
    ]
    return (
        <div className="containerls py-5 md:py-10 lg:py-20 relative flex flex-col gap-10 md:gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div className="col-span-1">
                    <h1 className="text-display-xs-bold md:text-display-sm-bold lg:text-display-lg-bold w-full md:w-3/3 lg:w-2/3">Amazing project we have done</h1>
                </div>

                <div className="col-span-1 flex flex-col gap-4 justify-end">
                    <p className="text-body-md-regular w-full text-start md:text-end">
                        We help our clients, from a cool idea to a million-dollar product. And we are very proud to become part of their journey.
                    </p>

                    <div className="flex justify-end">
                        <Button
                            radius='full'
                            size="lg"
                            className="bg-gradient-to-b from-[#285F76] via-[#2F90AB] to-[#42A8C2] border border-primary-300 text-body-md-semibold text-neutral-50 mt-4"
                        >
                            Read All
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
                {projects.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-md bg-white/[0.02] border border-neutral-600 flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-12"
                    >
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                <h6 className="text-display-sm-bold md:text-display-lg-bold lg:text-display-xl-bold text-neutral-100">{item.title}</h6>
                                <p className="text-body-sm-regular md:text-body-md-regular text-neutral-300">{item.desc}</p>
                            </div>
                            <div className="flex">
                                <Button
                                    endContent={<Icons.ArrowUpRight />}
                                    size="lg"
                                    radius="full"
                                    className="border border-neutral-600 bg-white/[0.02] text-neutral-50"
                                >
                                    See Detail
                                </Button>
                            </div>
                        </div>

                        <Image
                            src={item.image}
                            alt={item.title}
                            radius="sm"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
