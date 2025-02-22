import { Card, Image, CardFooter, Button } from "@heroui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeamImage1 from "../assets/images/TeamImage1.png";
import TeamImage2 from "../assets/images/TeamImage2.png";
import TeamImage3 from "../assets/images/TeamImage3.png";
import TeamImage4 from "../assets/images/TeamImage4.png";
import TeamImage5 from "../assets/images/TeamImage5.png";
import TeamImage6 from "../assets/images/TeamImage6.png";
import TeamImage7 from "../assets/images/TeamImage7.png";
import { Icons } from "./icons/Icon";

export default function TeamSection() {
    const team = [
        { name: "Yohanes Ridwan", position: "Founder", picture: TeamImage1 },
        { name: "Shereen Salma", position: "Co-founder", picture: TeamImage2 },
        { name: "Bagus Pratama", position: "3D Artist", picture: TeamImage3 },
        { name: "Yosuke Murata", position: "UX Researcher", picture: TeamImage4 },
        { name: "Jasmine Safira", position: "Project Manager", picture: TeamImage5 },
        { name: "Charles Xavier", position: "UI Designer", picture: TeamImage6 },
        { name: "Kenta Yasuke", position: "Web Developer", picture: TeamImage7 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ x: `-${currentIndex * 25}%` });
    }, [currentIndex, controls]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % team.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
    };

    return (
        <div className="py-10 flex flex-col justify-center items-center w-full relative overflow-hidden">
            <h1 className="ext-display-xs-bold md:text-display-sm-bold lg:text-display-lg-bold w-full text-center">Our Friendly Team</h1>
            <p className="text-body-xs-regular md:text-body-sm-regular lg:text-body-md-regular w-full text-center">
                Extend social listening, analysis, content marketing, and engagement.
            </p>

            <div className="flex flex-row flex-nowrap gap-6 z-10 mt-20 overflow-hidden" ref={containerRef}>
                <motion.div
                    className="flex gap-6 cursor-grab"
                    drag="x"
                    dragConstraints={containerRef}
                    animate={controls}
                    transition={{ type: "spring", stiffness: 10 }}
                    style={{ display: "flex", width: `${team.length * 100}%` }}
                >
                    {[...team, ...team].map((item, index) => (
                        <div key={index} className="shrink-0">
                            <Card isFooterBlurred className="border-none shrink-0" radius="lg">
                                <Image
                                    alt={item.name}
                                    className={`object-cover duration-300 ${index === currentIndex + 2 ? "grayscale-0" : "grayscale"}`}
                                    height={352}
                                    src={item.picture}
                                    width={383}
                                />
                                <CardFooter className="flex-col gap-2 justify-start items-start before:bg-white/10 border-white/20 border-1 overflow-hidden p-4 absolute before:rounded-sm rounded-small bottom-4 w-[calc(100%_-_32px)] shadow-small ml-4 z-10">
                                    <p className="text-display-xs-bold text-neutral-50">{item.name}</p>
                                    <p className="text-display-xs-regular text-neutral-300">{item.position}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-between items-center w-full mt-6 containerls">
                <div className="flex items-center gap-2">
                    <span className="text-body-xl-bold text-neutral-300">{(currentIndex % team.length) + 1}</span>
                    <hr className="bg-neutral-300 w-10" />
                    <span className="text-body-xl-bold text-neutral-300">{team.length}</span>
                </div>

                <div className="flex gap-4">
                    <Button isIconOnly className="bg-transparent" onClick={prevSlide}>
                        <Icons.ArrowLeft />
                    </Button>
                    <Button isIconOnly className="bg-transparent" onClick={nextSlide}>
                        <Icons.ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
