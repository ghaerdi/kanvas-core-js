export interface SettingsResponse<T = any> {
  name: string;
  settings: T;
}

export interface AppSettingsResponse<T = any>{
  getAppSettings: SettingsResponse<T>;
};

export interface CompanySettingsResponse<T = any> {
  companySettings: SettingsResponse<T>;
};