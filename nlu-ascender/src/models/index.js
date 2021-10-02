// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Supervisor, SocialWorker, SocialWorkerChild, Child, Survey, SurveyQuestion } = initSchema(schema);

export {
  Supervisor,
  SocialWorker,
  SocialWorkerChild,
  Child,
  Survey,
  SurveyQuestion
};