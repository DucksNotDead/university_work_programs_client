import { IIdentifiable } from '../../shared/types';
import { IStandard } from '../standard/types';
import { EStudyType } from '../../shared/studyTypes';

export interface IProgramSection extends IIdentifiable {
  standard_id: number,
  title: string,
}