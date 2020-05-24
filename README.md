# Link Tree

## How to setup project

  - npx create-react-app linktr-web
  - yarn start

## Add MDBreact - https://mdbootstrap.com/docs/react/getting-started/quick-start/
  - yarn add mdbreact
  - Documents
    - color: https://mdbootstrap.com/docs/react/css/colors/

## Add router - https://reacttraining.com/react-router/web/guides/quick-start
  - yarn add react-router-dom

## Add i18n support - https://react.i18next.com/latest/using-with-hooks
  - yarn add react-i18next i18next

## Build
  - yarn build

## Release to PROD
  - scp -r ./build/* icmoc.com:/var/www/production/linktr-web
  OR
  - yarn deploy-production
