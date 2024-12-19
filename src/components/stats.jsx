import * as motion from 'motion/react-client';

export default function Stats(){
    const stats = [
        {
            data: "10+",
            title: "Courses"
        },
        {
            data: "50K+",
            title: "Traders"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Followers"
        },
    ]

    return (
        <motion.section initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.75}} className="mt-20 md:mt-28 py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 lg:flex">
                <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                    <h3 className="text-gray-800 playfair-display-500 text-5xl font-semibold sm:text-7xl">
                        A mentor is always needed but a <span className="after:absolute after:w-full after:h-1 after:bg-[#7AE36A] after:bottom-0 after:left-0 relative">great</span> mentor is a must!
                    </h3>
                    <p className="mt-3 max-w-xl mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                    <button type="button" className="py-3 px-12 mt-10 inline-flex items-center gap-x-2 text-sm font-medium transition-all duration-150 rounded-lg border-2 border-[#7AE36A] text-black hover:bg-[#7AE36A] focus:text-black focus:outline-none focus:bg-[#7AE36A] disabled:opacity-50 disabled:pointer-events-none">
                        View Courses
                    </button>
                </div>
                <div className="mt-12 lg:mt-0 relative w-full">
                    <img src="/image1.jpg" alt="Trading" className="w-full rounded-lg" />
                    <ul className="lg:absolute lg:bottom-0 lg:right-0 lg:translate-x-1/3 lg:translate-y-1/3 -translate-y-1/3 bg-blue-100 bg-opacity-50 rounded-lg backdrop-blur-md flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row grid grid-cols-2 lg:grid lg:grid-cols-2">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center text-black w-full px-4 py-6 sm:w-auto lg:py-4">
                                    <h4 className="text-4xl font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}