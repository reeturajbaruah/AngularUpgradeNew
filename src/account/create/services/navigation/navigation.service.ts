import { Injectable } from '@angular/core';
import { States } from 'account/create/states';


@Injectable()
export class NavigationService {

    private start = {
        name: '',
        next: null,
        prev: null
    };

    private vehicles = {
        name: States.VehicleInfo,
        next: null,
        prev: null
    };

    private payment = {
        name: States.PaymentInfo,
        next: null,
        prev: null
    };

    private delivery = {
        name: States.DeliveryMethod,
        next: null,
        prev: null
    };

    review = {
        name: States.Review,
        next: null,
        prev: null
    };

    constructor() {
        this.start = this.vehicles;
    }

    setOrder(isFlexPay) {
        this.start = this.vehicles;

        if (!isFlexPay) {
            this.vehicles.next = this.payment;

            this.payment.next = this.delivery;
            this.payment.prev = this.vehicles;

            this.delivery.prev = this.payment;
            this.delivery.next = this.review;

            this.review.prev = this.delivery;
        } else {
            this.vehicles.next = this.delivery;
            this.delivery.prev = this.vehicles;
            this.delivery.next = this.payment;

            this.payment.prev = this.delivery;
            this.payment.next = this.review;

            this.review.prev = this.payment;
        }
    }

    navigation(currentState: string) {

        let current = this.start;
        while (current.name !== currentState) {
            current = current.next;
        }
        return {
            prev: current.prev,
            next: current.next
        };
    }

    skipStep(stepToSkip: string) {

        let current = this.start;
        while (current && (current.name !== stepToSkip)) {
            current = current.next;
        }

        if (current) {
            const removeState = current;

            const prevState = removeState.prev;
            const nextState = removeState.next;
            prevState.next = nextState;
            nextState.prev = prevState;
            return true;
        } else {
            return false;
        }

    }

    addStep(step: string, addAfterStep: string) {

        let current = this.start;
        while (current && (current.name !== addAfterStep)) {
            current = current.next;
        }

        let stepToAdd;

        if (current) {
            [this.delivery, this.payment, this.review].forEach(obj => {
                if (obj.name === step) {
                    stepToAdd = obj;
                }
            });

            if (current.next !== stepToAdd) {
                const next = current.next;
                current.next = stepToAdd;
                stepToAdd.prev = current;
                stepToAdd.next = next;
                next.prev = stepToAdd;
            }

        }

    }
}
