interface props {
    width?: number;
    height?: number;
}

const FacebookIcon = ({ width = 24, height = 24 }: props) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17.2176 13.3281L17.8395 9.23297H13.9491V6.57666C13.9491 5.45603 14.4916 4.36307 16.234 4.36307H18.0039V0.876659C18.0039 0.876659 16.3984 0.59996 14.8642 0.59996C11.6587 0.59996 9.56555 2.56176 9.56555 6.1118V9.23297H6.00391V13.3281H9.56555V23.2284C10.2806 23.3419 11.0121 23.4 11.7573 23.4C12.5025 23.4 13.234 23.3419 13.9491 23.2284V13.3281H17.2176Z"
            fill="white"
        />
    </svg>
);
export default FacebookIcon;
