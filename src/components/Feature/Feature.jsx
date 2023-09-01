import React from "react";
import { FaNewspaper} from "react-icons/fa";
import {MdCleaningServices, MdDesignServices} from "react-icons/md"

const features = [
    {
        name: 'Servicios de trámites',
        description:
            '* ORIENTACIÓN EN PROGRAMAS FEDERALES Y ESTATALES. \n'+
           '* GESTIÓN Y DONACIÓN DE MEDICAMENTOS. \n'+
           '* APOYO EN TRÁMITES DE CURP Y ACTA DE NACIMIENTO. \n'+
           '* GESTIONES MUNICIPALES.',
        icon: FaNewspaper
    },
    {
        name: 'Servicios gratuitos',
        description:
            '* CONSULTAS MEDICAS. \n'+
            '* ASESORIAS JURIDICAS (DIVORCIOS, PENSION ALIMENTICIA CONVIVENCIAS, ETC.). \n'+
            '* CONSULTAS PSICOLOGICAS (TERAPIA). \n'+
            '* CONSULTAS DENTALES (VALORACIÓN).',
        icon: MdCleaningServices
    },
    {
        name: 'Servicios a bajo costo',
        description:
            '* ANALISIS CLÍNICOS. \n'+
            '* ULTRASONIDOS. \n'+
            '* SERVICOS FÚNEBROS \n'+
            '* SERVICIOS DENTALES (EXTRACCIONES, AMALGAMAS, RESINAS, LIMPIEZAS, ETC.)',
        icon: MdDesignServices
    },
];
const Feature = () => {
    return (
        <section id="Servicios">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Presentamos</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Nuestros Servicios
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Es un espacio donde brindamos distintos servicios en Champotón y mediante nuestra mesa de atención a las diferentes comunidades del municipio.
                        </p>
                    </div>
                    <div className="mx-auto me-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;