import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
const Piechart = ({ languages }) => {
  
  const sortedLanguages = languages.sort((a, b) => b.size - a.size);

  const data = sortedLanguages.map((language, index) => ({
    id: index,
    value: language.size,
    label: language.name,
  }));

  return (
    <PieChart
      sx={{
        color: "white",
        margin: "1vh",
      }}
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "white" },
        },
      ]}
      height={200}
    />
  );
};

export default Piechart
