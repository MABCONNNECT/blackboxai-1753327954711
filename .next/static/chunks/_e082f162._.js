(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/oferta/[program]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProgramDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const programsData = {
    "ciberseguridad": {
        name: "CIBERSEGURIDAD",
        description: "Protege sistemas y datos en el mundo digital del futuro",
        fullDescription: "El programa de Ciberseguridad forma profesionales especializados en la protección de sistemas informáticos, redes y datos contra amenazas digitales. Los estudiantes aprenden técnicas avanzadas de seguridad, análisis de vulnerabilidades, gestión de incidentes y implementación de medidas preventivas.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Análisis y evaluación de vulnerabilidades en sistemas",
            "Implementación de medidas de seguridad preventivas",
            "Gestión de incidentes de seguridad informática",
            "Auditoría de sistemas y redes",
            "Desarrollo de políticas de seguridad",
            "Forense digital y análisis de evidencias"
        ],
        careerOpportunities: [
            "Analista de Ciberseguridad",
            "Especialista en Seguridad de Redes",
            "Auditor de Sistemas",
            "Consultor en Seguridad Informática",
            "Investigador Forense Digital"
        ]
    },
    "electromecanica": {
        name: "ELECTROMECÁNICA",
        description: "Domina la integración de sistemas eléctricos y mecánicos",
        fullDescription: "El programa de Electromecánica combina conocimientos de ingeniería eléctrica y mecánica para formar técnicos especializados en el mantenimiento, instalación y reparación de equipos industriales que integran componentes eléctricos y mecánicos.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Mantenimiento de equipos electromecánicos",
            "Instalación de sistemas eléctricos industriales",
            "Diagnóstico y reparación de maquinaria",
            "Automatización de procesos industriales",
            "Control de motores y sistemas de potencia",
            "Interpretación de planos técnicos"
        ],
        careerOpportunities: [
            "Técnico Electromecánico",
            "Supervisor de Mantenimiento Industrial",
            "Técnico en Automatización",
            "Especialista en Equipos Industriales",
            "Técnico en Control de Procesos"
        ]
    },
    "produccion-agropecuaria": {
        name: "PRODUCCIÓN AGROPECUARIA",
        description: "Innovación tecnológica aplicada al sector agropecuario",
        fullDescription: "El programa de Producción Agropecuaria integra tecnologías modernas con prácticas agrícolas y ganaderas sostenibles, formando profesionales capaces de optimizar la producción mediante el uso de herramientas tecnológicas avanzadas.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Gestión tecnificada de cultivos",
            "Manejo integral de sistemas ganaderos",
            "Aplicación de biotecnología agrícola",
            "Gestión de recursos hídricos",
            "Agricultura de precisión",
            "Sostenibilidad ambiental"
        ],
        careerOpportunities: [
            "Técnico Agropecuario",
            "Supervisor de Producción Agrícola",
            "Especialista en Agricultura de Precisión",
            "Gestor de Proyectos Rurales",
            "Consultor Agropecuario"
        ]
    },
    "diseno-de-modas": {
        name: "DISEÑO DE MODAS",
        description: "Creatividad y tecnología en la industria de la moda",
        fullDescription: "El programa de Diseño de Modas combina creatividad artística con tecnología digital, formando diseñadores capaces de crear colecciones innovadoras utilizando herramientas de diseño asistido por computadora y técnicas de producción modernas.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Diseño y desarrollo de colecciones",
            "Patronaje digital y tradicional",
            "Técnicas de confección avanzadas",
            "Diseño asistido por computadora",
            "Gestión de tendencias y mercado",
            "Producción sostenible en moda"
        ],
        careerOpportunities: [
            "Diseñador de Modas",
            "Patronista Digital",
            "Consultor de Imagen",
            "Gestor de Marca de Moda",
            "Especialista en Producción Textil"
        ]
    },
    "mecanica-industrial": {
        name: "MECÁNICA INDUSTRIAL",
        description: "Optimización de procesos industriales modernos",
        fullDescription: "El programa de Mecánica Industrial forma técnicos especializados en el diseño, mantenimiento y optimización de sistemas mecánicos industriales, con énfasis en la eficiencia energética y la automatización de procesos.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Diseño de sistemas mecánicos",
            "Mantenimiento predictivo y preventivo",
            "Optimización de procesos industriales",
            "Gestión de la producción",
            "Control de calidad industrial",
            "Seguridad industrial y ocupacional"
        ],
        careerOpportunities: [
            "Técnico en Mecánica Industrial",
            "Supervisor de Producción",
            "Especialista en Mantenimiento",
            "Analista de Procesos",
            "Coordinador de Calidad"
        ]
    },
    "diseno-y-mantenimiento-de-redes": {
        name: "DISEÑO Y MANTENIMIENTO DE REDES",
        description: "Arquitectura y gestión de redes de comunicación",
        fullDescription: "El programa de Diseño y Mantenimiento de Redes forma especialistas en la planificación, implementación y administración de infraestructuras de red, incluyendo redes locales, metropolitanas y de área amplia.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Diseño de arquitecturas de red",
            "Configuración de equipos de networking",
            "Administración de servidores",
            "Seguridad en redes de datos",
            "Monitoreo y optimización de redes",
            "Implementación de servicios cloud"
        ],
        careerOpportunities: [
            "Administrador de Redes",
            "Especialista en Infraestructura IT",
            "Técnico en Telecomunicaciones",
            "Consultor en Redes",
            "Analista de Sistemas"
        ]
    },
    "mecatronica": {
        name: "MECATRÓNICA",
        description: "Fusión de mecánica, electrónica y programación",
        fullDescription: "El programa de Mecatrónica integra conocimientos de ingeniería mecánica, electrónica y programación para formar técnicos especializados en sistemas automatizados y robótica industrial.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Programación de sistemas automatizados",
            "Diseño de sistemas mecatrónicos",
            "Robótica industrial y de servicios",
            "Control automático de procesos",
            "Integración de sistemas IoT",
            "Mantenimiento de equipos automatizados"
        ],
        careerOpportunities: [
            "Técnico en Mecatrónica",
            "Especialista en Robótica",
            "Programador de Automatización",
            "Técnico en Sistemas IoT",
            "Supervisor de Producción Automatizada"
        ]
    },
    "mecanica-automotriz": {
        name: "MECÁNICA AUTOMOTRIZ",
        description: "Tecnología automotriz de última generación",
        fullDescription: "El programa de Mecánica Automotriz forma técnicos especializados en el diagnóstico, mantenimiento y reparación de vehículos modernos, incluyendo sistemas híbridos y eléctricos.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Diagnóstico computarizado de vehículos",
            "Mantenimiento de motores modernos",
            "Sistemas eléctricos y electrónicos automotrices",
            "Tecnología híbrida y eléctrica",
            "Sistemas de inyección y control",
            "Gestión de talleres automotrices"
        ],
        careerOpportunities: [
            "Técnico Automotriz",
            "Especialista en Diagnóstico",
            "Técnico en Vehículos Eléctricos",
            "Supervisor de Taller",
            "Consultor Técnico Automotriz"
        ]
    },
    "contabilidad": {
        name: "CONTABILIDAD",
        description: "Gestión financiera con herramientas digitales avanzadas",
        fullDescription: "El programa de Contabilidad forma profesionales en gestión financiera y contable, utilizando software especializado y herramientas digitales para el análisis y control de información financiera empresarial.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Contabilidad financiera y de costos",
            "Análisis financiero empresarial",
            "Manejo de software contable",
            "Auditoría y control interno",
            "Tributación y normativa fiscal",
            "Gestión de presupuestos"
        ],
        careerOpportunities: [
            "Contador Público",
            "Analista Financiero",
            "Auditor Interno",
            "Consultor Tributario",
            "Gerente de Contabilidad"
        ]
    },
    "secretariado-ejecutivo": {
        name: "SECRETARIADO EJECUTIVO",
        description: "Asistencia ejecutiva con competencias tecnológicas",
        fullDescription: "El programa de Secretariado Ejecutivo forma profesionales en asistencia gerencial y administrativa, con competencias en tecnologías de información y comunicación para el apoyo ejecutivo moderno.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Asistencia ejecutiva y gerencial",
            "Gestión de comunicaciones empresariales",
            "Organización de eventos corporativos",
            "Manejo de herramientas ofimáticas",
            "Protocolo y relaciones públicas",
            "Gestión documental digital"
        ],
        careerOpportunities: [
            "Asistente Ejecutivo",
            "Coordinador Administrativo",
            "Gestor de Comunicaciones",
            "Organizador de Eventos",
            "Especialista en Protocolo"
        ]
    },
    "electronica-en-automatizacion-y-telecomunicaciones": {
        name: "ELECTRÓNICA EN AUTOMATIZACIÓN Y TELECOMUNICACIONES",
        description: "Sistemas automatizados y comunicaciones del futuro",
        fullDescription: "El programa de Electrónica en Automatización y Telecomunicaciones forma técnicos especializados en el diseño, implementación y mantenimiento de sistemas electrónicos para automatización industrial y redes de telecomunicaciones.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Diseño de circuitos electrónicos",
            "Sistemas de automatización industrial",
            "Redes de telecomunicaciones",
            "Programación de microcontroladores",
            "Instrumentación y control",
            "Comunicaciones digitales"
        ],
        careerOpportunities: [
            "Técnico en Electrónica",
            "Especialista en Automatización",
            "Técnico en Telecomunicaciones",
            "Programador de Sistemas Embebidos",
            "Supervisor de Instrumentación"
        ]
    },
    "administracion-y-gestion": {
        name: "ADMINISTRACIÓN Y GESTIÓN",
        description: "Liderazgo empresarial con visión innovadora",
        fullDescription: "El programa de Administración y Gestión forma líderes empresariales con competencias en gestión estratégica, utilizando herramientas tecnológicas modernas para la toma de decisiones y el liderazgo organizacional.",
        duration: "2 años",
        modality: "Presencial",
        competencies: [
            "Gestión estratégica empresarial",
            "Liderazgo y desarrollo de equipos",
            "Análisis de mercados y competencia",
            "Gestión de proyectos",
            "Marketing digital y tradicional",
            "Emprendimiento e innovación"
        ],
        careerOpportunities: [
            "Administrador de Empresas",
            "Gerente de Proyectos",
            "Consultor Empresarial",
            "Especialista en Marketing",
            "Emprendedor"
        ]
    }
};
function ProgramDetailPage({ params }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const programData = programsData[params.program];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgramDetailPage.useEffect": ()=>{
            setIsVisible(true);
        }
    }["ProgramDetailPage.useEffect"], []);
    if (!programData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-20 pb-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-4xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/oferta",
                                    className: "inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300",
                                    style: {
                                        fontFamily: 'Exo 2, sans-serif'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2",
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this),
                                        "Volver a Oferta Académica"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent leading-tight",
                                style: {
                                    fontFamily: 'Orbitron, monospace'
                                },
                                children: programData.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed",
                                style: {
                                    fontFamily: 'Exo 2, sans-serif'
                                },
                                children: programData.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-green-500 rounded-full mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium",
                                                style: {
                                                    fontFamily: 'Exo 2, sans-serif'
                                                },
                                                children: [
                                                    "Duración: ",
                                                    programData.duration
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-green-500 rounded-full mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium",
                                                style: {
                                                    fontFamily: 'Exo 2, sans-serif'
                                                },
                                                children: [
                                                    "Modalidad: ",
                                                    programData.modality
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/oferta/[program]/page.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-20 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-8 shadow-lg border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800 mb-4",
                                                style: {
                                                    fontFamily: 'Orbitron, monospace'
                                                },
                                                children: "DESCRIPCIÓN DEL PROGRAMA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 leading-relaxed text-lg",
                                                style: {
                                                    fontFamily: 'Exo 2, sans-serif'
                                                },
                                                children: programData.fullDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-8 shadow-lg border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800 mb-6",
                                                style: {
                                                    fontFamily: 'Orbitron, monospace'
                                                },
                                                children: "COMPETENCIAS A DESARROLLAR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: programData.competencies.map((competency, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: competency
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-8 shadow-lg border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800 mb-6",
                                                style: {
                                                    fontFamily: 'Orbitron, monospace'
                                                },
                                                children: "OPORTUNIDADES LABORALES"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: programData.careerOpportunities.map((opportunity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center p-3 bg-green-50 rounded-lg border border-green-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-bold text-sm",
                                                                    children: opportunity.charAt(0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700 font-medium",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: opportunity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold mb-4",
                                                style: {
                                                    fontFamily: 'Orbitron, monospace'
                                                },
                                                children: "¿INTERESADO?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-6 text-green-100",
                                                style: {
                                                    fontFamily: 'Exo 2, sans-serif'
                                                },
                                                children: "Solicita más información sobre este programa y comienza tu futuro profesional."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contacto",
                                                className: "block w-full text-center px-6 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105",
                                                style: {
                                                    fontFamily: 'Exo 2, sans-serif'
                                                },
                                                children: "Solicitar Información"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-6 shadow-lg border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-800 mb-4",
                                                style: {
                                                    fontFamily: 'Orbitron, monospace'
                                                },
                                                children: "INFORMACIÓN RÁPIDA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: "Duración:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-800",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: programData.duration
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: "Modalidad:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-800",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: programData.modality
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: "Nivel:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-800",
                                                                style: {
                                                                    fontFamily: 'Exo 2, sans-serif'
                                                                },
                                                                children: "Técnico"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-6 shadow-lg border border-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-800 mb-4",
                                                style: {
                                                    fontFamily: 'Orbitron, monospace'
                                                },
                                                children: "OTROS PROGRAMAS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/oferta",
                                                        className: "block text-green-600 hover:text-green-700 transition-colors duration-300",
                                                        style: {
                                                            fontFamily: 'Exo 2, sans-serif'
                                                        },
                                                        children: "Ver todos los programas →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/oferta-integrada",
                                                        className: "block text-green-600 hover:text-green-700 transition-colors duration-300",
                                                        style: {
                                                            fontFamily: 'Exo 2, sans-serif'
                                                        },
                                                        children: "Oferta Académica Integrada →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/oferta/[program]/page.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/oferta/[program]/page.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/oferta/[program]/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/oferta/[program]/page.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_s(ProgramDetailPage, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ProgramDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProgramDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_e082f162._.js.map