import jsonfile from 'jsonfile';
import { Config } from '../types/config';

export const readConfig = async (destination: string): Promise<Config> => {
  return await jsonfile.readFile(destination);
};
