import React, { Component } from 'react';
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { defaults } from 'react-chartjs-2';


defaults.color = '#fff';
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
        axios.get(`${process.env.REACT_APP_API_URL}/users/1/todos`).then(res => {
            const resp = res.data;
            let labels = [];
            let data = [];
            resp.forEach(element => {
                if (element.completed === true) {
                    labels.push(element.completed)
                } else {
                    data.push(element.completed)
                };

            });

            this.setState({
                chart: {
                    labels: ['True', 'False'],
                    datasets: [
                        {
                            data: [labels.length, data.length],
                            backgroundColor: [
                                'rgba(193, 89,193, 0.5)',
                                'rgba(8, 75,164, 0.5)',

                            ],
                            hoverBackgroundColor: [
                                'rgba(193, 89,193, 1)',
                                'rgba(8, 75,164, 1)'
                              ],
                            borderWidth: 1,
                        }
                    ],
                },
            });
        });
    }


    render() {
        const mainStyle = {
            left: '325px',
            top: '50px',
            padding: "10px",
            color: '#fff',
            width: "50%",
            height: "50%",
            position: 'relative',
        }

        return (
            <>
                <div style={mainStyle}>

                    <h3>Gráfico de comentários</h3>
                    <h4>Em pizza</h4>


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
                                position: 'right',
                            }
                        }}
                    />
                </div >
            </>
        );
    }
}
