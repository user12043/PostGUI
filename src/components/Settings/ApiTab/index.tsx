import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FaceBookTab from './ApiSubTabs/FacebookTab';
import GoogleAdsTab from './ApiSubTabs/GoogleAdsTab';
import TwitterTab from './ApiSubTabs/TwitterTab';
import S3Tab from './ApiSubTabs/S3Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  boxes: {

  }
}));

export default function ApiTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Facebook" {...a11yProps(0)} />
        <Tab label="Google Ads" {...a11yProps(1)} />
        <Tab label="Twitter" {...a11yProps(2)} />
        <Tab label="S3" {...a11yProps(3)} />
        <Tab label="SFTP" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box className={classes.boxes}>
          <FaceBookTab />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box className={classes.boxes}>
          <GoogleAdsTab />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box className={classes.boxes}>
          <TwitterTab />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box className={classes.boxes}>
          <S3Tab />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box className={classes.boxes}>
          <TwitterTab />
        </Box>
      </TabPanel>
    </div>
  );
}
