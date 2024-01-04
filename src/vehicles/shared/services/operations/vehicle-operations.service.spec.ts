
// // // //   it('can deactivate eztag', async () => {

// // // //     const tag = {
// // // //         acctTagStatus: 'A',
// // // //         tagStatusDesc: 'Active'
// // // //     } as IEZTag;

// // // //     const result = await managerService.deactivateVehicle(tag, VehicleProduct.eztag);

// // // //     expect(webApi.switchTagStatus).toHaveBeenCalledWith({
// // // //         tagToSwitch: {
// // // //             acctTagStatus: 'I',
// // // //             tagStatusDesc: 'Inactive' 
// // // //         }
// // // //     } as any);

// // // //     expect(webApi.updateVehicleFromAccountInformation).not.toHaveBeenCalled();

// // // // });


// // // it('can deactivate ez plate', async () => {

// // //     const plate = {
// // //         pbpEndDate: new Date('2021-12-27T17:42:00.000Z')
// // //     } as any;

// // //     spyOn(managerService, 'getDate').and.returnValue(new Date('2020-11-19T15:35:01.000Z'));

// // //     const result = await managerService.deactivateVehicle(plate, VehicleProduct.ezplate);

// // //     expect(webApi.updateVehicleFromAccountInformation).toHaveBeenCalledWith({
// // //         pbpEndDate: new Date('2020-11-19T15:35:01.000Z').toISOString(),
// // //         transactionId: -1,
// // //         tagSalesAmt: 0,
// // //         depositAmt: 0,
// // //         totalAmt: 0
// // //     } as any);

// // //     expect(webApi.switchTagStatus).not.toHaveBeenCalled();

// // // });

// // // it('can call webapi', async () => {

// // //     const vehicle = { tagId: 'test' } as IEZTag;
// // //     const response = {} as any;

// // //     (webApi.updateVehicleFromAccountInformation).and.resolveTo(response);

// // //     const result = await managerService.edit(vehicle);

// // //     expect(webApi.updateVehicleFromAccountInformation).toHaveBeenCalledWith({
// // //         ...vehicle,
// // //         transactionId: -1,
// // //         tagSalesAmt: 0,
// // //         depositAmt: 0,
// // //         totalAmt: 0
// // //     });

// // //     expect(result).toEqual(response);
// // // });


// // it('should get a date', () => {
// //     const date = managerService.getDate();

// //     expect(date).toBeInstanceOf(Date);
// // });


// describe('queryVehicles', () => {

//     const searchAccountTagsResult = {} as IManageEzTagResponse;
//     const getEZTagInfoResult = {} as IManageEzTagResponse;

//     beforeEach(() => {
//         (webApi.searchAccountTags as jasmine.Spy).and.resolveTo(searchAccountTagsResult);
//         (webApi.getEZTagInfo as jasmine.Spy).and.resolveTo(getEZTagInfoResult);
//     });

//     [
//         {query: undefined, method: 'getEZTagInfo', result: getEZTagInfoResult},
//         {query: null, method: 'getEZTagInfo', result: getEZTagInfoResult},
//         {query: { searchValue: undefined }, method: 'getEZTagInfo', result: getEZTagInfoResult},
//         {query: { searchValue: null }, method: 'getEZTagInfo', result: getEZTagInfoResult},
//         {query: { searchValue: 'search' }, method: 'searchAccountTags', result: searchAccountTagsResult}
//     ].forEach(({ query, method, result })=>{

//         it(`calls correct method: ${method}, with query ${JSON.stringify(query)}`, async () => {

//             const queryResult = await managerService.queryVehicles(query);
//             const arg = query?.searchValue ? [query] : [];
//             expect(webApi[method]).toHaveBeenCalledWith(...arg);
//             expect(queryResult).toBe(result);
//         });

//     });

// });


// describe('submitOrder', () => {

//     it('returns API call information', async () => {
//         webApi.confirmAddTags.and.resolveTo({} as BaseResponse);

//         const res = await managerService.submitOrder();

//         expect(webApi.confirmAddTags).toHaveBeenCalled();
//         expect(res).not.toBeNull();
//     });
// });