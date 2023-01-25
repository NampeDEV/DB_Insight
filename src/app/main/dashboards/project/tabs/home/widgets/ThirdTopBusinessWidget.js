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

function ThirdTopBusinessWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { overview,  labels } = widgets?.taskDistribution;
  const [tabValue, setTabValue] = useState(0);
  const ranges = ['Weekly','Monthly'];
  const currentRange = Object.keys(ranges)[tabValue];
  const [awaitRender, setAwaitRender] = useState(true);
  const theme = useTheme();

 

  const Options = {
    animations: {
      speed: 1000,
      animateGradually: {
        enabled: true,
      },
    },
    height: 400,
    series: [{
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]}],
    chart: {
      type: 'treemap',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    }
 
 
  };

 

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
          Top 10 Busiest Robots by Processs Name
        </Typography>
        <div className="mt-12 sm:mt-0 sm:ml-8">
          <Tabs
            value={tabValue}
            onChange={(ev, value) => setTabValue(value)}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="-mx-4 min-h-40"
            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: 'text.disabled' }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
            {Object.entries(ranges).map(([key, label]) => (
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
                disableRipple
                key={key}
                label={label}
              />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="flex flex-col flex-auto mt-6">
        <ReactApexChart
          className="flex-auto w-full"
          options={Options}
          series={Options.series}
          type={Options.chart.type}
        />
      </div>
 
    </Paper>
  );
}

export default memo(ThirdTopBusinessWidget);
