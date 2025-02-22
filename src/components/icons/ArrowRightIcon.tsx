interface props {
    width?: number;
    height?: number;
}

const ArrowRightIcon = ({ width = 24, height = 24 }: props) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13.5 4.88464L21 12.3846M21 12.3846L13.5 19.8846M21 12.3846H3"
            stroke="#D1D5DB"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default ArrowRightIcon;
