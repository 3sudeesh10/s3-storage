'use client';
import React from "react";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";

import { Button, withAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react-storage/styles.css";
import "@aws-amplify/ui-react-storage/storage-browser-styles.css";

import config from "../amplify_outputs.json";
import { StorageBrowser } from "@aws-amplify/ui-react-storage";

Amplify.configure(config);

function Example() {
  return (
    <>
      <Button
        marginBlockEnd="xl"
        size="small"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
      <StorageBrowser />
    </>
  );
}

export default withAuthenticator(Example);
