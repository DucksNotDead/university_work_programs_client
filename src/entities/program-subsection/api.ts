import { $api } from '../../shared/api';
import { IResponse, TGetDictionaryQuery, TGetQuery } from '../../shared/types';
import { IProgramSubSection } from './types';

const urls = {
  base: '/program-subsections',
};

const keys = {
  get: 'get program subsections',
};

async function get() {
  return $api.get<IResponse<IProgramSubSection[]>>(urls.base);
}

export const programSubSectionsApi = {
  get: [keys.get, get] as TGetQuery<IProgramSubSection>,
};
