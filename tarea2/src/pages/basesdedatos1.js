import React from 'react';

const BasesDeDatos1 = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">

                    <h2 className="mb-3">Objetivos del curso</h2>
                    <p className="lead">
                        El curso de Bases de Datos I tiene como objetivo introducir a los estudiantes en los
                        sistemas de bases de datos relacionales, incluyendo diseño y normalización.
                    </p>

                    <h2 className="mt-4">Temas principales</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Introducción a las bases de datos: Conceptos básicos de bases de datos y DBMS;
                            Arquitectura de sistemas de bases de datos.
                        </li>
                        <li className="list-group-item">
                            Modelo Entidad-Relación (ER): Diseño de bases de datos usando el modelo ER;
                            Creación de diagramas ER y su implementación.
                        </li>
                        <li className="list-group-item">
                            Lenguaje de consulta estructurado (SQL): Uso de SQL para la manipulación y
                            definición de datos; Consultas básicas y avanzadas en SQL.
                        </li>
                        <li className="list-group-item">
                            Normalización de bases de datos: Conceptos de normalización y formas normales;
                            Implementación de formas normales hasta la 5NF.
                        </li>
                        <li className="list-group-item">
                            Gestión de transacciones y concurrencia: Manejo de transacciones y control de concurrencia.
                        </li>
                    </ul>

                    <h2 className="mt-4">Actividades</h2>
                    <p className="lead">
                        Clases magistrales, ejercicios prácticos, laboratorios y proyecto de diseño de bases de datos.
                    </p>

                    <button className="btn btn-primary mt-3" onClick={() => window.history.back()}>
                        Regresar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BasesDeDatos1;
