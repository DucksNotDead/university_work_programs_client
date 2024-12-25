import { $api } from '../../shared/api';
import { IResponse, TGetQuery } from '../../shared/types';
import { IProgram } from './types';

const urls = {
  base: '/programs',
};

const keys = {
  get: 'get programs',
};

async function get() {
  return $api.get<IResponse<IProgram[]>>(urls.base);
}

export const programApi = {
  get: [keys.get, get] as TGetQuery<IProgram>,
};
