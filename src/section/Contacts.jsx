function Contacts() {
    return (
        <section className="mx-8 py-8">
            <div className="flex flex-row max-w-7xl h-96 mx-auto px-6 py-6 justify-between items-start rounded-4xl bg-[#70A73C]">

                {/* Headline - rata atas, kiri */}
                <h2 className="pl-12 pt-10 max-w-md font-medium text-5xl text-white font-helvetica leading-tight">
                    Where you can find me?
                </h2>

                {/* Panel Kontak - putih, mengisi tinggi penuh */}
                <div className="w-[40%] h-full bg-white rounded-2xl flex flex-col justify-center gap-12 px-10">

                    <a href="mailto:pramudya@email.com" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                            <span className="text-green-700 group-hover:text-white transition-colors">✉</span>
                        </div>
                        <p className="text-gray-800 font-medium">pranata.dyo@gmail.com</p>
                    </a>

                    <a href="https://linkedin.com/in/pramudya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                            <span className="text-green-700 group-hover:text-white transition-colors">in</span>
                        </div>
                        <p className="text-gray-800 font-medium">linkedin.com/in/pranataekapramudya</p>
                    </a>

                    <a href="https://github.com/pramudya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                            <span className="text-green-700 group-hover:text-white transition-colors">gh</span>
                        </div>
                        <p className="text-gray-800 font-medium">github.com/pramudyaeka</p>
                    </a>

                </div>
            </div>

            {/* Footer copyright */}
            <p className="text-center text-sm text-gray-500 mt-8">2026 - Pramudya</p>
        </section>
    )
}
export default Contacts