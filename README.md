# telnyx-cypress-testing
## About the project
Implementation of 15 test cases using Cypress with Cucumber.  
Site used for testing: https://telnyx.com/  
Test cases are described [here](https://docs.google.com/document/d/1P_EKsCa47Ay6PY-SFp4iuLU--9cE6j7Y5qSmp3csuwU/edit?usp=sharing).

## Getting started
### Prerequisites
- Node.js  
- Java 8 or above, Allure Report require Java 8 or higher  
- Git  

### Installation  

1. Clone the repo using:  
```sh
git clone https://github.com/KaHDaPaIII/telnyx-cypress-cucumber-testing
```
2. Navigate to folder:
```sh
cd telnyx-cypress-cucumber-testing
```
3. Install npm packages using:
```sh
npm install
```

## Usage  
- Open Cypress in the interactive GUI:  
```sh
npm run cypress:open
```
- Run tests with Allure Report:  
```sh
npm run cypress:run:allure
```
- Generate and open allure report:  
```sh
npm run allure:generate
```
