interface props {
    width?: number;
    height?: number;
}

const YoutubeIcon = ({ width = 24, height = 24 }: props) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_2110_1907)">
            <path
                d="M24.3104 6.22906C24.0336 5.20106 23.223 4.39052 22.195 4.11375C20.317 3.59975 12.8046 3.59975 12.8046 3.59975C12.8046 3.59975 5.29231 3.59975 3.41423 4.09398C2.406 4.37075 1.57569 5.20106 1.29892 6.22906C0.804688 8.10714 0.804688 12.0017 0.804688 12.0017C0.804688 12.0017 0.804688 15.916 1.29892 17.7743C1.57569 18.8023 2.38623 19.6129 3.41423 19.8896C5.31208 20.4036 12.8046 20.4036 12.8046 20.4036C12.8046 20.4036 20.317 20.4036 22.195 19.9094C23.223 19.6326 24.0336 18.8221 24.3104 17.7941C24.8046 15.916 24.8046 12.0215 24.8046 12.0215C24.8046 12.0215 24.8244 8.10714 24.3104 6.22906Z"
                fill="white"
            />
            <path
                d="M10.4141 15.5992L16.6612 12.0012L10.4141 8.40318V15.5992Z"
                fill="#285F76"
            />
        </g>
        <defs>
            <clipPath id="clip0_2110_1907">
                <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.804688)"
                />
            </clipPath>
        </defs>
    </svg>
);
export default YoutubeIcon;
