import React, { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen])

    return ( <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10 0.8)] backdrop-blur-lg border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="text-2xl font-mono text-blue-300 font-bold">Portfolio</a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#home" className="text-gray-300 hover:text-blue-300 transitions-colors"> 
                        Home 
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-blue-300 transitions-colors"> 
                        About 
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-blue-300 transitions-colors"> 
                        Projects 
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-blue-300 transitions-colors"> 
                        Contact 
                    </a>
                </div>

            </div>
        </div>
    </nav>
    )
}  