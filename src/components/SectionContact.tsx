import { Button } from "@heroui/react";
import { Icons } from "./icons/Icon";
import ElipsPattern from "../layouts/logo/ElipsPattern";

export default function SectionContact() {
    const glowBg = [
        {
            rotate: "rotate-180",
            location: "bottom-0 -left-56"
        },
    ];

    return (
        <>
            <div className="py-5 md:py-10 lg:py-20 containerl flex flex-col justify-center items-center w-full relative">
                <div className="flex flex-col gap-5 items-center w-full sm:w-3/3 lg:w-2/3 xl:w-1/3 z-10">

                    <h1 className="text-display-sm-bold md:text-display-lg-bold lg:text-display-2xl-bold w-full text-center ">
                        Have a Project? Let’s Talk
                    </h1>

                    <p className="text-body-md-regular md:text-body-lg-regular lg:text-body-xl-regular w-full text-center md:w-2/3">
                        If you are confused or in doubt, you can free contact us, we will be happy to help.
                    </p>

                    <div className="mt-5 flex gap-5 md:gap-10">
                        <Button
                            radius='full'
                            size="lg"
                            startContent={<Icons.Phone width={20} height={20} />}
                            className="bg-gradient-to-b from-[#285F76] via-[#2F90AB] to-[#42A8C2] border border-primary-300 text-body-md-semibold text-neutral-50 mt-4"
                        >
                            Call Us
                        </Button>
                        <Button
                            radius='full'
                            size="lg"
                            startContent={<Icons.Envelope width={20} height={20} />}
                            className="bg-neutral-50/10 border border-neutral-600 text-body-md-semibold text-neutral-50 mt-4"
                        >
                            Email Us
                        </Button>
                    </div>

                </div>

                {glowBg.map((item, index) => (
                    <div key={index} className={`absolute h-[300px] w-[300px] bg-gradient-to-r from-[#264453] via-[#285F76] via-[#2F90AB] via-[#42A8C2] to-[#B7E1EA] blur-[200px] z-0 ${item.rotate} ${item.location}`}></div>
                ))}

                <div className={`absolute w-full h-full flex justify-center items-center z-0 top-36`}>
                    <div className="animate-comet">
                        <ElipsPattern
                            width={720}
                            height={720}
                        />
                    </div>
                </div>
            </div>



            <div className="pt-24 flex flex-col justify-center items-center w-full relative overflow-hidden">
                <div className="absolute w-full h-full flex justify-center items-center z-10 top-0 bg-gradient-to-t from-[#121212] to-white/0"></div>
                <div className={`absolute w-full h-full flex justify-center items-center z-0 top-[550px]`}>
                    <div className="w-[1138px] h-[1138px] rounded-full bg-gradient-to-t from-[#42A8C2] to-[#1F505C]"></div>
                </div>
            </div>
        </>
    )
}
