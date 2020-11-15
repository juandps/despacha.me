import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'

class Faqcontact extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-lg-30">
                            <div className="section-title">
                                <h4 className="title">FAQ</h4>
                            </div>
                            <Accordion className="with-gap" defaultActiveKey="0">
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="0">
                                        <Card.Body>
                                            Distribuciones Online Despachame S.A.S es una empresa lojana que conecta el agro con clientes finales mediante tecnología. Nuestra misión es que todos nuestros clientes puedan hacer su mercado mediante nuesta web app o whatsapp.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        ¿Qué es Despacha.me?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="1">
                                        <Card.Body>
                                            Somos un grupo de emprendedores y empresarios con trayectoria en el área de distribución de alimentos y farmacéutica.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        ¿Quiénes son?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="2">
                                        <Card.Body>
                                            Si eres dueño de un restaurante y deseas recibir semanalmente el mercado directamente en tu local. Contáctanos hoy mismo, menciona el cupón FAQ2020 para obtener un 20% de descuento en tu primer pedido.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        ¿Puedo comprar al por mayor?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="3">
                                        <Card.Body>
                                            Motivamos a nuestros clientes a que hagan sus pedidos online para mayor facilidad, y que programen pedidos rutinarios, sin embargo si es un pedido urgente se puede enviar la lista a Whatsapp.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        ¿Cómo hago un pedido?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="4">
                                        <Card.Body>
                                            En Despachame decimos si nuestra abuelita puede utilizar despachame, entonces es un servicio de calidad. Por ello no debes descargar nada para hacer un pedido. Simplemente abrir www.despacha.me o escribirnos al Whatsapp
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        ¿Son una app?
                                    </Accordion.Toggle>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h4 className="title">Contacto</h4>
                            </div>
                            <form method="post">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Nombre" className="form-control" name="fname" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Apellido" className="form-control" name="lname" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" placeholder="Correo" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" placeholder="Mensaje" className="form-control" name="subject" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="message" className="form-control" placeholder="Escriba su mensaje" rows={8} />
                                    </div>
                                </div>
                                <button type="submit" className="andro_btn-custom primary">Enviar mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faqcontact;