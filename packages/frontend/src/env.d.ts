interface ImportMetaEnv {
  readonly VITE_WEB3STORAGE_TOKEN: string;
  readonly VITE_MORALIS_SERVER_URL: string;
  readonly VITE_MORALIS_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
