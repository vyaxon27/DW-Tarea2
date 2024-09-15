import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <section className="container mt-2">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block mw-100"
                        src="../images/antigua.webp"
                        alt="Antigua Guatemala"
                    />
                    <Carousel.Caption>
                        <h3>Sede Antigua Guatemala</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mw-100"
                        src="../images/guatemala.webp"
                        alt="Sede Guatemala"
                    />
                    <Carousel.Caption>
                        <h3>Sede Guatemala</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mw-100"
                        src="../images/jutiapa.webp"
                        alt="Sede Jutiapa"
                    />
                    <Carousel.Caption>
                        <h3>Sede Jutiapa</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mw-100"
                        src="../images/quetzaltenango.webp"
                        alt="Sede Quetzaltenango"
                    />
                    <Carousel.Caption>
                        <h3>Sede Quetzaltenango</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mw-100"
                        src="../images/villanueva.webp"
                        alt="Sede Villa Nueva"
                    />
                    <Carousel.Caption>
                        <h3>Sede Villa Nueva</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Descripción debajo del carrusel */}
            <div className="mt-4">
                <h4>Universidad</h4>
                <p>
                    La <strong>Universidad Mariano Gálvez de Guatemala (UMG)</strong> es una de las instituciones de educación superior privada más prestigiosas del país. Fundada en 1966, la UMG se ha consolidado como una universidad reconocida por su excelencia académica y su compromiso con el desarrollo integral de sus estudiantes.
                </p>

                <p>
                    La universidad lleva el nombre de <strong>Mariano Gálvez</strong>, un destacado jurista y político guatemalteco del siglo XIX, conocido por su defensa de los principios liberales y el desarrollo de leyes que promovieron la educación y la libertad en Guatemala.
                </p>

                <h4>Oferta Académica</h4>
                <p>
                    La UMG ofrece una amplia gama de <strong>programas académicos</strong>, tanto en el nivel de pregrado como de posgrado, que incluyen áreas como:
                    <ul>
                        <li>Ingeniería</li>
                        <li>Ciencias Jurídicas y Sociales</li>
                        <li>Ciencias de la Salud</li>
                        <li>Ciencias Económicas</li>
                        <li>Ciencias de la Educación</li>
                        <li>Ciencias Tecnológicas</li>
                        <li>Humanidades y Teología</li>
                    </ul>
                </p>

                <h4>Instalaciones</h4>
                <p>
                    La UMG cuenta con modernos campus distribuidos por todo el territorio guatemalteco, incluyendo sus sedes principales en Ciudad de Guatemala, Antigua Guatemala, Jutiapa, Quetzaltenango, y Villa Nueva. Cada sede está equipada con laboratorios de última generación, bibliotecas, auditorios, y espacios recreativos para el bienestar de los estudiantes.
                </p>

                <h4>Compromiso con la Excelencia</h4>
                <p>
                    Desde su creación, la Universidad Mariano Gálvez ha mantenido un firme compromiso con la <strong>excelencia educativa</strong>, promoviendo la formación de profesionales éticos y competentes. La universidad fomenta la investigación, la innovación y el servicio a la comunidad, contribuyendo al desarrollo sostenible del país y la región.
                </p>

                <h4>Conexión Internacional</h4>
                <p>
                    La UMG también ofrece a sus estudiantes oportunidades de intercambios académicos internacionales, alianzas con otras universidades, y convenios de cooperación con instituciones educativas de todo el mundo, lo que les permite obtener una educación con una perspectiva global.
                </p>

                <p>
                    Con más de 50 años de experiencia, la <strong>Universidad Mariano Gálvez de Guatemala</strong> continúa siendo un referente en la educación superior del país, formando líderes comprometidos con el desarrollo social, económico y cultural de Guatemala.
                </p>
            </div>
        </section>
    );
};

export default Home;
