export interface IPortfolioEntry {
    id: string;
    name: string;
    updated: string;
}

export interface ISecurity {
    id: string;
    name: string;
    par: number;
    updated: string;
}

export interface ITrade {
    bond_id: string;
    trade_date: string;
    par: number;
    price: number;
}
