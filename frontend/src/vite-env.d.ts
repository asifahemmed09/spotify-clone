/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
  readonly MODE: string
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}