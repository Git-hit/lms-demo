// import SimpleLogo from "./simpleLogo";

// function Navbar() {
//     return (
//         <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
//             <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 lg:px-6 mx-auto">
//                 <div className="md:col-span-3">
//                     <a className="flex-none rounded-xl text-base lg:text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/creative-agency/index.html" aria-label="Preline">
//                         <SimpleLogo />
//                     </a>
//                 </div>
//                 <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
//                     <button type="button" className="hidden lg:block py-3 px-8 md:px-5 lg:py-3 lg:px-12 rounded-md text-sm font-medium transition-all duration-150 border border-[#7AE36A] text-white hover:text-black hover:bg-[#7AE36A] focus:text-black focus:outline-none focus:bg-[#7AE36A] disabled:opacity-50 disabled:pointer-events-none">
//                         Log In
//                     </button>
//                     <button type="button" className="hidden lg:block py-3 px-8 md:px-5 lg:py-3 lg:px-12 rounded-md text-sm font-medium transition-all duration-150 border border-transparent bg-[#7AE36A] text-black hover:bg-green-600 focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none">
//                         Get Satrted
//                     </button>

//                     <div className="lg:hidden">
//                         <button type="button" className="hs-collapse-toggle size-10 flex justify-center items-center text-sm font-semibold rounded-lg text-white hover:border hover:border-gray-100 focus:outline-none focus:border focus:border-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-hcail-collapse" aria-expanded="false" aria-controls="hs-navbar-hcail" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-hcail">
//                             <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
//                             <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
//                         </button>
//                     </div>
//                 </div>
//                 <div id="hs-navbar-hcail" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6" aria-labelledby="hs-navbar-hcail-collapse">
//                     <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
//                         <div>
//                             <a className="inline-block text-white after:transition-all after:duration-150 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#7AE36A]" href="#">Home</a>
//                         </div>
//                         <div>
//                             <a className="inline-block text-white after:transition-all after:duration-150 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#7AE36A]" href="#">Blog</a>
//                         </div>
//                         <div>
//                             <a className="inline-block text-white after:transition-all after:duration-150 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#7AE36A]" href="#">Courses</a>
//                         </div>
//                         <div>
//                             <a className="inline-block text-white after:transition-all after:duration-150 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#7AE36A]" href="#">Testimonials</a>
//                         </div>
//                         <div>
//                             <a className="inline-block text-white after:transition-all after:duration-150 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#7AE36A]" href="#">About Us</a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }
// export default Navbar;

import { useState } from 'react'
import SimpleLogo from './simpleLogo'

export default function Navbar() {
    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "Blog", path: "javascript:void(0)" },
        { title: "Courses", path: "javascript:void(0)" },
        { title: "Testimonials", path: "javascript:void(0)" },
        { title: "About Us", path: "javascript:void(0)" }
    ]

    return (
        <nav className="w-full border-b md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                    <a href="javascript:void(0)">
                        <SimpleLogo />
                    </a>
                    <div className="lg:hidden">
                        <button className="text-white outline-none p-2"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white after:transition-all after:duration-150 relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#7AE36A]">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <li className='lg:hidden'>
                            <a href="javascript:void(0)" className="py-3 px-12 text-white border border-[#7AE36A] hover:text-black transition-all duration-150 hover:bg-[#7AE36A] rounded">
                                Log In
                            </a>
                        </li>
                        <li className='lg:hidden'>
                            <a href="javascript:void(0)" className="py-3 px-12 text-black bg-[#7AE36A] hover:bg-green-500 transition-all duration-150 rounded-md">
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:inline-flex gap-x-4">
                    <a href="javascript:void(0)" className="py-3 px-12 text-white border border-[#7AE36A] hover:text-black transition-all duration-150 hover:bg-[#7AE36A] rounded-md">
                        Log In
                    </a>
                    <a href="javascript:void(0)" className="py-3 px-12 text-black bg-[#7AE36A] hover:bg-green-500 transition-all duration-150 rounded-md">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}