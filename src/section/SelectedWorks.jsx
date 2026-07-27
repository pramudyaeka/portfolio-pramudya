function SelectedWorks() {
    return (
        <section className="bg-white py-16 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl font-helvetica font-medium text-center mb-8 md:mb-12">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8">

                    {/* Project Card 1 */}
                    <div>
                        <div className="border-2 border-[#CBF78E] rounded-2xl overflow-hidden">
                            <img
                                src="/simba-it.png"
                                alt="Simba-IT"
                                className="w-full h-56 sm:h-64 md:h-72 object-cover"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2 sm:gap-0">
                            <h3 className="text-xl sm:text-2xl font-medium">Simba-IT</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">IT Inventory</span>
                                <span className="bg-gray-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">Website</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div>
                        <div className="border-2 border-[#CBF78E] rounded-2xl overflow-hidden">
                            <img
                                src="/project-2.png"
                                alt="Project Title"
                                className="w-full h-56 sm:h-64 md:h-72 object-cover bg-gray-200"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2 sm:gap-0">
                            <h3 className="text-xl sm:text-2xl font-medium">Title</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">Attendance</span>
                                <span className="bg-gray-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">UI/UX Design</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SelectedWorks