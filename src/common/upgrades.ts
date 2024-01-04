import { createProvider, generateProviderInjection } from 'hybrid/module';

// Custom injection token for accessing the configuration retrieved from the global scope
const environmentConfig = createProvider('environmentConfig', () => globalThis.hctraEnvironmentConfiguration.webUiToggles);
export const ENVIRON_CONFIG = environmentConfig.token;

const serverConstants = createProvider('serverConstants', ()=> ({
    ...globalThis.hctraEnvironmentConfiguration.environmentServerConstants,
    ...globalThis['hctraHashFileNames'],
    ...globalThis['hctraWebUiConstants']
}));
export const SERVER_CONSTANTS = serverConstants.token;

// AngularJS injection tokens
const authEvents = generateProviderInjection('AUTH_EVENTS');
export const AUTH_EVENTS = authEvents.token;

const appLifeCycleEvents = generateProviderInjection('APP_LIFECYCLE_EVENTS');
export const APP_LIFECYCLE_EVENTS = appLifeCycleEvents.token;

// Aggregates all providers into a single array for easy injection at the module level.
export const providers = [
    environmentConfig,
    serverConstants,
    authEvents,
    appLifeCycleEvents,
].map(x => x.provider);
