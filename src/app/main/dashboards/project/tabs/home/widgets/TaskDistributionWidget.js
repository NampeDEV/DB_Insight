import Paper from '@mui/material/Paper';
import { lighten, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { selectWidgets } from '../../../store/widgetsSlice';

function TaskDistributionWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { overview, series, labels, ranges } = widgets?.taskDistribution;
   const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges)[tabValue];
  const [awaitRender, setAwaitRender] = useState(true);

  const theme = useTheme();

  const chartOptions = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'polarArea',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    labels,
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        spokes: {
          connectorColors: theme.palette.divider,
        },
        rings: {
          strokeColor: theme.palette.divider,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.75,
        },
      },
    },
    stroke: {
      width: 2,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: theme.palette.secondary.main,
        shadeIntensity: 0.75,
        shadeTo: 'dark',
      },
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
  console.log(chartOptions.chart.type);


  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }
  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Task Distribution
        </Typography>
      </div>
      <div className="flex flex-col flex-auto mt-6">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series[currentRange]}
          type={chartOptions.chart.type}
        />
      </div>
 
    </Paper>
  );
}

export default memo(TaskDistributionWidget);
