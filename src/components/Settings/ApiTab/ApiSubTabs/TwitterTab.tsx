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

export default function TwitterTab() {
  const classes = useStyles();

  const onSubmit = () => {
    // TODO
  }

  return (
    <form onSubmit={(e) => { e.preventDefault() }} className={classes.root} noValidate autoComplete="off">
      <div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Api Key: </span>
          <TextField label="Required" required id="apiKey" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Api Secret: </span>
          <TextField label="Required" required id="apiSecret" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Access Token: </span>
          <TextField label="Required" required id="accessToken" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Access Secret: </span>
          <TextField label="Required" required id="accessSecret" variant="outlined" />
        </div>
        <Button className={classes.submitButton} variant="outlined" type="submit" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </form>
  );
}
