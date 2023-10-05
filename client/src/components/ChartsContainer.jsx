import { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

/**
 * Renders a container component for displaying monthly applications charts.
 *
 * @returns {JSX.Element} The rendered charts container.
 */
const ChartsContainer = () => {
  // Initialize the 'barChart' state variable with a default value of true
  const [barChart, setBarChart] = useState(true);

  // Get the 'monthlyApplications' data from the app context
  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>

      {/* Button to toggle between bar chart and area chart */}
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>

      {/* Render either the bar chart or the area chart based on the value of 'barChart' */}
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
