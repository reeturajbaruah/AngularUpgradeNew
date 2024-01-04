module HCTRA.Datastructure {
    "use strict";

    export interface ICircularList<T> {
        /** Moves read head one position to the left;
         *  returns element moved to
         */
        moveHeadLeft(): T;
        /** Moves read head one position to the left;
         *   returns element moved to
         */
        moveHeadRight(): T;
        peekCurrent(): T;
        peekLeft(): T;
        peekRight(): T;
    }

    export class CircularList<T> implements ICircularList<T> {

        private headPosition = 0;
        private baseArray: T[];

        constructor(inArray: T[]) {

            if (!inArray || !angular.isArray(inArray)) {
                throw new TypeError("Circular list requires an array");
            } else {
                this.baseArray = [].concat(inArray);
            }
        }

        public moveHeadLeft = (): T => {

            this.shiftHeadPosition(-1);
            return this.peekCurrent();
        };

        public moveHeadRight = (): T => {

            this.shiftHeadPosition(1);
            return this.peekCurrent();
        };

        public peekCurrent = (): T => {

            return this.baseArray[this.headPosition];
        };

        public peekLeft = (): T => {

            let oldPosition: number = this.headPosition;
            let value: T = this.moveHeadLeft();
            this.headPosition = oldPosition;

            return value;
        };

        public peekRight = (): T => {

            let oldPosition: number = this.headPosition;
            let value: T = this.moveHeadRight();
            this.headPosition = oldPosition;

            return value;
        };

        private shiftHeadPosition = (relativePosition: number): number => {

            var newHeadPosition: number = (relativePosition + this.headPosition);

            // Check intended to prevent unneeded use of expensive mod operation
            if (newHeadPosition < 0 || newHeadPosition >= this.baseArray.length) {

                // Should keep the headPosition between 0 and (length - 1)
                newHeadPosition = HCTRA.HctraMath.mod(newHeadPosition, this.baseArray.length);
            }

            this.headPosition = newHeadPosition;
            return this.headPosition;
        };
    }
}