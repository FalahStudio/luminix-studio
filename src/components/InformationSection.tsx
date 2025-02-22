export default function InformationSection() {
    const glowBg = [
        {
            rotate: "-rotate-45",
            location: "bottom-0 -right-56"
        },
        {
            rotate: "rotate-180",
            location: "bottom-0 -left-56"
        },
    ];

    const information = [
        {
            title: '200',
            prefix: '+',
            desc: 'Satisfied Clients',
        },
        {
            title: '13',
            prefix: '+',
            desc: 'Years Experience',
        },
        {
            title: '20',
            prefix: '',
            desc: 'Professional Designer',
        },
        {
            title: '10',
            prefix: 'K',
            desc: 'Digital Product',
        },
        {
            title: '8',
            prefix: '',
            desc: 'Branch Office',
        }
    ];
    return (
        <div className="py-5 md:py-10 lg:py-20 containerl flex flex-col justify-center items-center w-full relative overflow-hidden">
            <div className="flex flex-row flex-wrap gap-12 justify-center w-full sm:w-3/3 lg:w-2/3 xl:w-1/3">
                {information.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-[172px]"
                    >
                        <h6 className="text-display-sm-bold md:text-display-lg-bold lg:text-display-xl-bold">{item.title}{item.prefix}</h6>
                        <span className="text-body-sm-medium md:text-body-md-medium lg:text-body-lg-medium">{item.desc}</span>
                    </div>
                ))}
            </div>

            {glowBg.map((item, index) => (
                <div key={index} className={`absolute h-[300px] w-[300px] bg-gradient-to-r from-[#264453] via-[#285F76] via-[#2F90AB] via-[#42A8C2] to-[#B7E1EA] blur-[200px] z-0 ${item.rotate} ${item.location}`}></div>
            ))}
        </div>
    )
}
