export interface IVirusInfo {
  country: string;
  countryInfo: {
    flag: string;
  };
  todayCases: number;
  deaths: number;
  tests: number;
  critical: number;
  recovered: number;
}
