function Whyus() {
    return (
        <div className="mt-20 md:mt-28 max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Features Image" />
                </div>
                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold playfair-display-500 text-6xl lg:text-7xl text-gray-800">
                                Have the question, <span className="bg-[#7AE36A] px-3 leading-relaxed lg:!leading-snug">why us</span>?
                            </h2>
                            <p className="text-gray-500">
                                Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                            </p>
                        </div>
                        <ul className="space-y-2 sm:space-y-4">
                            <li className="flex gap-x-3">
                                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <div className="grow">
                                    <span className="text-sm sm:text-base text-gray-500">
                                        <span className="font-bold">Easy & fast</span> learning curves
                                    </span>
                                </div>
                            </li>

                            <li className="flex gap-x-3">
                                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <div className="grow">
                                    <span className="text-sm sm:text-base text-gray-500">
                                        Real <span className="font-bold">demographics</span>
                                    </span>
                                </div>
                            </li>

                            <li className="flex gap-x-3">
                                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <div className="grow">
                                    <span className="text-sm sm:text-base text-gray-500">
                                        User Experience Program
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus