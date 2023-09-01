import React from "react";
import Socials from "../Social/Socials";
import Logo from "../resources/logo.png";

const Header = () => {
    return(
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex lg:flex-1 items-center">
                        <img src={Logo} className="h-20 mr-4"/>
                        <a href="#Home" className="text-black rounded-md px-3 py-2 text-sm font-medium">
                            Alejandra Hidalgo Zavala
                        </a>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#Home" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                <a href="#Iniciativa" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Iniciativas</a>
                                <a href="#Team" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Equipo</a>
                                <a href="#Servicios" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Servicios</a>
                                <a href="#Contacto" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <Socials/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;