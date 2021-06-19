import React from 'react';
import { Pie } from 'react-chartjs-2';



const data = {
    labels: ['True', 'False'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


const PieChart = () => (

    <>
        <div className='header'>
            <span className='title'>Status de Pendências</span>
            <div className='links'>
            </div>
        </div>
        <Pie data={data} />
    </>
);

export default PieChart;