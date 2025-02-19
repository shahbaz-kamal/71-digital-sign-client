import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LabelList,
} from "recharts";

const OverViewChart = () => {
  const [showAll, setShowAll] = useState(false);
  const axiosSecure = UseAxiosSecure();

  const { data: paymentData = [] } = useQuery({
    queryKey: ["payment-data"],
    queryFn: async () => {
      const res = await axiosSecure.get("payments/summary");
      return res.data;
    },
  });

  // Month order mapping
  const monthOrder = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  // Function to parse month and year
  const parseDate = (monthYear) => {
    const [month, year] = monthYear.split("'");
    return { year: parseInt(year), month: monthOrder[month] };
  };

  // Sorting paymentData by year and month in descending order
  const sortedData = [...paymentData].sort((a, b) => {
    const dateA = parseDate(a.monthAndYear);
    const dateB = parseDate(b.monthAndYear);

    if (dateA.year !== dateB.year) {
      return dateB.year - dateA.year; // Sort by year descending
    }
    return dateB.month - dateA.month; // Sort by month descending
  });

  const displayedData = showAll ? sortedData : sortedData.slice(0, 6);
  const formatToK = (num) =>
    num >= 1000 ? `৳ ${(num / 1000).toFixed(0)}K` : num;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Monthly Payments Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={displayedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthAndYear" />

          {/* Format Y-Axis Labels */}
          <YAxis tickFormatter={formatToK} />

          <Tooltip formatter={(value) => formatToK(value)} />

          <Bar dataKey="totalPayment" fill="#ED1C24">
            {/* Format labels on bars */}
            <LabelList
              dataKey="totalPayment"
              position="top"
              fill="#000"
              fontSize={14}
              fontWeight="bold"
              formatter={formatToK}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 px-4 py-2 bg-primary text-white font-bold rounded-md"
      >
        {showAll ? "Show Recent 6 Months" : "View All Data"}
      </button>
    </div>
  );
};

export default OverViewChart;
