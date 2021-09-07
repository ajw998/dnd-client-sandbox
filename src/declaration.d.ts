declare module '*.css' {
  const mapping: Record<string, string>;
  export default mapping;
}

declare module '*.scss' {
  const mapping: Record<string, string>;
  export default mapping;
}

declare var __ENV__: string;
declare var __PROJECT_ID__: string;
declare var __FIREBASE_API_KEY__: string;
declare var __FEATURE_CHARACTER_DETAILS__: boolean;
declare var __FEATURE_CALCULATOR__: boolean;
declare var __SUPER_ADMIN_ID__: string;
declare var __FIREBASE_AUTH_DOMAIN__: string;
declare var __APP_ID__: string;
declare var __STORAGE_BUCKET__: string;
declare var __MESSAGING_SENDER_ID__: string;
