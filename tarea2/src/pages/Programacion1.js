import React from 'react';

const Programacion1 = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">
                    <h2 className="mb-3">Objetivos del curso</h2>
                    <p className="lead">
                        El curso de Programación 1 tiene como objetivo introducir a los estudiantes a los
                        conceptos básicos de la programación, incluyendo lógica, control de flujo y manejo de datos.
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
