import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ chartData }) => {
  const colors = ["green", "red", "violet", "blue"];
  if (chartData.length === 0) {
    return (
      <p className="text-center text-xl md:text-2xl font-bold">
        You guys Havent Paid yet to this employee
      </p>
    );
  }
  console.log(chartData);
  let finalChartData = [];
  if (chartData.length >= 4) {
    finalChartData = chartData
      .slice(-4)
      .map(({ month, year, employee_salary }, index) => {
        const monthAbbr = month.slice(0, 3).toUpperCase();
        const yearShotened = year.slice(-2);
        return {
          name: `${monthAbbr} '${yearShotened}`,
          salary: parseInt(employee_salary),
          title: `${(parseInt(employee_salary) / 1000).toFixed(2)} k`,
          fill: colors[index % colors.length],
        };
      });
  }
  if (chartData.length < 4) {
    finalChartData = chartData.map(
      ({ month, year, employee_salary }, index) => {
        const monthAbbr = month.slice(0, 3).toUpperCase();
        const yearShotened = year.slice(-2);
        return {
          name: `${monthAbbr} '${yearShotened}`,
          salary: parseInt(employee_salary),
          title: `${(parseInt(employee_salary) / 1000).toFixed(2)} k`,
          fill: colors[index % colors.length],
        };
      }
    );
  }

  const formatYAxisTick = (salary) => `${(salary / 1000).toFixed(2)} k`;

  console.log(finalChartData);

  return (
    <div className="w-full md:w-[70%] mx-auto">
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart
          data={finalChartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 100 }}
        >
          <XAxis dataKey="name">
            {" "}
            <Label
              value={`${chartData[0].employee_name}'s Salary Graph Over the months`}
              position="bottom"
              style={{ textAnchor: "middle", fill: "#666", fontSize: 16 }}
            />
          </XAxis>
          <YAxis tickFormatter={formatYAxisTick}>
            <Label
              className=""
              value="Salary (৳)"
              angle={-90} // Rotates the text vertically
              position="insideLeft" // Positions the label inside the axis on the left
              style={{ textAnchor: "middle", fill: "#666" }} // Style the label
              dx={-20}
            />
          </YAxis>
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="salary" barSize={100}>
            {" "}
            {finalChartData.map((entry, index) => (
              <cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <LabelList dataKey="title" position="top" />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
