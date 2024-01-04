import { Injectable } from '@angular/core';

@Injectable()
export class StateStackMemoryService {

    stack = [];
    MAXIMUM_STATES_ON_STACK = 10;
    sessionStorage;

    constructor(private window: Window) {
       this.sessionStorage = this.window.sessionStorage;
    }

    private newStateObject = (stateName, type) =>
    ({
        name: stateName,
        type,
        time: new Date()

    });

    addStateToStackMemory = (inState, type) => {
        const newState = this.newStateObject(inState, type);
        this.addState(newState);
        this.sessionStorage.setItem('stateStack', JSON.stringify(this.stack));
    };

    private addState = (st) => {
        this.stack.push(st);
        if (this.stack.length > this.MAXIMUM_STATES_ON_STACK) {
            //remove the oldest state
            this.stack = this.stack.slice(1);
        }
    };

    getLastState = () => this.stack[this.stack.length - 1] || { name: '' };

    popState = () => this.stack.pop();

    getStateStack = () => {

        let stack1 = this.stack;
        if (this.sessionStorage) {
            const stack2: [] = JSON.parse(this.sessionStorage.getItem('stateStack'));
            if (stack2.length > stack1.length) {
                stack1 = stack2;
            }
        }
        return stack1;

    };

    printStack = () => {
        let str = '';
        const stack = this.getStateStack();

        if (stack !== null) {
            
            stack.forEach(st => {
                str = str + '(' + st.name + ' :: ';
                const time = st.time;
                if (time) {
                    str = str + time + ') ';
                } else {
                    str = str + (time.getMonth() + 1) +
                        '/' + time.getDate() + '/' + time.getFullYear() +
                        ' ' + time.getHours() + ':' + time.getMinutes() +
                        ':' + time.getSeconds() + ') ';
                }
            });

        }
        return str;

    };
}
