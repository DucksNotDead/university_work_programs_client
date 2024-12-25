import { IIdentifiable } from '../../shared/types';
import { IStandard } from '../standard/types';
import { EStudyType } from '../../shared/studyTypes';

export interface IProgramSubSection extends IIdentifiable {
  section_id: number;
  type: EStudyType;
  label: string;
  volume: number;
}
