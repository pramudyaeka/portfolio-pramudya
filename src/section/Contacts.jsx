import { Mail } from "lucide-react";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

function Contacts() {
    const contacts = [
        {
            title: "Email",
            value: "pranata.dyo@gmail.com",
            href: "mailto:pranata.dyo@gmail.com",
            icon: <Mail size={20} />,
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/pranataekapramudya",
            href: "https://linkedin.com/in/pranataekapramudya",
            icon: <FaLinkedin size={20} />,
        },
        {
            title: "GitHub",
            value: "github.com/pramudyaeka",
            href: "https://github.com/pramudyaeka",
            icon: <FaGithub size={20} />,
        },
        {
            title: "Instagram",
            value: "instagram.com/pramudyaeka_",
            href: "https://instagram.com/pramudyaeka_",
            icon: <FaInstagram size={20} />,
        },
    ];

    return (
        <section className="mx-4 md:mx-8 py-12" id="contact">

            <div className="max-w-7xl mx-auto rounded-4xl bg-gradient-to-br from-[#70A73C] via-[#6AA33A] to-[#4E842A] p-6 md:p-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left */}
                    <div className="w-full lg:w-[45%]">

                        <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-5">
                            CONTACT
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Let's Connect.
                        </h2>

                        <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-lg">
                            Interested in collaborating, discussing a project,
                            or just saying hello? Feel free to reach out through
                            any of the platforms below.
                        </p>

                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-[42%]">

                        <div className="bg-white rounded-3xl shadow-2xl p-5 md:p-7 transition duration-300 hover:-translate-y-1">

                            <div className="space-y-4">

                                {contacts.map((contact) => (
                                    <a
                                        key={contact.title}
                                        href={contact.href}
                                        target={
                                            contact.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all duration-300 hover:bg-green-50 hover:border-green-100 hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-4">

                                            <div className="w-12 h-12 rounded-full bg-green-100 text-[#70A73C] flex items-center justify-center transition-all duration-300 group-hover:bg-[#70A73C] group-hover:text-white">
                                                {contact.icon}
                                            </div>

                                            <div>

                                                <p className="font-semibold text-gray-900">
                                                    {contact.title}
                                                </p>

                                                <p className="text-sm text-gray-500 break-all">
                                                    {contact.value}
                                                </p>

                                            </div>

                                        </div>

                                        <FaArrowUpRightFromSquare
                                            className="text-gray-400 transition-all duration-300 group-hover:text-[#70A73C] group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Footer */}
            <div className="mt-10 text-center">

                <p className="text-gray-500 text-sm">
                    © 2026 Pranata Eka Pramudya. All rights reserved.
                </p>

            </div>

        </section>
    );
}

export default Contacts;