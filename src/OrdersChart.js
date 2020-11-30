import React from "react";
import Chart from "react-google-charts";


function OrdersChart(props) {

    //object for pie chart categoris and numbers
    const { freq } = props
    // console.log(data);
//    const freq=data;
    // console.log(freq);

    const pieOptions = {
        title: "",
        pieHole: 0.6,
        slices: [
            {
                color: "#2BB673"
            },
            {
                color: "#d91e48"
            },
            {
                color: "#007fad"
            },
            {
                color: "#e9a227"
            }
        ],
        legend: {
            position: "bottom",
            alignment: "center",
            textStyle: {
                color: "233238",
                fontSize: 14
            }
        },
        tooltip: {
            showColorCode: true
        },
        chartArea: {
            left: 0,
            top: 0,
            width: "100%",
            height: "80%"
        },
        fontName: "Roboto"
    };
    return (
        <div className="App">
            <Chart
                chartType="PieChart"
                data={[
                    ['No Of Orders', 'No of Customers'],
                    ['1', freq[1]],
                    ['2', freq[2]],
                    ['3', freq[3]],
                    ['4', freq[4]],
                    ['5+', freq['5+']]
                ]}
                options={pieOptions}
                graph_id="PieChart"
                width={"100%"}
                height={"400px"}
                legend_toggle
            />
        </div>
    );
}
export default OrdersChart