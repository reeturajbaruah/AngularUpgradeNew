/* eslint-disable prefer-arrow/prefer-arrow-functions */

export function UsStatesResolver(token: string) {
    return {
        token,
        deps: ['genericRepo', 'responseErrorService', 'maintenanceResolve'],
        resolveFn: (genericRepo, responseErrorService, maintenanceResolve) => {
            if (maintenanceResolve) {
                return genericRepo.dataFactory.getStates().then(response => {
                    if (response.errors.length === 0) {
                        return response.states;
                    } else {
                        responseErrorService.displayErrorsFromResponse(response);
                        return;
                    }
                });
            }
        }
    };
}

export function CountryResolver(token: string) {
    return {
        token,
        deps: ['genericRepo', 'responseErrorService', 'maintenanceResolve'],
        resolveFn: (genericRepo, responseErrorService, maintenanceResolve) => {
            if (maintenanceResolve) {
                return genericRepo.dataFactory.getCountries().then(response => {
                    if (responseErrorService.isErrorFree(response)) {
                        return response.countries;
                    } else {
                        responseErrorService.displayErrorsFromResponse(response);
                        return;
                    }
                });
            }
        }
    };
}
