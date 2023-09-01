import React from "react";
import diputada from "../resources/diputada.jpg";
const Hero = () =>{
    return(
        <section id="Home">
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src={diputada} alt=""/>
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Diputada
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Alejandra
                            <br className="hidden md:block" />
                            Hidalgo{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                          Zavala
                        </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            ¡Bienvenido a bordo!
                            ¡Estamos haciendo algunos trabajos emocionantes en la Ciudad de Champotón, y esperamos que nuestra tranformación,
                            sea invaluable y estamos ofreciendo los siguientes servicios para nuestra comunidad!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#Servicios" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Servicios</a>
                            <a href="#Servicios" className="text-sm font-semibold leading-6 text-gray-900">
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 export default Hero;