import React, { Component } from "react";

import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

interface ILoginDialogProps {
  dbName: string;
  open: boolean;
  loginError: any;

  setUserEmailPassword: Function;
  handleLoginDialogCloseClick: React.ReactEventHandler<{}>;
}
interface ILoginDialogState {
  email: Nullable<string>;
  password: Nullable<string>;
  [x: number]: any;
  message: Nullable<string>;
}

export default class LoginDialog extends Component<
  ILoginDialogProps,
  ILoginDialogState
> {
  constructor(props: ILoginDialogProps) {
    super(props);
    this.state = {
      email: null,
      password: null,
      message: null,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick(e: any) {
    if (this.state.email && this.state.password) {
      this.props.setUserEmailPassword(this.state.email, this.state.password);
      // this.props.handleLoginDialogCloseClick(e);
    }
  }

  onChangeHandler(e: any) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  static getDerivedStateFromProps(
    props: ILoginDialogProps,
    state: ILoginDialogState
  ) {
    return { ...state, message: !props.open ? null : state?.message };
  }

  render() {
    return (
      <Dialog
        open={this.props.open || false}
        onClose={this.props.handleLoginDialogCloseClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Orion Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide your credentials for this database, it may allow you more
            privileges.
          </DialogContentText>
          {this.props?.loginError ? (
            <DialogContentText style={{ color: "red" }}>
              {this.props?.loginError?.response?.status === 403
                ? "Invalid username or password"
                : `Unknown Error: ${this.props?.loginError?.message}`}
            </DialogContentText>
          ) : null}
          {this.state?.message ? (
            <DialogContentText style={{ color: "blue" }}>
              {this.state.message}
            </DialogContentText>
          ) : null}
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            onChange={this.onChangeHandler}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="password"
            label="Password"
            type="password"
            onChange={this.onChangeHandler}
            fullWidth
          />
        </DialogContent>
        <Divider />
        <DialogActions>
          <a
            href={`mailto:info@arcanor.com?subject=Password reset request&body=Requesting new password for account: ${
              this.state.email || ""
            }`}
          >
            Request new password
          </a>
          <Button
            onClick={this.props.handleLoginDialogCloseClick}
            color="default"
          >
            Cancel
          </Button>
          <Button onClick={this.handleLoginClick} color="secondary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
