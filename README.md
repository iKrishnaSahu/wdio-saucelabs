# WebdriverIO Sauce Labs Demo

This project demonstrates a robust WebdriverIO setup integrated with Sauce Labs for cross-browser testing. It features TypeScript support, multi-environment configurations (local & remote), and secure credential management.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A [Sauce Labs](https://saucelabs.com/) account

## Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/iKrishnaSahu/wdio-saucelabs.git
    cd wdio-saucelabs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Copy the example environment file and add your Sauce Labs credentials.
    ```bash
    cp .env.example .env
    ```
    Edit `.env` and fill in your details:
    ```env
    SAUCE_USERNAME=your_sauce_username
    SAUCE_ACCESS_KEY=your_sauce_access_key
    ```

## Running Tests

### Local Execution

Runs tests on your local machine using Chrome (headed mode).

```bash
npm run test:local
# or simply
npm test
```

### Remote Execution (Sauce Labs)

Runs tests on the Sauce Labs cloud infrastructure.

```bash
npm run test:sauce
```

### Quick Run Commands

Run tests on specific latest browser/platform combinations without setting environment variables manually.

| Command                      | Configuration                        |
| :--------------------------- | :----------------------------------- |
| `npm run test:sauce:chrome`  | Windows 11 + Chrome                  |
| `npm run test:sauce:firefox` | Windows 11 + Firefox                 |
| `npm run test:sauce:edge`    | Windows 11 + Microsoft Edge          |
| `npm run test:sauce:safari`  | macOS 13 + Safari                    |
| `npm run test:sauce:android` | Google Pixel 6 Pro Emulator + Chrome |
| `npm run test:sauce:ios`     | iPhone 14 Pro Simulator + Safari     |

## Configurable Sauce Labs Capabilities

You can dynamically configure the browser, version, and platform for your Sauce Labs tests using environment variables. Adding these to your `.env` file or exporting them in your terminal will override the defaults.

| Environment Variable    | Default      | Description                                                           |
| :---------------------- | :----------- | :-------------------------------------------------------------------- |
| `SAUCE_BROWSER_NAME`    | `chrome`     | The name of the browser (e.g., `firefox`, `safari`, `microsoftedge`). |
| `SAUCE_BROWSER_VERSION` | `latest`     | The browser version (e.g., `latest`, `latest-1`, `115`, `16.0`).      |
| `SAUCE_PLATFORM_NAME`   | `Windows 11` | The operating system (e.g., `macOS 13`, `Windows 10`).                |

### Example Configurations

Here are some common combinations you can use. For a complete list of valid configurations, use the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator).

#### Windows

| Platform     | Browser         | Browser Version |
| :----------- | :-------------- | :-------------- |
| `Windows 11` | `chrome`        | `latest`        |
| `Windows 11` | `firefox`       | `latest`        |
| `Windows 11` | `microsoftedge` | `latest`        |
| `Windows 10` | `chrome`        | `latest-1`      |
| `Windows 10` | `firefox`       | `115`           |

#### macOS

| Platform              | Browser  | Browser Version |
| :-------------------- | :------- | :-------------- |
| `macOS 13` (Ventura)  | `safari` | `latest` (16)   |
| `macOS 13`            | `chrome` | `latest`        |
| `macOS 12` (Monterey) | `safari` | `15`            |
| `macOS 11` (Big Sur)  | `safari` | `14`            |

#### Linux

| Platform | Browser   | Browser Version |
| :------- | :-------- | :-------------- |
| `Linux`  | `chrome`  | `latest`        |
| `Linux`  | `firefox` | `latest`        |

### Running with Custom Configuration

You can run a specific configuration directly from the command line:

```bash
# Run on Firefox / Windows 11
SAUCE_BROWSER_NAME=firefox SAUCE_PLATFORM_NAME='Windows 11' npm run test:sauce

# Run on Safari / macOS Ventura
SAUCE_BROWSER_NAME=safari SAUCE_PLATFORM_NAME='macOS 13' npm run test:sauce
```

## Mobile Web Testing (Android & iOS)

To run tests on mobile devices (Real or Emulator/Simulator), you need to provide the `SAUCE_DEVICE_NAME`. This switches the configuration to mobile mode.

### Environments Variables for Mobile

| Variable                 | Description                                                                                 |
| :----------------------- | :------------------------------------------------------------------------------------------ |
| `SAUCE_DEVICE_NAME`      | **Required.** Examples: `Google Pixel 6 Pro GoogleAPI Emulator`, `iPhone 14 Pro Simulator`. |
| `SAUCE_PLATFORM_NAME`    | `Android` or `iOS`.                                                                         |
| `SAUCE_PLATFORM_VERSION` | Version of the OS (e.g., `13.0`, `16.2`).                                                   |
| `SAUCE_BROWSER_NAME`     | `Chrome` (Android) or `Safari` (iOS).                                                       |
| `SAUCE_APPIUM_VERSION`   | Appium version (e.g., `2.0.0`, `latest`).                                                   |

### Mobile Examples

#### Android Emulator

```bash
# Run on Google Pixel 6 Pro / Android 12.0
SAUCE_DEVICE_NAME='Google Pixel 6 Pro GoogleAPI Emulator' \
SAUCE_PLATFORM_NAME='Android' \
SAUCE_PLATFORM_VERSION='12.0' \
SAUCE_BROWSER_NAME='Chrome' \
npm run test:sauce
```

#### iOS Simulator

```bash
# Run on iPhone 14 Pro / iOS 16.2
SAUCE_DEVICE_NAME='iPhone 14 Pro Simulator' \
SAUCE_PLATFORM_NAME='iOS' \
SAUCE_PLATFORM_VERSION='16.2' \
SAUCE_BROWSER_NAME='Safari' \
npm run test:sauce
```
