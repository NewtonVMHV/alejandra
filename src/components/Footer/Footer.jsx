import React from "react";
import Socials from "../Social/Socials";
import Logo from "../resources/logo.png";
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src={Logo} className="h-20 mr-4"/>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alejandra Hidalgo Zavala</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Servicios</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#Servicios" className="hover:underline">Servicios de trámites</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#Servicios" className="hover:underline">Servicios gratuitos</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#Servicios" className="hover:underline">Servicios a bajo costo</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Redes sociales</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/AlejandraHidalgoZavala" className="hover:underline" target="_blank">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/alejandrahidalgozavala/" className="hover:underline" target="_blank">Instagran</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.tiktok.com/@alejandrahidalgozavala" className="hover:underline" target="_blank">TikTok</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Trámites</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#Servicios" className="hover:underline">Gestiones de Solicitudes</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#Servicios" className="hover:underline">Gestiones Municipales</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#Servicios" className="hover:underline">Asesorías Jurídicas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Alejandra Hidalgo Zavala</a>.</span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Socials/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;