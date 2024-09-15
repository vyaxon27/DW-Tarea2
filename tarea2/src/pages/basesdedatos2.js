import React from 'react';

const BasesDeDatos2 = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">
                    <h2 className="mb-3">Objetivos del curso</h2>
                    <p className="lead">
                        El curso de Bases de Datos II tiene como objetivo profundizar en la administración y diseño de bases de datos,
                        incluyendo sistemas distribuidos y bases de datos orientadas a objetos.
                    </p>

                    <h2 className="mt-4">Temas principales</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Procesamiento de transacciones: Conceptos de transacciones, atomicidad, y consistencia; Recuperación ante fallos y manejo de concurrencia.
                        </li>
                        <li className="list-group-item">
                            Bases de datos distribuidas: Diseño y arquitectura de sistemas distribuidos; Control de concurrencia y manejo de fallos en sistemas distribuidos.
                        </li>
                        <li className="list-group-item">
                            Modelos cliente-servidor: Variantes de modelos de servidores y sus aplicaciones; Arquitecturas de dos, tres, y n capas.
                        </li>
                        <li className="list-group-item">
                            Bases de datos orientadas a objetos: Conceptos y características de bases de datos orientadas a objetos; Implementación de SQL ANSI 2003 y operaciones DDL y DML en objetos.
                        </li>
                        <li className="list-group-item">
                            Optimización y alto rendimiento: Técnicas de optimización de consultas y rendimiento de sistemas.
                        </li>
                    </ul>

                    <h2 className="mt-4">Actividades</h2>
                    <p className="lead">
                        Lecturas, investigaciones, prácticas en laboratorio, evaluaciones parciales, tareas, y proyecto final.
                    </p>

                    <button className="btn btn-primary mt-3" onClick={() => window.history.back()}>
                        Regresar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BasesDeDatos2;
