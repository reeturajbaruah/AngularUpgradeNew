module HCTRA {

    export class HctraMath {

        /** Returns dividend mod divisor; both must be integers */
        public static mod = (dividend: number, divisor: number): number => {

            if (!HCTRA.HctraMath.isInteger(dividend) || !HCTRA.HctraMath.isInteger(divisor))
                return;

            let remainder = dividend % divisor;
            let moddedValue;

            if (!HCTRA.HctraMath.isBetweenBaseAndZero(remainder, divisor))
                moddedValue = remainder + divisor;
            else
                moddedValue = remainder;

            return moddedValue;
        };

        public static isInteger = (value: number) => {

            return typeof value === 'number' &&
                isFinite(value) &&
                (<any>window).Math.floor(value) === value;
        };

        public static isBetweenBaseAndZero = (value: number, base: number) => {

            if (HCTRA.HctraMath.isNegative(base))
                return value > base && value <= 0;
            else
                return value < base && value >= 0;
        };

        public static isNegative = (value: number) => {

            return value < 0;
        };
    }
}