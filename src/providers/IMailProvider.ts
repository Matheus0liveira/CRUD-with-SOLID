export interface IAddress {
  name: string;
  email: string;
};

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
};

export interface IMailProvider { 
  sendEmail(message: IMessage): Promise<void>;
};