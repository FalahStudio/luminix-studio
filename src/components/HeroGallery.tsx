import { Image } from "@heroui/react";
import HeroGallery1 from "../assets/images/HeroGallery1.png";
import HeroGallery2 from "../assets/images/HeroGallery2.png";
import HeroGallery3 from "../assets/images/HeroGallery3.png";
import HeroGallery4 from "../assets/images/HeroGallery4.png";
import HeroGallery5 from "../assets/images/HeroGallery5.png";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

export default function HeroGallery() {
    const images = [HeroGallery1, HeroGallery2, HeroGallery3, HeroGallery4, HeroGallery5];
    const duplicatedImages = [...images, ...images];

    const FAST_DURATION = 10;
    const SLOW_DURATION = 60;

    const [duration, setDuration] = useState(FAST_DURATION);

    const [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMushFinish] = useState(false);

    useEffect(() => {
        let controls;

        const finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMushFinish(false);
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                onRepeat: () => {
                    xTranslation.set(0);
                }
            });
        }

        return controls.stop;
    }, [xTranslation, width, duration, mustFinish]);

    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="snap-x flex flex-row gap-4 bottom-0 w-full h-full mb-8 lg:mb-11"
                ref={ref}
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMushFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMushFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {duplicatedImages.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-white/10 to-white/20 border border-neutral-50 p-2 rounded-lg flex-none w-auto cursor-pointer snap-start"
                    >
                        <Image
                            src={item}
                            alt="Image"
                            radius="sm"
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/50 to-black/0 w-full h-full"></div>
        </div>
    );
}
