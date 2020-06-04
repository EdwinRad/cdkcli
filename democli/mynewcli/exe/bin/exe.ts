#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExeStack } from '../lib/exe-stack';

const app = new cdk.App();
new ExeStack(app, 'ExeStack');
