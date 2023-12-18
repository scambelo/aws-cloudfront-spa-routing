#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCloudfrontSpaRoutingStack } from '../lib/aws-cloudfront-spa-routing-stack';

const app = new cdk.App();
new AwsCloudfrontSpaRoutingStack(app, 'AwsCloudfrontSpaRoutingStack');

cdk.Tags.of(app).add('project', 'aws-cloudfront-spa-routing');
cdk.Tags.of(app).add('managed-by', 'cdk');