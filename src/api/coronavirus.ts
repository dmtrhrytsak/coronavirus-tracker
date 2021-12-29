import { IVirusInfo } from '../types/VirusInfo';
import { apiCoronaVirus, delay } from './axiosConfig';

export const getVirusStatisticsByCountry = async (country: string) => {
  await delay(1000);
  return apiCoronaVirus.get<IVirusInfo>(`/countries/${country}`);
};
