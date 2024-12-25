import { $api } from '../../shared/api';
import { IResponse, TGetDictionaryQuery, TGetQuery } from '../../shared/types';
import { IProgramSection } from './types';

const urls = {
  base: '/program-sections',
};

const keys = {
  get: 'get program sections',
};

async function get() {
  return $api.get<IResponse<IProgramSection[]>>(urls.base);
}

async function getDict() {
  try {
    const res = await get();
    return res.data.data.map((section) => ({
      label: section.title,
      value: section.id,
    }));
  } catch {
    return [];
  }
}

export const programSectionsApi = {
  get: [keys.get, get] as TGetQuery<IProgramSection>,
  getDictionaries: [keys.get, getDict] as TGetDictionaryQuery,
};
