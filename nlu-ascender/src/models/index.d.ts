import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SupervisorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SocialWorkerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SocialWorkerChildMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChildMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SurveyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SurveyQuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Supervisor {
  readonly id: string;
  readonly SupervisorSocialWorkers?: (SocialWorker | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Supervisor, SupervisorMetaData>);
  static copyOf(source: Supervisor, mutator: (draft: MutableModel<Supervisor, SupervisorMetaData>) => MutableModel<Supervisor, SupervisorMetaData> | void): Supervisor;
}

export declare class SocialWorker {
  readonly id: string;
  readonly name?: string;
  readonly SocialWorkerChildren?: (SocialWorkerChild | null)[];
  readonly supervisorID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SocialWorker, SocialWorkerMetaData>);
  static copyOf(source: SocialWorker, mutator: (draft: MutableModel<SocialWorker, SocialWorkerMetaData>) => MutableModel<SocialWorker, SocialWorkerMetaData> | void): SocialWorker;
}

export declare class SocialWorkerChild {
  readonly id: string;
  readonly child: Child;
  readonly socialworker: SocialWorker;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SocialWorkerChild, SocialWorkerChildMetaData>);
  static copyOf(source: SocialWorkerChild, mutator: (draft: MutableModel<SocialWorkerChild, SocialWorkerChildMetaData>) => MutableModel<SocialWorkerChild, SocialWorkerChildMetaData> | void): SocialWorkerChild;
}

export declare class Child {
  readonly id: string;
  readonly name: string;
  readonly schoolName?: string;
  readonly address?: string;
  readonly birthdate?: string;
  readonly active?: boolean;
  readonly Surveys?: (Survey | null)[];
  readonly SocialWorkers?: (SocialWorkerChild | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Child, ChildMetaData>);
  static copyOf(source: Child, mutator: (draft: MutableModel<Child, ChildMetaData>) => MutableModel<Child, ChildMetaData> | void): Child;
}

export declare class Survey {
  readonly id: string;
  readonly childID?: string;
  readonly surveyType: string;
  readonly surveyTime: string;
  readonly note?: (string | null)[];
  readonly sentiment?: number;
  readonly artifactReferences?: (string | null)[];
  readonly SurveyQuestions?: (SurveyQuestion | null)[];
  readonly complete?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Survey, SurveyMetaData>);
  static copyOf(source: Survey, mutator: (draft: MutableModel<Survey, SurveyMetaData>) => MutableModel<Survey, SurveyMetaData> | void): Survey;
}

export declare class SurveyQuestion {
  readonly id: string;
  readonly question?: string;
  readonly response?: string;
  readonly surveyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SurveyQuestion, SurveyQuestionMetaData>);
  static copyOf(source: SurveyQuestion, mutator: (draft: MutableModel<SurveyQuestion, SurveyQuestionMetaData>) => MutableModel<SurveyQuestion, SurveyQuestionMetaData> | void): SurveyQuestion;
}