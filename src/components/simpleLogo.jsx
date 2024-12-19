export default function SimpleLogo() {
    return (
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
                fill="none"
                stroke="white"
                strokeWidth="2"
            >
                <circle cx="50" cy="50" r="30" stroke="white" />
                <path
                    d="M20,50 Q50,20 80,50 Q50,80 20,50 Z"
                    stroke="white"
                    fill="none"
                />
            </svg>
            <h1 className="text-white playfair-display-500 text-xl md:text-2xl lg:text-4xl">LMS</h1>
        </div>
    )
}