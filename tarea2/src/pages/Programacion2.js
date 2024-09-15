import React from 'react';

const Programacion2 = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">

                    <h2 className="mb-3">Objetivos del curso</h2>
                    <p className="lead">
                        El curso de Programación 2 tiene como objetivo fortalecer conocimientos en programación orientada
                        a objetos y desarrollar aplicaciones con Java y tecnologías asociadas.
                    </p>

                    <h2 className="mt-4">Temas principales</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Revisión de paradigmas de programación: Programación estructurada y modular; Programación orientada a objetos.
                        </li>
                        <li className="list-group-item">
                            POO avanzada: Herencia múltiple, clases abstractas, y polimorfismo; Gestión dinámica de memoria y manejo de excepciones.
                        </li>
                        <li className="list-group-item">
                            Desarrollo de applets y servlets: Creación y uso de applets en páginas HTML; Desarrollo y manejo de servlets para aplicaciones web.
                        </li>
                        <li className="list-group-item">
                            Tipos de Datos Abstractos (TDA): Listas, pilas, colas y árboles; Implementación de TDA en Java.
                        </li>
                        <li className="list-group-item">
                            Introducción a la programación concurrente: Manejo de hilos y procesos.
                        </li>
                    </ul>

                    <h2 className="mt-4">Actividades</h2>
                    <p className="lead">
                        Clases teóricas y prácticas en laboratorio, evaluaciones parciales y proyectos de programación.
                    </p>

                    <button className="btn btn-primary mt-3" onClick={() => window.history.back()}>
                        Regresar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Programacion2;
