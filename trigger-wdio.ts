import { Launcher } from '@wdio/cli';

const runTests = async () => {
  // Determine the config file to use. Default to local if not specified.
  // In a real scenario, you might parse process.argv or environment variables.
  const configPath = process.env.WDIO_CONFIG_PATH || './wdio.local.conf.ts';

  console.log(`Starting WebdriverIO tests using config: ${configPath}`);

  const wdio = new Launcher(configPath, {
    // Optional: Add specific run arguments here if needed
    // e.g., spec: ['./test/specs/mytest.spec.ts']
  });

  try {
    const exitCode = await wdio.run();
    console.log(`WebdriverIO finished with exit code: ${exitCode}`);
    process.exit(exitCode);
  } catch (error) {
    console.error('Failed to launch WebdriverIO:', error);
    process.exit(1);
  }
};

runTests();
