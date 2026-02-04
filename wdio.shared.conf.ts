import type { Options } from '@wdio/types'

export const config: Partial<Options.Testrunner> = {
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/specs/**/*.ts'
  ],
  // Patterns to exclude.
  exclude: [
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    }
  }
}
