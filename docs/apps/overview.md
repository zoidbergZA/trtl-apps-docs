---
id: overview
title: Apps overview
sidebar_label: Overview
---

## Creating Apps

When a service user signs in they have access to the console section. Here you can create and manage apps. Each app has an `app secret`, which is used to make calls to the API. You can also set a webhook URL to receive app events as they happen, see the [webhooks](apps/webhooks.md) section for more details. Each app has its own sub-wallet in the service wallet.

## Accounts

Apps have the ability to create accounts. Each account has its own balance, integrated address for receiving coins, the ability to withdraw coins to a specified TRTL address and transfer coins to other app accounts.

## Deposits

When a new deposit is detected in an app account, its status is set to `confirming` and is added to the account's locked balance while the service waits for the amount of confirmation blocks specified in the `txConfirmations` variable of the service config. Once the needed confirmations is reached, the amount is moved to the account's unlocked balance and the deposit is marked as completed. Webhook events of these status are updates are sent to the app's webhook URL if specified.

## Withdrawals

A withdrawal occurs when an account sends coins from its unlocked balance to a TRTL address. The 1st step when sending a withdrawal is to create a `withdrawal preview`, which will return a prepared withdrawal object with info such as the transaction fee. The account can then choose to continue with sending the withdrawal, or abort the process by simply taking no further action. Similar to deposits, once the transaction is broadcast to the network its status is set to `confirming` while waiting for confirmations before being marked as completed.

## Transfers

Transfers are off-chain transactions between accounts of the same app. For this reason, transfers have no transaction fee and are processed instantly without having to wait for confirmations.