import React from "react";
import Chart from "react-apexcharts";

const Apex = () => {
  return (
    <React.Fragment>
      <Chart
        type="donut"
        width={400}
        height={300}
        series={[80, 20]}
        options={{
          labels: ["Crowdsale investors:", "Foundation"],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                },
              },
            },
          },
          dataLabels: {
            enabled: false
          }
        }}
      />
    </React.Fragment>
  );
};

export default Apex;
