import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-between px-3 py-4 w-full md:w-[80%] mx-auto text-[#3d3d3d]">
                <div className="flex items-center">
                    <h1 className="text-xl font-[900] md:text-[28px] select-none">Nano.Link</h1>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <Link
                        href="/about"
                        className="text-xs md:text-sm font-semibold hover:text-gray-600 transition-colors">
                        About Us
                    </Link>
                    <Link
                        href="https://github.com/Krish-Makadiya/Nano.Link"
                        target="_blank"
                        className="px-3 md:px-5 py-2 md:py-3 text-xs md:text-sm font-bold bg-[#ff7b9b] text-black rounded-md flex items-center gap-2 border-[2.5px] border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <span>GitHub</span>
                        <svg
                            className="w-6 h-6 text-yellow-400 fill-current stroke-black stroke-2"
                            viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.416 8.265L12 19.127l-7.417 3.89 1.416-8.265-6.001-5.85 8.332-1.21z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
