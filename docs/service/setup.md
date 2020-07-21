---
id: setup
title: Service setup guide
sidebar_label: Setup guide
---

Fork the repo on [Github](https://github.com/turtlecoin/trtl-apps) to get started.

## Create firebase project

Go to the [Firebase console](https://console.firebase.google.com) and create a new project.

Upgrade your firebase to the `blaze` plan, needed for making outbound function calls.

Enable the following firebase modules:

- Authentication with email/password sign-in method
- Create a firestore database and select a region
- Enable Storage
- Enable Functions
- Enable Hosting

#### development project (optional)

Repeat the steps above to create a firebase project for a development environment.

### Install dependencies

Open a terminal and navigate to the root directory of your project.

Run `npm install` in the *root* directory.

Run `npm install` in the */functions* directory.

Run `npm install` in the */app_engine* directory.

## Deploying to App Engine

Run the commands below in the `app_engine` directory.

Perform the build step:

  `npm run build`

gcloud configurations:

  run the following command to create a configuration

  `gcloud init`

  or select an existing configuration using

  `gcloud config configurations activate my-config`

  list existing configurations using

  `gcloud config configurations list`

  visit [for more information on configurations](https://cloud.google.com/sdk/gcloud/reference/config/configurations).

Deploy your app for a specific environment:

  `gcloud app deploy app-production.yaml`

  `gcloud app deploy app-development.yaml` (optional)

### Secure the endpoints

In the GCP menu, navigate to `Security -> Identity-Aware Proxy`. Turn on the `IAP` toggle for the App Engine resource.
Select the app engine resource and click `ADD MEMBER` on the right-hand menu and add the firebase default service account email address. Give the new member the `IAP-secured Web App User` role. Members added here will have access to call the app engine API enpoints.

## Setup the firebase environment

Download the firebase project service account key file in the firebase console: `Settings -> Project settings -> Service Accounts` and select `Generate new private key`. Rename the file to `gcp_account_key.json`. Upload this json file to the project's storage bucket in the root directory.

Run the following commands in the project root directory.

Sign in to firebase using the CLI: `firebase login`

Set your service master password in the environment variables: `firebase functions:config:set serviceadmin.password="YOUR ADMIN PASSWORD"`
Pick a strong password and keep it safely backed up, this is the password used to encrypt the service wallet file.

In the project's GCP console, click `Security -> Identity-Aware Proxy`. In the context menu select `Edit OAuth client`. Copy the `Client ID` field for use in the next step.

Set the following values in the environment variables:

`firebase functions:config:set appengine.target_audience="YOUR CLIENT ID"`

Set SendGrid API key for admin emails (optional)

`firebase functions:config:set sendgrid.apikey="YOUR SENDGRID API KEY"`

## Configure Angular Environment variables

Set the `environment.ts` and `environment.prod.ts` variables for your project's development and production environments. The Firebase config information can be found in the firebase `console -> project settings -> firebase SDK snippet -> config`.

## Deploying to firebase

### Production environment

Build the angular project using `ng build --prod`

Run `firebase use production` to switch to the production firebase project.

Run `firebase deploy` to deploy the project.

For a single command, you can also use the -P flag: `firebase deploy -P production`.

### Development environment (optional)

Build the angular project using `ng build`

Run the angular front-end locally using `ng serve`

Run `firebase use development` to switch to the development firebase project.

Run `firebase deploy` to deploy the project.

For a single command, you can also use the -P flag: `firebase deploy -P development`.

## Bootstrap the service

In the firebase console, navigate to the Authentication section and enable the email/password sign-in method. Create a new user account with your email address, we will give this user service admin rights in a later step.

Open *functions* tab, copy the URL of the `serviceAdmin-bootstrap` function.

Send a GET request to the bootstrap URL passing in the email address of the user you created earlier as an 'admin' query parameter. Example cURL request:

`curl --location --request GET 'BOOTSTRAP_URL?admin=ADMIN_EMAIL_ADDRESS'`

If the service bootstrapped succesfully, it will send an OK response. see the [Admin](service/admin.md) section for information on service admin functionality. If you are already signed in to the frontend, you may have to sign out and back in for the auth token to update with the new admin privilages.