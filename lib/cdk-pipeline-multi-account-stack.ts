import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';

export class CdkPipelineMultiAccountStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new pipelines.CodePipeline(this, 'pipeline',{
      pipelineName: "multi-account-pipeline",
      synth: new pipelines.ShellStep("Synth",{
        input: pipelines.CodePipelineSource.gitHub("annguyen36/cdk-pipeline","main"),
        commands:['npm ci','npm run build','npx cdk synth']
      })
    })
  }
}
