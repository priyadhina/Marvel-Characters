/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, any>;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_MARVEL_API_KEY: string;
  readonly VITE_MARVEL_TS: string;
  readonly VITE_MARVEL_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
