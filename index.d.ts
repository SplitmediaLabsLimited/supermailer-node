import { AxiosInstance } from 'axios';

declare module '@splitmedialabs/supermailer-node' {
  type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

  export interface SupermailerConstructor {
    apiKey: string;
    apiUrl: string;
    namespace: string;
  }

  interface SendTransactionalArgs {
    templateGroup: string;
    recipientEmail: string;
    language: string;
    templateData: Record<string, string>;
    recipientName?: string;
    forceSend?: boolean;
  }

  export default class Supermailer {
    api: AxiosInstance;
    constructor(config: SupermailerConstructor);
    emails: {
      sendTransactional: (payload: SendTransactionalArgs) => Promise<JSONValue>;
    };
    Recipient: (email: String) => {
      data: { [x: string]: JSONValue };
      create: () => Promise<JSONValue>;
      delete: () => Promise<JSONValue>;
      logs: (offset: number, limit: number) => Promise<JSONValue>;
      read: () => Promise<JSONValue>;
      update: () => Promise<JSONValue>;

      addBoolean: (name: string, value: null | boolean) => boolean | null;
      addDate: (name: string, value: null | string | Date) => string | null;
      addEvent: (name: string, value: null | string) => string | null;
      addNumber: (name: string, value: null | number) => number | null;
      addString: (name: string, value: null | string) => number | null;
      addData: (obj: Record<string, unknown>) => { [x: string]: JSONValue };
    };
  }
}
