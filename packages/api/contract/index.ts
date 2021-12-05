import express from "express";
import { Web3Storage } from "web3.storage";

const router = express.Router();

function getAccessToken(): string {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.WEB3STORAGE_TOKEN ? process.env.WEB3STORAGE_TOKEN : '';
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

router.get("/", (req, res) => {
  res.send("You have reached contracts endpoint");
});

router.post("/", (req, res) => {
  res.send("Creating a contract on ipfs");
});

export default router;
