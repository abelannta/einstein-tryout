import React, { useEffect, useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

export default function LineChart() {
  const data = useMemo(
    () => [
      {
        label: "UTBK",
        data: [
          {
            date: "2023-02-21T00:00:00.000Z",
            value: 490,
          },
          {
            date: "2023-02-22T00:00:00.000Z",
            value: 512,
          },
          {
            date: "2023-02-23T00:00:00.000Z",
            value: 499,
          },
          {
            date: "2023-02-24T00:00:00.000Z",
            value: 534,
          },
          {
            date: "2023-02-25T00:00:00.000Z",
            value: 576,
          },
          {
            date: "2023-02-26T00:00:00.000Z",
            value: 512,
          },
          {
            date: "2023-02-27T00:00:00.000Z",
            value: 591,
          },
          {
            date: "2023-02-28T00:00:00.000Z",
            value: 615,
          },
          {
            date: "2023-03-01T00:00:00.000Z",
            value: 569,
          },
          {
            date: "2023-03-02T00:00:00.000Z",
            value: 635,
          },
        ],
      },
    ],
    []
  );

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.date as unknown as Date,
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="w-full aspect-video">
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
