import React from 'react';

const Programacion3 = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">

                    <h2 className="mb-3">Objetivos del curso</h2>
                    <p className="lead">
                        El curso de Programación 3 tiene como objetivo comprender y aplicar estructuras de datos complejas
                        y implementar algoritmos eficientes para el manejo de datos.
                    </p>

                    <h2 className="mt-4">Temas principales</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Estructuras de datos avanzadas: Árboles binarios, AVL, B+, y estructuras de datos balanceadas; Tablas hash y su implementación.
                        </li>
                        <li className="list-group-item">
                            Algoritmos de búsqueda y ordenación: Métodos de búsqueda y ordenación en estructuras de datos; Optimización de algoritmos.
                        </li>
                        <li className="list-group-item">
                            Administración de memoria: Técnicas de manejo de memoria dinámica; Gestión de recursos en aplicaciones.
                        </li>
                        <li className="list-group-item">
                            Desarrollo de aplicaciones con estructuras de datos: Casos de uso prácticos y aplicaciones en diferentes lenguajes.
                        </li>
                        <li className="list-group-item">
                            Metodologías de desarrollo: Enfoque algorítmico y diseño de soluciones eficientes.
                        </li>
                    </ul>

                    <h2 className="mt-4">Actividades</h2>
                    <p className="lead">
                        Laboratorios y tareas de programación, proyecto final y evaluaciones.
                    </p>

                    <button className="btn btn-primary mt-3" onClick={() => window.history.back()}>
                        Regresar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Programacion3;
