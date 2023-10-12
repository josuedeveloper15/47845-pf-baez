import { InjectionToken } from '@angular/core';

export interface ApiUrlConfig {
  url: string;
}

export const ApiUrl = new InjectionToken<ApiUrlConfig>('ApiToken');
