function Contacts() {
    return (
        <section className="mx-4 md:mx-8 py-8">
            <div className="max-w-7xl mx-auto bg-[#70A73C] rounded-3xl px-6 py-8 md:px-10 md:py-10">

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center">

                    {/* Left */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
                            Where you can find me?
                        </h2>

                        <p className="mt-4 text-base sm:text-lg italic text-white">
                            You can find me on the platforms below:
                        </p>
                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-[40%] bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-6">

                        <a
                            href="mailto:pranata.dyo@gmail.com"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition">
                                <span className="text-green-700 group-hover:text-white">
                                    ✉
                                </span>
                            </div>

                            <p className="text-sm sm:text-base break-all text-gray-800 font-medium">
                                pranata.dyo@gmail.com
                            </p>
                        </a>

                        <a
                            href="https://linkedin.com/in/pranataekapramudya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition">
                                <span className="text-green-700 group-hover:text-white">
                                    in
                                </span>
                            </div>

                            <p className="text-sm sm:text-base break-all text-gray-800 font-medium">
                                linkedin.com/in/pranataekapramudya
                            </p>
                        </a>

                        <a
                            href="https://github.com/pramudyaeka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition">
                                <span className="text-green-700 group-hover:text-white">
                                    gh
                                </span>
                            </div>

                            <p className="text-sm sm:text-base break-all text-gray-800 font-medium">
                                github.com/pramudyaeka
                            </p>
                        </a>

                        <a
                            href="https://instagram.com/pramudyaeka_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition">
                                <span className="text-green-700 group-hover:text-white">
                                    ig
                                </span>
                            </div>

                            <p className="text-sm sm:text-base break-all text-gray-800 font-medium">
                                instagram.com/pramudyaeka_
                            </p>
                        </a>

                    </div>

                </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
                © 2026 - Pramudya
            </p>
        </section>
    );
}

export default Contacts;