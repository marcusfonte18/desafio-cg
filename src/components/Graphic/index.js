import React, { Component } from 'react';
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, } from "reactstrap";
import Axios from "axios";


export default class GraficoPizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chart: []
        };
    }

    async componentDidMount() {
        this.chartPie();
    }

    chartPie() {
        Axios.get('https://jsonplaceholder.typicode.com/users/1/todos').then(res => {
            const resp = res.data;
            let labels = [];
            let data = [];
            resp.forEach(element => {
                labels.push(element.completed);
            });

            this.setState({
                chart: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Comentários",
                            data: data
                        }
                    ]
                }
            });
        });
    }


    render() {

        return (
            <>

                <Row>
                    <Col xs="9">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Gráfico de comentrios</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-send text-success" /> Em pizza
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div style={{ width: "90%", height: "100%", }}>
                                    <Pie
                                        // /* data={chartExamplePie.data} */
                                        data={this.state.chart}
                                        options={{
                                            title: {
                                                display: true,
                                                text: '',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </>
        );
    }
}