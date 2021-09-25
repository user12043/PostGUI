import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
    fieldsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    textFieldNames: {},
    submitButton: {
      float: 'right',
      marginTop: '10px',
    }
  }),
);

export default function FacebookTab() {
  const classes = useStyles();

  const onSubmit = () => {
    // TODO
  }

  return (
    <form onSubmit={(e) => { e.preventDefault() }} className={classes.root} noValidate autoComplete="off">
      <div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Account ID: </span>
          <TextField label="Required" required id="accountId" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>App Token: </span>
          <TextField label="Required" required id="appToken" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>User Token: </span>
          <TextField label="Required" required id="userToken" variant="outlined" />
        </div>
        <Button className={classes.submitButton} variant="outlined" type="submit" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </form>
  );
}
