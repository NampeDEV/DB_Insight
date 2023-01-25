import IconButton from '@mui/material/IconButton';
import { Paper , Chip , Box ,Tab ,Tabs}  from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import { memo , useState} from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

function ThirdTopSuccessWidget() {
  const series = [72,22,8];
  const labels = ['Robot1','Robot2','Robot3'];
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const ranges = ['Weekly','Monthly'];

  const chartOptions = {
    chart: {
      animations: {
        speed: 1000,
        animateGradually: {
          enabled: true,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      type: 'donut',
      sparkline: {
        enabled: false,
      },
    },
    labels ,
    plotOptions: {
      pie: {
        customScale: 0.7,
        expandOnClick: false,
        donut: {
          size: '50%',
        },
      },
    },
    stroke: {
      colors: [theme.palette.background.paper],
    },
    series ,
 
  };

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography
          className="px-16 text-lg font-medium tracking-tight leading-6 truncate"
          color="text.secondary"
        >
         Top 10 Robots with Errors
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
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series}
          type={chartOptions.chart.type}
        />
      </div>
   
    </Paper>
  );
}

export default memo(ThirdTopSuccessWidget);
