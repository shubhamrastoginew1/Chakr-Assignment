import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { csv } from 'd3-fetch'; // Import d3-fetch for CSV parsing
import DATA from '../../data.json';

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

function Graph() {
    const downsample = (data) => {
        const labels = data.map(entry => entry.Timestamp);
        const profitPercentages = data.map(entry => parseFloat(entry[ 'Profit Percentage' ]));

        let newData = [];

        let ind = 0;
        for (ind = 0; ind < labels.length;) {
            let prevDate = labels[ ind ].substring(0, 10);
            ind++;
            let sum = profitPercentages[ ind ];
            let cnt = 1;

            while (ind < labels.length && labels[ ind ].substring(0, 10) == prevDate) {
                sum += profitPercentages[ ind ];
                cnt++;
                ind++;
            }
            let avg = sum / cnt;

            newData.push({
                "Timestamp": prevDate,
                "Profit Percentage": String(avg)
            })

        }
        console.log("NEW DATA", newData);
        return newData;
    };


    const [ data, setData ] = useState({
        labels: [ 'a', 'b', 'c' ],
        datasets: [
            {
                label: "Profit Percentage",
                data: [ 1, 2, 3 ],
                backgroundColor: 'yellow',
                borderColor: 'green',
                tension: 0,
                fill: true,
                // pointStyle: 'rect',
                // pointBorderColor: 'blue',
                pointBackgroundColor: 'black',
                showLine: true
            }
        ]
    });

    const [ di, setD ] = useState(1);




    useEffect(() => {
        const fetchDataAndDownsample = async () => {
            try {
                fetch('https://jsonplaceholder.typicode.com/todos/1').then(rawData => {
                    rawData = DATA;
                    console.log("Fetched DATA", rawData);

                    const downsampledData = downsample(rawData);

                    // setData(downsampledData);
                    if (di === 1)
                        setD(downsampledData);

                    console.log("Dddd", di);
                    const labels = di.map(entry => {
                        const midDate = entry.Timestamp.substring(5, 7);
                        if (midDate === "06" || midDate === "07" || midDate === "01") {
                            console.log(entry.Timestamp.substring(0, 4));
                            return entry.Timestamp.substring(0, 4);
                        }
                        return "";
                    });
                    const profitPercentages = di.map(entry => parseFloat(entry[ 'Profit Percentage' ]));
                    setData({
                        labels: labels,
                        datasets: [
                            {
                                label: "Profit Percentage",
                                data: profitPercentages,
                                backgroundColor: '#b9efb8',
                                borderColor: '#b9efb8',
                                tension: 0,
                                fill: true,
                                // pointStyle: 'rect',
                                // pointBorderColor: 'blue',
                                pointBackgroundColor: '#b9efb8',
                                showLine: true
                            }
                        ]
                    })
                })

            } catch (error) {
                console.error('Error fetching/downsampling data:', error);
            }
        };
        fetchDataAndDownsample();
    }, [ di ]);

    // const labels = d.map(entry => entry.Timestamp);
    // const profitPercentages = d.map(entry => parseFloat(entry[ 'Profit Percentage' ]));

    // console.log("DATA IN ABOUT", d);



    return (
        <div className="chart" style={{ width: '100%', height: '100%' }}>
            <Line style={{ width: '100%', height: '100%' }} data={data}>Hello</Line>
        </div>
    );
}

export default Graph;