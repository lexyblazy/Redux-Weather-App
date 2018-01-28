import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function avg(data) {
  var sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return Math.ceil(sum / data.length);
}
const Chart = props => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color={color || "blue"} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {avg(data)}
        {units}
      </div>
    </div>
  );
};

export default Chart;
