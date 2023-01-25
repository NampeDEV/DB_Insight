import IconButton from '@mui/material/IconButton';
import { Paper , Chip , Box }  from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@aiscore/core/FuseSvgIcon';
import { selectWidgets } from '../../../store/widgetsSlice';

function TopRobotAttendedWidget() {
  const widgets = useSelector(selectWidgets);
  const series = [20,80];
  const labels = ['Attened','UnAttended'];
  const theme = useTheme();

  const chartOptions = {
    chart: {
      animations: {
        speed: 1000,
        animateGradually: {
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 20
      }
    },
    colors: ['#f5a947', '#F1CD60'],
    labels: ['Attened','UnAttended'],
 
    stroke: {
      colors: [theme.palette.background.paper],
    },
    series: [80,20],
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: true,
      theme: 'dark',
      custom: ({ seriesIndex, w }) =>
        `<div class="flex items-center h-32 min-h-32 max-h-2 px-12">
            <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
            <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
            <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
        </div>`,
    },
  };

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-8 pt-12">
        <Typography
          className="px-16 text-lg font-medium tracking-tight leading-6 truncate"
          color="text.secondary"
        >
          Robot Utilization ( Attended )
        </Typography>
        <IconButton aria-label="more" size="large">
          <FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
        </IconButton>
      </div>
      <div className="flex flex-col flex-auto h-192">
        <ReactApexChart
          className="flex flex-auto items-center justify-center w-full h-full"
          options={chartOptions}
          series={series}
          type={chartOptions.chart.type}
          height={chartOptions.chart.height}
        />
      </div>
 
    </Paper>
  );
}

export default memo(TopRobotAttendedWidget);
