/* eslint-disable no-unused-vars */
declare module NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}
