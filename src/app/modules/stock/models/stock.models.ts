export interface Serializable {
  serialize(): string;
}

export enum MessageTypes {
  SUBSCRIBE = 'subscribe',
  TRADE = 'trade',
}

export class SymbolSubscription implements Serializable {
  constructor(
    private symbol: string,
  ) { }

  serialize(): string {
    return JSON.stringify({
      type: MessageTypes.SUBSCRIBE,
      symbol: this.symbol,
    });
  }
}

export interface Trade {
  symbol: string;
  price: number;
  date: Date;
  volume: number;
}

export type TradesMap = { [key: string]: Trade};
