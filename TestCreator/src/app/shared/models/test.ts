import { QuestionType } from './questionType';

export interface Test {
    Id: number;
    Title: String;
    Question: String;
    Solution: string;
    SolutionList?: string[];
    Image?: string;
    Icon?: string;
    Type?: QuestionType;
}