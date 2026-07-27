function SelectedWorks() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-helvetica text-center mb-12">
                    Selected Works
                </h2>
                <div className="grid grid-cols-2 gap-8">
                    {/* Project Card 1 */}
                    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x200"
                            alt="Project 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Simba-IT
                            </h3>
                            <p className="text-gray-700">
                                Brief description of the project goes here. It
                                should be concise and informative.
                            </p>
                        </div>
                    </div>
                    {/* Project Card 2 */}
                    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x200"
                            alt="Project 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Project Title 1
                            </h3>
                            <p className="text-gray-700">
                                Brief description of the project goes here. It
                                should be concise and informative.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectedWorks
