import dotenv from 'dotenv'
dotenv.config()
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = {
  ...sharedConfig,
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'eu',
  maxInstances: 20,
  capabilities: [{
    platformName: process.env.SAUCE_PLATFORM_NAME,
    browserName: process.env.SAUCE_BROWSER_NAME,
    'appium:deviceName': process.env.SAUCE_DEVICE_NAME,
    'appium:automationName': process.env.SAUCE_PLATFORM_NAME === 'iOS' ? 'XCUITest' : 'UiAutomator2',
    'sauce:options': {
      build: 'wdio-saucelab-demo-real-device-' + Date.now(),
      name: 'Real Device Test - ' + (process.env.SAUCE_DEVICE_NAME || 'Unknown Device'),
      resigningEnabled: true,
      sauceLabsNetworkCaptureEnabled: true,
      appiumVersion: 'latest'
    },
    // Only include platformVersion if explicitly provided; otherwise default to any available for the device
    ...(process.env.SAUCE_PLATFORM_VERSION ? { 'appium:platformVersion': process.env.SAUCE_PLATFORM_VERSION } : {})
  }],
  services: ['sauce']
}
