# Link Tree

## How to setup project

  - npx create-react-app linktr-web
  - yarn start

## Add React
  - yarn add react-bootstrap

## Build
  - yarn build

## Release to PROD
  - scp -r ./build/* icmoc.com:/var/www/production/linktr-web
  OR
  - yarn deploy-production
