import { $api } from '../../shared/api';
import { ISpecialty } from './types';
import { IResponse, TGetDictionaryQuery, TGetQuery } from '../../shared/types';

const urls = {
  base: '/specialties',
};

const keys = {
  get: 'get specialties',
};

async function get() {
  return $api.get<IResponse<ISpecialty[]>>(urls.base);
}

async function getDict() {
  try {
    const res = await get();
    return res.data.data.map((specialty) => ({
      label: specialty.name,
      value: specialty.id,
    }));
  } catch {
    return [];
  }
}

export const specialtyApi = {
  get: [keys.get, get] as TGetQuery<ISpecialty>,
  getDictionaries: [keys.get, getDict] as TGetDictionaryQuery,
};
