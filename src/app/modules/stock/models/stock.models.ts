export interface Serializable {
  serialize(): string;
}

export class SymbolSubscription implements Serializable {
  constructor(
    private symbol: string,
  ) { }

  serialize(): string {
    return JSON.stringify({
      type: 'subscribe',
      symbol: this.symbol,
    });
  }
}
