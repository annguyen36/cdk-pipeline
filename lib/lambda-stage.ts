import { LambdaStack } from './lambda-stack';
import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class LambdaStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        new LambdaStack(this, 'LambdaStack');
    }
}