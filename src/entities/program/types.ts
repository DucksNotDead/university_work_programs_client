import { IIdentifiable } from '../../shared/types';
import { IStandard } from '../standard/types';
import { EStudyType } from '../../shared/studyTypes';

interface IProgramBase {
  questions: string;
  skills: string;
  literature: string;
}

export type IProgram = IIdentifiable &
  IProgramBase & {
    discipline_name: string;
    standard_id: number;
    department_head_id: number;
  };

interface ILoad {
  semester: number;
  type: EStudyType;
  total_hours: number;
}

export type IProgramReportInfo = IProgramBase & {
    name: string;
    loads: ILoad[];
  };
