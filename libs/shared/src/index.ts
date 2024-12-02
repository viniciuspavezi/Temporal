import { defineQuery } from '@temporalio/workflow';

export const taskQueue = 'nest-test';

export type ExchangeRates = { [key: string]: number };

export const getRoleDefinitionQuery = defineQuery<ExchangeRates | null>('getRoleDefinition');

export type exchangeRatesWorkflowType = () => Promise<void>;
