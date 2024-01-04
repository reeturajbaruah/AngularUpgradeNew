export interface CreditCardInputStrategy {
    submit(): Promise<boolean>;
    setData?: (data: any) => void;
}

export enum StratetegiesEnum {
    Tripos,
    Vantiv,
    Litel,
    SnapPayWeb,
    SnapPayKiosk
}

export const StrategiesExecutionOrder = [
    { order: 1, strategy: StratetegiesEnum.SnapPayKiosk },
    { order: 2, strategy: StratetegiesEnum.Tripos },
    { order: 3, strategy: StratetegiesEnum.SnapPayWeb },
    { order: 4, strategy: StratetegiesEnum.Vantiv },
    { order: 5, strategy: StratetegiesEnum.Litel }
];

