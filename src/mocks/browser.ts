import { setupWorker } from 'msw/browser'
import { handlers } from './handlers' 
import { scenarios } from './products.mocks';

const scenarioName = new URLSearchParams(window.location.search).get(
    "scenario"
);
console.log(scenarioName);

const runtimeScenarios = scenarios 
    ? scenarios[scenarioName as "error" | "success"] 
    : [];

export const worker = setupWorker(...runtimeScenarios, ...handlers)
