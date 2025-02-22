import { Button } from "@heroui/react";
import { Icons } from "./icons/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ReviewSection() {
    const reviews = [
        {
            name: 'Andika Pratama',
            title: 'Singer',
            review: '“Very different from conventional agency, this one is easier, easier to learn and easy to remember.”',
            rating: 5
        },
        {
            name: 'Dewi Lestari',
            title: 'Writer',
            review: '“I love how intuitive and user-friendly this platform is. It really helps me organize my work efficiently.”',
            rating: 4
        },
        {
            name: 'Rizky Febian',
            title: 'Musician',
            review: '“A fresh approach to digital solutions. This service provides everything I need in one place.”',
            rating: 5
        },
        {
            name: 'Siti Badriah',
            title: 'Actress',
            review: '“Professional and reliable service. I will definitely recommend this to my colleagues.”',
            rating: 4
        },
        {
            name: 'Taufik Hidayat',
            title: 'Athlete',
            review: '“It exceeded my expectations! A well-thought-out service that delivers real results.”',
            rating: 5
        },
        {
            name: 'Agnes Monica',
            title: 'Singer',
            review: '“The experience was seamless, and I got exactly what I was looking for. Highly recommended!”',
            rating: 5
        },
        {
            name: 'Nicholas Saputra',
            title: 'Actor',
            review: '“An innovative service that changes the game. Super satisfied with the outcome.”',
            rating: 4
        },
        {
            name: 'Dian Sastro',
            title: 'Actress',
            review: '“Customer support was top-notch, and the overall experience was fantastic.”',
            rating: 5
        },
        {
            name: 'Reza Rahadian',
            title: 'Actor',
            review: '“I appreciate the dedication and effort put into making this a premium service.”',
            rating: 4
        },
        {
            name: 'Najwa Shihab',
            title: 'Journalist',
            review: '“A game-changer in the industry. I love how convenient and effective this is.”',
            rating: 5
        }
    ];

    const glowBg = [
        {
            rotate: "",
            location: "-top-20 -left-32"
        },
    ];

    const [index, setIndex] = useState(0);

    const nextReview = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="containerls py-5 md:py-10 lg:py-20 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 xl:gap-32">
                <div className="col-span-1 flex flex-col gap-5 w-full md:w-2/3">
                    <h1 className="text-display-xs-bold md:text-display-sm-bold lg:text-display-lg-bold w-full">Our customers love what we do</h1>
                    <p className="text-body-xs-regular md:text-body-sm-regular lg:text-body-md-regular w-full">
                        Let's see what those who have used our services have to say and experience the benefits first hand
                    </p>
                    <div className="mt-3">
                        <Button
                            radius='full'
                            size="lg"
                            className="bg-gradient-to-b from-[#285F76] via-[#2F90AB] to-[#42A8C2] border border-primary-300 text-body-md-semibold text-neutral-50 mt-4"
                        >
                            See All
                        </Button>
                    </div>
                </div>

                <div className="col-span-1 flex md:justify-end flex-col relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 rounded-md bg-white/[0.02] border border-neutral-600 flex flex-col gap-8 md:gap-12"
                        >
                            <h6 className="text-body-xl-regular text-neutral-100">{reviews[index].review}</h6>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <p className="text-body-xl-bold text-neutral-50">{reviews[index].name}</p>
                                    <span className="text-body-sm-regular text-neutral-50">{reviews[index].title}</span>
                                </div>
                                <div className="flex flex-row gap-2">
                                    {Array.from({ length: reviews[index].rating }).map((_, i) => (
                                        <Icons.Star key={i} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between items-center w-full mt-6">
                        <div className="flex items-center gap-2">
                            <span className="text-body-xl-bold text-neutral-300">{index + 1}</span>
                            <hr className="bg-neutral-300 w-10" />
                            <span className="text-body-xl-bold text-neutral-300">{reviews.length}</span>
                        </div>
                        <div className="flex gap-4">
                            <Button isIconOnly className="bg-transparent" onClick={prevReview}>
                                <Icons.ArrowLeft />
                            </Button>
                            <Button isIconOnly className="bg-transparent" onClick={nextReview}>
                                <Icons.ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {glowBg.map((item, index) => (
                <div key={index} className={`absolute h-[300px] w-[300px] bg-gradient-to-r from-[#264453] via-[#285F76] via-[#2F90AB] via-[#42A8C2] to-[#B7E1EA] blur-[200px] z-0 ${item.rotate} ${item.location}`}></div>
            ))}
        </div>
    );
}
