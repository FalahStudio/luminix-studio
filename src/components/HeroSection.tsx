import ElipsPattern from "../layouts/logo/ElipsPattern";

export default function HeroSection() {
    const glowBg = [
        {
            rotate: "-rotate-45",
            location: "-top-10 -right-20"
        },
        {
            rotate: "rotate-180",
            location: "bottom-0 -left-40"
        },
    ];

    const circleBg = [
        {
            rotate: "",
            width: 480,
            height: 480
        },
        {
            rotate: "-rotate-[140deg]",
            width: 720,
            height: 720
        },
    ]

    return (
        <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] lg:h-[calc(100vh-112px)]">
            {glowBg.map((item, index) => (
                <div key={index} className={`absolute h-[300px] w-[300px] bg-gradient-to-r from-[#264453] via-[#285F76] via-[#2F90AB] via-[#42A8C2] to-[#B7E1EA] blur-[200px] z-0 ${item.rotate} ${item.location}`}></div>
            ))}

            {circleBg.map((item, index) => (
                <div key={index} className={`absolute inset-0 w-full h-full flex justify-center items-center overflow-hidden z-0 ${item.rotate}`}>
                    <div className="animate-comet z-0">
                        <ElipsPattern
                            width={item.width}
                            height={item.height}
                        />
                    </div>
                </div>
            ))}

            <div className="w-full h-full flex justify-center items-center z-10">
                <h1 className="text-display-sm-bold md:text-display-lg-bold lg:text-display-2xl-bold w-2/3 md:w-1/2 text-center">
                    Make The World <span className="bg-gradient-to-r from-[#328FA9] to-[#589baa] bg-clip-text text-transparent">Smile</span> With Beautiful Design
                </h1>
            </div>
        </div>
    )
}
