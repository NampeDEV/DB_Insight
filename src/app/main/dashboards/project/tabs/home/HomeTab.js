import { motion } from 'framer-motion';
import SummaryWidget from './widgets/SummaryWidget';
import OverdueWidget from './widgets/OverdueWidget';
import IssuesWidget from './widgets/IssuesWidget';
import FeaturesWidget from './widgets/FeaturesWidget';
import GithubIssuesWidget from './widgets/GithubIssuesWidget';
import TaskDistributionWidget from './widgets/TaskDistributionWidget';
import ScheduleWidget from './widgets/ScheduleWidget';
// Widget On Top Dasgboard  
import TopTotalUtilizationWidget from './widgets/TopTotalUtilizationWidget';
import TopRobotAttendedWidget from './widgets/TopRobotAttendedWidget';
import TopRobotUtiliWidget from './widgets/TopRobotUtiliWidget';
import TopProductivityHrWidget from './widgets/TopProductivityHrWidget';
// Widget On Second Dashboard
import SecondUnAttenedWidget from './widgets/SecondUnAttenedWidget';
import SecondAttenedWidget from './widgets/SecondAttenedWidget';
// Widget On Third Dashboard
import ThirdTopBusinessWidget from './widgets/ThirdTopBusinessWidget';
import ThirdTopErrorWidget from './widgets/ThirdTopErrorWidget';

function HomeTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <TopTotalUtilizationWidget />
      </motion.div>
      <motion.div variants={item}>
        <TopRobotAttendedWidget />
      </motion.div>
      <motion.div variants={item}>
        <TopRobotUtiliWidget />
      </motion.div>
      <motion.div variants={item}>
        <TopProductivityHrWidget />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4 lg:col-span-2">
        <SecondUnAttenedWidget />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4 lg:col-span-2">
        <SecondAttenedWidget />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4 lg:col-span-2">
        <ThirdTopErrorWidget />
      </motion.div> 
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4 lg:col-span-2">
        <ThirdTopBusinessWidget />
      </motion.div>
    </motion.div>
  );
}

export default HomeTab;
