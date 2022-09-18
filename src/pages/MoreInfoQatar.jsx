import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MoreInfoQatar = () => {
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <img
            src="./src/assets/img/image1.jpg"
            className="d-block w-100"
            alt="image1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./src/assets/img/image3.jpg"
            className="d-block w-100"
            alt="image2"
          />
          <Carousel.Caption className="bg-dark">
            <h3>Jugadores Jovenes</h3>
            <p>
              Buscar destacar en la copa Mundial, es uno de los objetivos de
              cualquier jugador, ¿Lograrán conseguirlo?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://piks-eldesmarqueporta.netdna-ssl.com/thumbs/o/1200/bin/nacional/info/17-18/Chica-10-3/Los10Mas/Estrellas_Sin_Mundial/Estrellas_sin_Mundial2.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Los que nunca llegaron</Card.Title>
                  <Card.Text as="p">
                    En esta seccion contaremos mas sobre aquellas estrellas que
                    nunca clasificaron al mundial
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem", objectFit: "cover" }}
                  src="https://www.neogol.com/wp-content/uploads/2018/04/balones-mundiales-1930-2018.jpg"
                  className="card-img-top"
                  alt="Mejores balones del mundial"
                />
                <div className="card-body">
                  <h5 className="card-title">Mejores balones del mundial</h5>
                  <p className="card-text">
                    En esta seccion te contaremos sobre los mejores balones con
                    los que se jugaron cada mundial
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="https://depor.com/resizer/zHzu_dekMZ8XNR9OqDajC_tjdcU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/N74EWLMJLJFNHBTG7P3PF77CYE.jpg"
                  className="card-img-top"
                  alt="Jugadores mas jovenes que fueron al mundial"
                />
                <div className="card-body">
                  <h5 className="card-title">Los mas jovenes</h5>
                  <p className="card-text">
                    En esta seccion te contaremos sobre los jugadores mas
                    jovenes que fueron al mundial
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="https://luznoticiasrm.blob.core.windows.net.optimalcdn.com/images/2022/03/31/imagen-de-la-pantalla-de-un-video-juego-8e9a2e4c.jpg"
                  className="card-img-top"
                  alt="Mejores selecciones del Mundo"
                />
                <div className="card-body">
                  <h5 className="card-title">Mejores selecciones del mundo</h5>
                  <p className="card-text">
                    En esta seccion te hablaremos sobre las mejores selecciones
                    de futbol que existen en el mundo
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="Estadios mas modernos del mundo"
                />
                <div className="card-body">
                  <h5 className="card-title">Los estadios mas modernos</h5>
                  <p className="card-text">
                    En esta seccion te hablaremos mas sobre los estadios donde
                    se definira al unico ganador de este mundial
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/18/15529140472083.jpg"
                  className="card-img-top"
                  alt="Mejores camisetas del mundo"
                />
                <div className="card-body">
                  <h5 className="card-title">Mejores camisetas del mundo</h5>
                  <p className="card-text">
                    En esta seccion te hablaremos sobre las mejores camisetas
                    del mundo, asi como tambien cual es su significado
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="https://media.revistagq.com/photos/5ca5e464bda594dea833b2f4/master/w_1060,h_500,c_limit/mejores_botas_futbol_mundial_rusia_2018_568722856.jpg"
                  className="card-img-top"
                  alt="Mejores zapatillas del mundo"
                />
                <div className="card-body">
                  <h5 className="card-title">Mejores zapatillas del mundo</h5>
                  <p className="card-text">
                    Las mejores zapatillas para jugar a un partido de futbol y
                    tambien considerado el mejor de las mejores en el mundial
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="https://www.infobae.com/new-resizer/8dEAhaq8YH0wYsDssEdlS0D3JNQ=/1024x512/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/HEOWTHEJQBACLO5AFLFD3LXYRQ.jpg"
                  className="card-img-top"
                  alt="Los favoritos"
                />
                <div className="card-body">
                  <h5 className="card-title">Los favoritos</h5>
                  <p className="card-text">
                    En esta seccion te hablaremos sobre los mejores equipos que
                    podrian obtener la copa del mundo este 2022
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card m-3 bg-light text-body">
                <img
                  style={{ height: "15rem" }}
                  src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-03/qatar2%20%281%29.jpg?itok=CuBxfwMJ"
                  className="card-img-top"
                  alt="Mas sobre Qatar"
                />
                <div className="card-body">
                  <h5 className="card-title">Mas sobre Qatar</h5>
                  <p className="card-text">
                    En esta seccion te hablaremos mas sobre como poder viajar a
                    Qatar y sus reglamentos
                  </p>
                  <a href="#" className="btn btn-dark">
                    ¡Saber mas!
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default MoreInfoQatar;
