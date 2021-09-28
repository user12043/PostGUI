import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";

const ExternalTransfer = ({
  buildURL,
  prepareHeaders,
  onResult,
  outFileName,
}) => {
  const action = async () => {
    try {
      const response = await axios.post("http://localhost:8080/query", {
        url: buildURL(),
        headers: prepareHeaders(),
        outFileName,
      });
      onResult(`${response.data?.resultCount} row(s) affected`);
    } catch (error) {
      onResult(error.message);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          FTP Transfer
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={action}>Start Transfer</Button>
      </CardActions>
    </Card>
  );
};

export default ExternalTransfer;
