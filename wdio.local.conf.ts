import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = {
  ...sharedConfig,
  runner: 'local',
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--disable-gpu']
    },
    acceptInsecureCerts: true
  }],
  services: []
}
