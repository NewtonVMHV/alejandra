import React from "react";
import Profile from "../resources/fondo.png"
import {FaCaretRight} from "react-icons/fa";
const posts = [
    {
        id:1,
        title:'Esclavitud Infantil',
        description:'Que sea obligación de las autoridades atender y sancionar casos de esclavitud infantil.',
        icon:FaCaretRight
    },
    {
        id:2,
        title:'Discriminación de personas de VIH/SIDA',
        description:'Considerar como discriminación el negar derechos a persona con VIH/Sida.',
        icon:FaCaretRight
    },
    {
        id:3,
        title:'Expedición de la nueva ley',
        description:'Expedir la nueva Ley de Protección a Ecosistema Manglar del Estado.',
        icon:FaCaretRight
    },
    {
        id:4,
        title:'Dialecto Maya',
        description:'Introducir el dialecto maya a los diferentes libros de texto de nuestro estado.',
        icon:FaCaretRight
    },
    {
        id:5,
        title:'Prioridad de atención médica',
        description:'Dar prioridad en atención medica a mujeres embarazadas con el objetivo de prevenir enfermedades de transmisión sexual.',
        icon:FaCaretRight
    },
    {
        id:6,
        title:'Violencia obstétrica',
        description:'Considerar como delito la violencia obstétrica contra las mujeres campechanas.',
        icon:FaCaretRight
    },
];
const Iniciativa = () => {
    return(
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" id="Iniciativa">
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Presentamos</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestras Iniciativas</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Te compartimos algunas de las iniciativas presentadas más importantes:
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {posts.map((post) => (
                                        <div key={post.id} className="relative pl-9">
                                            <post.icon/>
                                            <dt className="inline font-semibold text-gray-900">
                                                {post.title}:
                                            </dt>
                                            <dd className="inline">{post.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img src={Profile} className="rounded-xl"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Iniciativa;