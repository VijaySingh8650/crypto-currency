export interface ICurrency {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export interface ICurrencyData {
    [key: string]: ICurrency;
}