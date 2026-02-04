import dotenv from 'dotenv'
dotenv.config()
import { config as sharedConfig } from './wdio.shared.conf'

// Construct capabilities based on environment variables
const isMobile = !!process.env.SAUCE_DEVICE_NAME;

const capabilities = isMobile
  ? [{
    // Mobile capabilities
    platformName: process.env.SAUCE_PLATFORM_NAME || 'Android',
    browserName: process.env.SAUCE_BROWSER_NAME || 'Chrome',
    'appium:deviceName': process.env.SAUCE_DEVICE_NAME,
    'appium:platformVersion': process.env.SAUCE_PLATFORM_VERSION || 'latest',
    'appium:automationName': process.env.SAUCE_PLATFORM_NAME === 'iOS' ? 'XCUITest' : 'UiAutomator2',
    'sauce:options': {
      build: 'wdio-saucelab-demo-mobile-' + Date.now(),
      ...(process.env.SAUCE_APPIUM_VERSION ? { appiumVersion: process.env.SAUCE_APPIUM_VERSION } : {})
    }
  }]
  : [{
    // Desktop capabilities
    maxInstances: 5,
    browserName: process.env.SAUCE_BROWSER_NAME || 'chrome',
    browserVersion: process.env.SAUCE_BROWSER_VERSION || 'latest',
    platformName: process.env.SAUCE_PLATFORM_NAME || 'Windows 11',
    'sauce:options': {
      build: 'wdio-saucelab-demo-desktop-' + Date.now()
    }
  }];

export const config = {
  ...sharedConfig,
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'eu', // or 'us'
  maxInstances: 20,
  capabilities,
  services: ['sauce']
}
