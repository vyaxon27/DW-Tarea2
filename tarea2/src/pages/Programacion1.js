import React from 'react';

const Programacion1 = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">

                    <h2 className="mb-3">Objetivos del curso</h2>
                    <p className="lead">
                        El curso de Programación 1 tiene como objetivo introducir a los estudiantes a los conceptos básicos
                        de la programación, incluyendo lógica de programación, estructuras de control, y manejo de datos básicos.
                    </p>

                    <h2 className="mt-4">Temas principales</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Conceptos básicos de C++: Variables, operadores, y control de flujo; Funciones y modularización del código.
                        </li>
                        <li className="list-group-item">
                            Estructuras de datos: Arrays, listas, y estructuras de datos dinámicas; Uso de punteros y manejo de memoria.
                        </li>
                        <li className="list-group-item">
                            Programación orientada a objetos (POO): Clases, objetos, herencia, y polimorfismo; Encapsulación y abstracción.
                        </li>
                        <li className="list-group-item">
                            Manejo de archivos: Lectura y escritura en archivos; Manipulación de archivos binarios y de texto.
                        </li>
                        <li className="list-group-item">
                            Técnicas de depuración: Uso de herramientas de depuración y manejo de errores.
                        </li>
                    </ul>

                    <h2 className="mt-4">Actividades</h2>
                    <p className="lead">
                        Incluye ejercicios de programación en clase y en laboratorio, proyectos prácticos y tareas de investigación.
                    </p>

                    <button className="btn btn-primary mt-3" onClick={() => window.history.back()}>
                        Regresar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Programacion1;
