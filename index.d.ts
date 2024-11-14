export {};

declare global {
  interface Window {
    BastyonSdk: typeof BastyonSdk;
  }

  class BastyonSdk {
    init(): Promise<ApplicationInfo>;
    emit(
      event: BastyonSdkEmitEvents,
      data?: unknown
    ): void;
    on<T extends BastyonSdkEvents>(
      event: T,
      callback: (data: unknown) => void
    ): void;
    off(
      event: BastyonSdkEvents,
      callback: (data: unknown) => void
    ): void;
    rpc(
      method: string,
      parameters?: unknown[],
      options?: RpcOptions
    ): Promise<unknown>;
    fetch(url: string, data?: unknown): Promise<unknown>;
    getroute(data: { route: string }): string;
    inbastyon(): boolean;
    openExternalLink(url: string): Promise<void>;

    get: {
      account(): Promise<AccountInfo>;
      balance(): Promise<unknown>;
      zaddress(): Promise<string>;
      geolocation(): Promise<Geolocation>;
      currency(): Promise<unknown>;
      imageFromMobileCamera(): Promise<unknown>;
      appinfo(): Promise<ApplicationInfo>;
      applink(path?: string): string;
      action(): Promise<unknown>;
      actions(): Promise<unknown[]>;
    };

    open: {
      post(txid: string): Promise<void>;
      donation(receiver: string): Promise<void>;
    };

    permissions: {
      check(params: { permission: string }): Promise<boolean>;
      request(permissions: string[]): Promise<void>;
    };

    payment(data: PaymentData): Promise<ActionResponse>;

    barteron: {
      account(data: unknown): Promise<unknown>;
      offer(data: unknown): Promise<unknown>;
      removeOffer(data: unknown): Promise<unknown>;
      comment(data: unknown): Promise<unknown>;
      vote(data: unknown): Promise<unknown>;
    };

    images: {
      upload(data: unknown): Promise<unknown>;
    };

    chat: {
      getOrCreateRoom(params: {
        users: string[];
        parameters: unknown;
      }): Promise<ChatRoom>;
      send(params: { roomid: string; content: unknown }): Promise<unknown>;
      openRoom(roomid: string): Promise<void>;
    };

    helpers: {
      alert(message: string): Promise<void>;
      opensettings(): Promise<void>;
      registration(): Promise<void>;
      userstate(): Promise<unknown>;
      share(data: ShareData): Promise<void>;
    };
  }

  type BastyonSdkEvents =
    | "block"
    | "state"
    | "action"
    | "balance"
    | "test"
    | "locale"
    | "theme"
    | "changestate";

  type BastyonSdkEmitEvents = "changestate" | "loaded";

  interface BastyonSdkEventData {}

  interface ApplicationInfo {
    id: string;
    name: string;
    version: number;
    theme: { rootid: string };
    margintop: string;
    production: boolean;
    project: ProjectConfig;
  }

  interface ProjectConfig {
    protocol: string;
    id: string;
  }

  interface AccountInfo {
    address: string;
    signature: string;
    status?: string;
  }

  interface PaymentData {
    recievers: Array<{ address: string; amount: number }>;
    feemode: string;
    message?: string;
  }

  interface ShareData {
    path?: string;
    sharing?: {
      image?: string;
      images?: string[];
      title?: string;
      html?: { body: string; preview: string };
      text?: { body: string; preview: string };
    };
  }

  interface ChatRoom {
    roomid: string;
    content: unknown;
  }

  interface Geolocation {
    latitude: number;
    longitude: number;
  }

  interface RpcOptions {
    rpc?: { fnode: string };
    fnode?: string;
  }

  interface ActionResponse {
    transaction?: unknown;
    completed?: boolean;
    rejected?: boolean;
    relay?: boolean;
    temp?: boolean;
  }
}

