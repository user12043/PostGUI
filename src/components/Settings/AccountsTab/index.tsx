import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
      display: 'flex',
      justifyContent: 'center'
    },
    fieldsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    textFieldNames: {
      width: '100px',
    },
    submitButton: {
      marginTop: '10px',
      float: 'right'
    }
  }),
);

export default function AccountsTab() {
  const classes = useStyles();

  const onSubmit = () => {
    // TODO
  };

  const downloadHistoryLogs = () => {
    // TODO
  };

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault() }} className={classes.root} noValidate autoComplete="off">
        <div>
          <div className={classes.fieldsContainer}>
            <span className={classes.textFieldNames}>Email: </span>
            <TextField label="Required" required id="email" variant="outlined" />
          </div>
          <div className={classes.fieldsContainer}>
            <span className={classes.textFieldNames}>Password: </span>
            <TextField label="Required" required id="password" variant="outlined" />
          </div>
          <Button className={classes.submitButton} variant="outlined" type="submit" onClick={onSubmit}>
            Save
          </Button>

          <div style={{ clear: 'both' }}></div>
          <span>SQL History Logs: &nbsp;&nbsp;&nbsp;</span>
          <IconButton
            onClick={downloadHistoryLogs}
            aria-label="downloadSqlHistory"
          >
            <GetAppRoundedIcon />
          </IconButton>
        </div>
      </form>
    </>);
}
