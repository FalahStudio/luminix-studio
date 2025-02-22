interface props {
    width?: number;
    height?: number;
}

const ArrowLeftIcon = ({ width = 24, height = 24 }: props) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.5 19.8846L3 12.3846M3 12.3846L10.5 4.88464M3 12.3846H21"
            stroke="#D1D5DB"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default ArrowLeftIcon;
