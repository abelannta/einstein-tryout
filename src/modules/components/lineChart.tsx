import moment from "moment";
import React, { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

interface LineChartProps {
  userData: any;
}

export default function LineChart(props: LineChartProps) {
  const { userData } = props;

  console.log(userData);

  const data = useMemo(
    () => [
      {
        label: "UTBK",
        data: userData,
      },
    ],
    []
  );

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) =>
        moment(datum.date).format("DD MMMM YYYY") as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.value,
        elementType: "area",
      },
    ],
    []
  );

  return (
    <>
      <div className="w-full aspect-square md:aspect-video">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            tooltip: false,
          }}
        />
      </div>
    </>
  );
}
