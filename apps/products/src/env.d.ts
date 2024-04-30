declare interface Env extends Readonly<Record<string, string>> {
  readonly NG_APP_TENANT: string;
}

declare interface ImportMeta {
  readonly env: Env;
}