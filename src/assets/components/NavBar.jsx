import { useState } from "react"
function NavBar(){

    const [open, setOpen] = useState(false);


    return(
        <>
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">  
                <div className="max-w-7xl mx-auto px-6 py-4 md:flex items-center justify-center ">
                    <div className="hidden md:flex items-center justify-center gap-8">
                        <a className="hover:text-gray-300" href="#design">Design</a>
                        <a className="hover:text-gray-300" href="#camera">Câmera</a>
                        <a className="hover:text-gray-300" href="#performace">Performance</a>
                        <a className="hover:text-gray-300" href="#cores">Cores</a>
                        <button className="bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-full cursor-pointer ">Comprar</button>
                    </div>
                    <button onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl">
                            {open ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

            <div
                className={` z-10 md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <div className="flex flex-col items-center justify-center gap-8 py-4">
                    <a className="hover:text-gray-300" href="#design" onClick={() => setOpen(false)}>Design</a>
                    <a className="hover:text-gray-300" href="#camera" onClick={() => setOpen(false)}>Câmera</a>
                    <a className="hover:text-gray-300" href="#performace" onClick={() => setOpen(false)}>Performance</a>
                    <a className="hover:text-gray-300" href="#cores" onClick={() => setOpen(false)}>Cores</a>
                    <button className="bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-full cursor-pointer ">Comprar</button>
                </div>

            </div>
        </>
    )
}
export default NavBar