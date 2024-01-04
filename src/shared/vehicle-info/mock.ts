import { IEZTag, IVehicleConfig, IVehiclesCartList } from 'shared/vehicle-info/models';
import { SiteCoreItem } from 'cms/cms.module';
import { TagType } from 'common/models';

export const mockVehicle: IEZTag = {
    tagId: TagType.Tag,
    fullTagId: TagType.Tag,
    acctTagSeq: -1,
    acctTagSeqSepcified: true,
    acctTagStatus: 'Test tag status text',
    tagStatusDesc: 'Test tag status description text',
    pbpStartDate: '2023-01-01',
    pbpEndDate: '2023-12-31',
    tagTypeCode: TagType.Tag,
    activePbpTagExist: false,
    tagless_Desc: 'Test tagless description text',
    acctVehicleId: 123456789,
    nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: false,
    licState: 'TX',
    licPlate: 'ABC123',
    vehicleYear: '2023',
    vehicleModel: 'Model 3',
    vehicleMake: 'Tesla',
    vehicleColor: 'Blue',
    vehicleClassCode: 2,
    vehicleClassDesc: '2-Axel',
    temporaryLicPlate: false,
    motorcycle: false,
    nickname: 'Test nickname text',
    isMotorcycleDisabled: false
};

export const mockConfig: IVehicleConfig = {
    ezTagOptionConfig: {
        ezTagOrder: {
            flag: true,
            msgWhenMotorcyleNotOpted: 'Test motorcycle not opted text',
            msgWhenMotorcyleOpted: 'Test motorcycle opted text',
            warningDesc: 'Test warning description text'
        },
        motorcycle: { message: 'Test motorcycle message text' }
    }
};

export const mockCartListData: IVehiclesCartList = {
    title: 'Test title text',
    context: 'Test context text',
    vehicleDetailsHeader: 'Test header text',
    modalContent: {
        edit: { ItemID: '1', Title: 'Test edit text', LongDescription: 'Test description text' } as SiteCoreItem,
        remove: { ItemID: '2', Title: 'Test remove text', LongDescription: 'Test description text' } as SiteCoreItem,
        cancel: { ItemID: '3', Title: 'Test cancel text', LongDescription: 'Test description text' } as SiteCoreItem,
        add: { ItemID: '4', Title: 'Test add text', LongDescription: 'Test description text' } as SiteCoreItem,
    },
    ezTags: [mockVehicle],
    states: [{ stateCode: 'TX' }],
    config: mockConfig
};
