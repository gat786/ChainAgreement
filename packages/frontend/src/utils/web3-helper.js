// import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';

// function getAccessToken() {
//   // If you're just testing, you can paste in a token
//   // and uncomment the following line:
//   // return 'paste-your-token-here'

//   // In a real app, it's better to read an access token from an 
//   // environement variable or other configuration that's kept outside of 
//   // your code base. For this to work, you need to set the
//   // REACT_APP_WEB3_TOKEN environment variable before you run your code.
//   return process.env.REACT_APP_WEB3_TOKEN
// }

// function makeStorageClient() {
//   return new Web3Storage({ token: getAccessToken() })
// }

// export function makeFileObject(data) {
//   const blob = new Blob([data,{type: 'text/markdown'}])
//   const files = [
//     new File([blob], 'agreement.md')
//   ]
//   return files;
// }

// export async function storeFiles(files) {
//   const client = makeStorageClient()
//   const cid = await client.put(files)
//   console.log('stored files with cid:', cid)
//   return cid
// }