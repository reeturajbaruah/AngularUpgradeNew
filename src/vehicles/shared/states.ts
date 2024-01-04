import { States as addEzTagStates } from '../eztag/add/states';
import { States as addEzPlateStates } from '../ezplate/add/states';
import { States as replaceEzTagStates } from '../eztag/replacement/states';
import { States as mvuStates } from '../mvu/states';

export const States = {
    Root: 'ManageVehicles',
    ...addEzTagStates,
    ...addEzPlateStates,
    ...replaceEzTagStates
};

export const KioskStates = { ...States };

export const WebUIStates = { ...States, ...mvuStates };

