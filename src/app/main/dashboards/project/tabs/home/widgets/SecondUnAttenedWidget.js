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

function SecondUnAttenedWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { overview, series, labels } = widgets?.taskDistribution;
  const [tabValue, setTabValue] = useState(0);
  const ranges = ['Weekly','Monthly'];
  const currentRange = Object.keys(ranges)[tabValue];
  const [awaitRender, setAwaitRender] = useState(true);
  const theme = useTheme();

  console.log(series[currentRange]) ;

  const Options = {
    series: [{
    name: 'ROBOT1',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'ROBOT2',
    data: [1, 1, 1, 1, 13, 27]
  }, {
    name: 'ROBOT3',
    data: [11, 17, 15, 1, 1, 14]
  }, {
    name: 'ROBOT4',
    data: [13, 23, 5, 1, 1, 27]
  }, {
    name: 'ROBOT5',
    data: [11, 17, 4, 1, 1, 14]
  }, {
    name: 'ROBOT6',
    data: [13, 3, 1, 8, 1, 27]
  }, {
    name: 'ROBOT7',
    data: [2, 17, 15, 1, 21, 14]
  }, {
    name: 'ROBOT8',
    data: [1, 7, 25, 33, 44, 8]
  }],

    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT','01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT', '01/13/2011 GMT', '01/14/2011 GMT',
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

 
  const chartOptions = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      stacked: true,
      type: 'bar',
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    legend: {
        position: 'right',
        offsetY: 40
      },
    // plotOptions: {
    //   polarArea: {
    //     spokes: {
    //       connectorColors: theme.palette.divider,
    //     },
    //     rings: {
    //       strokeColor: theme.palette.divider,
    //     },
    //   },
    // },
    plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
          '01/05/2011 GMT', '01/06/2011 GMT'
        ],
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
  };

  console.log(chartOptions.labels) ;


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
          Avg Utilization/Day per Robot ( Unattended )
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

export default memo(SecondUnAttenedWidget);
