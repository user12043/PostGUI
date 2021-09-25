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

export default function S3Tab() {
  const classes = useStyles();

  const onSubmit = () => {
    // TODO
  }

  return (
    <form onSubmit={(e) => { e.preventDefault() }} className={classes.root} noValidate autoComplete="off">
      <div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Access Key ID: </span>
          <TextField label="Required" required id="accessKeyId" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Secret Access Key: </span>
          <TextField label="Required" required id="secretAccessKey" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Default Region: </span>
          <TextField label="Required" required id="defaultRegion" variant="outlined" />
        </div>
        <div className={classes.fieldsContainer}>
          <span className={classes.textFieldNames}>Bucket Name: </span>
          <TextField label="Required" required id="bucketName" variant="outlined" />
        </div>
        <Button className={classes.submitButton} variant="outlined" type="submit" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </form>
  );
}
