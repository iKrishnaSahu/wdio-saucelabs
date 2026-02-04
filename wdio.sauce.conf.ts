import dotenv from 'dotenv'
dotenv.config()
import { config as sharedConfig } from './wdio.shared.conf'

export const config = {
  ...sharedConfig,
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'eu', // or 'eu'
  maxInstances: 20,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'Windows 11',
    'sauce:options': {
      build: 'wdio-saucelab-demo-' + Date.now()
    }
  }],
  services: ['sauce']
}
