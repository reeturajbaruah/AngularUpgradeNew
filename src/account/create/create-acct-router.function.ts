import { States } from 'account/create/states';


export const CreateAccountNavigateFunction = (apiAuthResponse: any) => {


    const newAccountStep = apiAuthResponse.newAccountStep !== undefined
        ? apiAuthResponse.newAccountStep : undefined;

    if (newAccountStep && newAccountStep.accountComplete !== undefined
        && newAccountStep.currentStep !== undefined) {


        return {
            isLoginCompleted: true,
            twoFactor: {
                authenticate: true,
                routeState: States.PhoneValidation
            },

            state: getState(newAccountStep)
        };
    } else {

        return {
            isLoginCompleted: false
        };
    }
};

export const kioskRouter = (currentStep: number) => getRouteState(currentStep);

export const webuiRouter = (currentStep: number) => getRouteState(currentStep);

const getState = (newAccountStep: { accountComplete: boolean; currentStep: number }) => {

    if (!newAccountStep.accountComplete) {
        return getRouteState(newAccountStep.currentStep);
    }
};

const getRouteState = (currentStep: number) => {

    switch (currentStep) {

        case 3:
            return States.VehicleInfo;

        case 4:
            return States.PaymentInfo;

        case 5:
            return States.DeliveryMethod;

        case 6:
            return States.Review;

        default:
            return States.Login;

    }
};

