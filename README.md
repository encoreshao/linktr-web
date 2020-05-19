# Link Tree

## How to setup project

  - npx create-react-app linktr-web
  - yarn start

## Add MDBreact - https://mdbootstrap.com/docs/react/getting-started/quick-start/
  - yarn add mdbreact

## Add router - https://reacttraining.com/react-router/web/guides/quick-start
  - yarn install react-router-dom

## Build
  - yarn build

## Release to PROD
  - scp -r ./build/* icmoc.com:/var/www/production/linktr-web
  OR
  - yarn deploy-production
