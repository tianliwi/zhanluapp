export class ReportSummary {
    market_val: number;
    par_val: number;
    accr_int: number;
    total_val: number;
    est_annual_income: number;
    num_pos: number;
    avg_coupon: number;
    avg_maturity: number;
    avg_dura: number;
    avg_yield_maturity: number;
    avg_yield_callworst: number;
    avg_credit_rating: string;
    avg_underlying_rating: string;
}

export class Breakdown {
    name: string;
    value: number;
    pct: number;
}

export class RiskReport {
    portfolio_id: string;
    portfolio_name: string;
    summary: ReportSummary = {};
    breakdown_rating: Breakdown[] = [];

    constructor() {
    }
}