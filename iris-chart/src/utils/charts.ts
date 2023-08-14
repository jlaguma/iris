/**
 *
 * Helper utils related to charts.
 *
 */

export const buildOptions = (d) => {
  const data = d.data;

  const newData = [];
  const series = [];
  const title = data.title;
  const yAxisTitle = data.yAxis;
  const points = data.data;
  const numberOfCharts = data.variables.length;
  const plots = data.plots;
  const step = data.step;
  const starttime = data.starttime;
  const dateObj = new Date(starttime * 1000);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();

  // Format the data into the shape understood by Highcharts
  for (let i = 0; i < numberOfCharts; i++) {
    newData.push([]);
  }

  for (let point = 0; point < points.length; point++) {
    const pointData = points[point];

    for (let col = 0; col < pointData.length; col++) {
      const pt = pointData[col];
      newData[col].push(pt);
    }
  }

  for (let i = 0; i < numberOfCharts; i++) {
    const name = data.variables[i];
    const pl = plots.filter((p) => p.name === name);
    let type = pl?.[0]?.type.toLowerCase() ?? 'area';
    type = type === 'print' ? 'line' : type;
    const color = pl?.[0]?.colour ?? '#000000';

    const obj =
      type === 'line'
        ? {
            type: 'area',
            name: data.variables[i],
            data: newData[i],
            color: color,
            dashStyle: type === 'line' ? 'Dash' : 'Solid',
            fillColor: type === 'line' ? 'none' : color,
          }
        : {
            type: 'area',
            name: data.variables[i],
            data: newData[i],
            color: color,
          };

    series.push(obj);
  }

  // Highchart Options object.
  return {
    title: {
      text: title,
    },
    xAxis: {
      allowDecimals: true,
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: yAxisTitle,
      },
    },
    plotOptions: {
      area: {
        pointStart: Date.UTC(year, month, date),
        pointInterval: step * 1000,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: series,
  };
};
