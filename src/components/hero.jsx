import Navbar from "./navbar";
import * as motion from 'motion/react-client';

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-[#0c312d] to-[#035C2C]">
            <Navbar />
            <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.75}} className="relative overflow-hidden">
                <div className="my-10 my:mt-0 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 md:py-10">
                    <div className="max-w-4xl text-center mx-auto">
                        <h1 className="block playfair-display-500 text-5xl font-bold text-white sm:text-6xl md:text-7xl">Learning the secrets of successful <span className="px-4 py-2 border-4 border-[#7AE36A] rounded-full">trading</span></h1>
                        <p className="mt-7 text-lg text-white">Build your skills here. Use them anywhere.</p>
                    </div>

                    <div className="mt-10 relative max-w-5xl mx-auto">
                        <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                        <div className="absolute inset-0 size-full">
                            <div className="flex flex-col justify-center items-center size-full">
                                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                    Play the overview
                                </a>
                            </div>
                        </div>

                        {/* <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
                            <div className="bg-white size-48 rounded-lg"></div>
                        </div>

                        <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                            <div className="bg-white size-48 rounded-full"></div>
                        </div> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}