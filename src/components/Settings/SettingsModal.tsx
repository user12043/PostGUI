import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AccountsTab from './AccountsTab';
import ApiTab from './ApiTab';

function TabPanel(props: { children?: React.ReactNode, index: any, value: any }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: '80vw',
    minHeight: '80vh',
    maxWidth: 'unset'
  },
  closeButton: {
    width: '20px',
    position: 'absolute',
    right: '10px',
    top: '8px',
    zIndex: 10
  }
}));

export default function SettingsModal(props: { open: boolean, handleSettingsToggle: () => void, role: Nullable<string> }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleSettingsToggle}
      maxWidth={false}
    >
      <IconButton className={classes.closeButton} size="small" color="inherit" onClick={props.handleSettingsToggle} aria-label="close">
        <CloseIcon />
      </IconButton>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Accounts" {...a11yProps(0)} />
            <Tab label="Api" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AccountsTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ApiTab />
        </TabPanel>
      </div>
    </Dialog>
  );
}