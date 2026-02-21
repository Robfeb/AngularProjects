# SeoClient folder contents

This document lists the files and directories contained in the SeoClient project and provides a quick guide to running and understanding the structure.

## Quick overview

- Type: Angular application
- Main purpose: Client-side SEO-focused Angular app with three sample components (seo1, seo2, seo3)
- Entrypoint: SeoClient/src/main.ts
- Build/run scripts are available via SeoClient/package.json
- E2E tests are under SeoClient/e2e

## Project structure

- Top-level SeoClient files
  - .editorconfig
  - .gitignore
  - angular.json
  - build.bat
  - build.sh
  - package.json
  - README.md
  - web.config

- E2E tests and config
  - e2e/
    - protractor.conf.js
    - src/app.e2e-spec.ts
    - src/app.po.ts
    - tsconfig.e2e.json

- Source code
  - src/
    - app/
      - app-routing.module.ts
      - app.component.css
      - app.component.html
      - app.component.spec.ts
      - app.component.ts
      - app.module.ts
      - seo1/
        - seo1.component.css
        - seo1.component.html
        - seo1.component.spec.ts
        - seo1.component.ts
      - seo2/
        - seo2.component.css
        - seo2.component.html
        - seo2.component.spec.ts
        - seo2.component.ts
      - seo3/
        - seo3.component.css
        - seo3.component.html
        - seo3.component.spec.ts
        - seo3.component.ts
    - assets/
      - .gitkeep
      - loremipsun.json
      - seo.png
    - environments/
      - environment.prod.ts
      - environment.ts
    - favicon.ico
    - index.html
    - main.ts
    - polyfills.ts
    - styles.css
    - test.ts
    - tsconfig.app.json
    - tslint.json
  - SeoClient/web.config

- Additional folders/files
  - SeoClient/README.md
  - SeoClient/src/browserslist

## What each item is (high level)

- Angular setup
  - angular.json: Angular CLI configuration
  - SeoClient/src/main.ts: Bootstrap entry point
  - SeoClient/src/app/...: Core app modules and components
  - SeoClient/src/app/seo1, seo2, seo3: Example components
- Assets
  - loremipsun.json, seo.png: Sample assets used by the app
  - .gitkeep: Placeholder to keep the directory tracked in Git
- Environments
  - environment.ts, environment.prod.ts: Environment configuration for dev/prod
- E2E tests
  - Protractor config and page objects for end-to-end tests

## How to run (typical setup)

1) From the repo root, navigate to SeoClient
   - cd SeoClient

2) Install dependencies
   - npm install

3) Run the app (Angular CLI)
   - npm start
   - or: npx ng serve

4) Build for production
   - npm run build
   - or: npx ng build --prod

5) Run end-to-end tests
   - npm run e2e
   - (Ensure you have the proper environment and WebDriver installed as per the e2e setup)

Note: Script names can vary if the package.json defines different aliases. If in doubt, open SeoClient/package.json to verify available scripts.

## Notes

- The SeoClient folder contains three sample components (seo1, seo2, seo3) to illustrate different SEO-related UI/test cases.
- If you want this document to reflect any custom commands you use locally, share the specifics and I’ll update the content accordingly.

If you’d like, I can generate a Git patch or a patch diff that you can apply to add SeoClient.md to the repository. Just confirm and I’ll provide the patch.