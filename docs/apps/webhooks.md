---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

Webhooks are a way for your app to receive notifications of backend events as they happen. To receive these notifications you can set a webhook URL for your app in the console. When a new event occurs, a POST request is sent to the webhook URL. Each event type has a unique code, and a data property containing the event details.

The service expects a 2xx response code to indicate that the notification was received. In the event of failure, the service will retry the sending the event a few times in larger time intervals.

## Validating payloads from TRTL apps

TRTL apps uses your app secret to create a hash signature with each payload. This hash signature is passed along with each request in the headers as `x-trtl-apps-signature`.

To validate a request, compute a hash using your APP_SECRET and check that it matches the hash from the request header. TRTL apps uses a HMAC hexdigest to compute the hash. Below is an example validation function in node.js using the crypto module:

```js
const appSecret = 'YOUR_APP_SECRET';

const hash = 'sha256=' + crypto
                .createHmac("sha256", appSecret)
                .update(JSON.stringify(request.body))
                .digest("hex");

const isValid = hash === requestSignature;
```

## Events

Below the different event types are listed along with example payloads. Each event object has a `code` property indicating which event was fired, and a `data` property containing the event data.

### New deposit

This event is sent when a new account deposit is detected. New deposits start with a `confirming` status while waiting for block confirmations.

```js
{
  "code": "deposit/confirming",
  "data": {
    "id": "eb5b3138ff0dbcb060eb111b7609d01d",
    "appId": "84U0IRP0rdC57AHfwRQc",
    "accountId": "pwBBKwhhVXJ16xtEcgKA",
    "blockHeight": 2104164,
    "paymentId": "6a8db2c83a34f29275d3cfad7100944168c46fd5d43e074aa038e18a0410c7dd",
    "depositAddress": "TRTLuxVTfpvXTXbsQxzqy5KHyHXTQZbtEHnAsorKPqkweHzDRcRyM28g6jJMQjBoocYqsjtR3G5n1ipuDpn6VbqZQWnQ198HZcD",
    "amount": 25,
    "integratedAddress": "TRTLuxsFnkbHRdfoKCFc8KJ6Rzvp1TdqLHdJctadbENjAZx5mhgXqQXA6kNfcuNnap94kdBUwnfvPHvh82YufKFmHbXLoKCzfHLXTXbsQxzqy5KHyHXTQZbtEHnAsorKPqkweHzDRcRyM28g6jJMQjBoocYqsjtR3G5n1ipuDpn6VbqZQWnQ1D22qvB",
    "txHash": "e392965de03d3553df994baffba2bbb027ec83c947c4ddec9d6791cc86bca588",
    "createdDate": 1576336806682,
    "status": "confirming",
    "accountCredited": false,
    "lastUpdate": 1576336806682,
    "cancelled": false
  }
}
```

### Deposit succeeded

Once the deposit has been confirmed, the account's balance is credited with the deposit amount and the deposit succeeded event is sent.

```js
{
  "code": "deposit/succeeded",
  "data": {
    "amount": 25,
    "appId": "84U0IRP0rdC57AHfwRQc",
    "blockHeight": 2104164,
    "cancelled": false,
    "createdDate": 1576336806682,
    "depositAddress": "TRTLuxVTfpvXTXbsQxzqy5KHyHXTQZbtEHnAsorKPqkweHzDRcRyM28g6jJMQjBoocYqsjtR3G5n1ipuDpn6VbqZQWnQ198HZcD",
    "id": "eb5b3138ff0dbcb060eb111b7609d01d",
    "integratedAddress": "TRTLuxsFnkbHRdfoKCFc8KJ6Rzvp1TdqLHdJctadbENjAZx5mhgXqQXA6kNfcuNnap94kdBUwnfvPHvh82YufKFmHbXLoKCzfHLXTXbsQxzqy5KHyHXTQZbtEHnAsorKPqkweHzDRcRyM28g6jJMQjBoocYqsjtR3G5n1ipuDpn6VbqZQWnQ1D22qvB",
    "lastUpdate": 1576337042609,
    "paymentId": "6a8db2c83a34f29275d3cfad7100944168c46fd5d43e074aa038e18a0410c7dd",
    "status": "completed",
    "txHash": "e392965de03d3553df994baffba2bbb027ec83c947c4ddec9d6791cc86bca588",
    "accountCredited": true,
    "accountId": "pwBBKwhhVXJ16xtEcgKA"
  }
}
```

### Deposit cancelled

In the case where the deposit transaction was not confirmed in the blockchain, the deposit is marked as failed and the deposit cancelled event will be fired.

```js
{
  "code": "deposit/cancelled",
  "data": {
    "amount": 25,
    "appId": "84U0IRP0rdC57AHfwRQc",
    "blockHeight": 0,
    "cancelled": true,
    "createdDate": 1576336806682,
    "depositAddress": "TRTLuxVTfpvXTXbsQxzqy5KHyHXTQZbtEHnAsorKPqkweHzDRcRyM28g6jJMQjBoocYqsjtR3G5n1ipuDpn6VbqZQWnQ198HZcD",
    "id": "eb5b3138ff0dbcb060eb111b7609d01d",
    "integratedAddress": "TRTLuxsFnkbHRdfoKCFc8KJ6Rzvp1TdqLHdJctadbENjAZx5mhgXqQXA6kNfcuNnap94kdBUwnfvPHvh82YufKFmHbXLoKCzfHLXTXbsQxzqy5KHyHXTQZbtEHnAsorKPqkweHzDRcRyM28g6jJMQjBoocYqsjtR3G5n1ipuDpn6VbqZQWnQ1D22qvB",
    "lastUpdate": 1576337042609,
    "paymentId": "6a8db2c83a34f29275d3cfad7100944168c46fd5d43e074aa038e18a0410c7dd",
    "status": "completed",
    "accountCredited": false,
    "accountId": "pwBBKwhhVXJ16xtEcgKA"
  }
}
```

### Withdrawal succeeded

This event is sent when an account withdrawal has been successfully processed.

```js
{
  "code": "withdrawal/succeeded",
  "data": {
    "id": "mbEz7SwYhNxPRWnb8MYb",
    "paymentId": "dd1b2917f574f5ce2b0fbbfdb0c9d0be7482125fcd93436933c8fe75c38c8a4b",
    "appId": "84U0IRP0rdC57AHfwRQc",
    "accountId": "jaKrijd8WjHRWTu2y8pG",
    "amount": 500000,
    "fees": {
      "txFee": 1500,
      "nodeFee": 10,
      "serviceFee": 0
    },
    "accountDebited": true,
    "address": "TRTLv32bGBP2cfM3SdijU4TTYnCPoR33g5eTas6n9HamBvu8ozc9BZHWza5j7cmBFSgh4dmmGRongfoEEzcvuAEF8dLxixsS7he",
    "timestamp": 1576340903981,
    "lastUpdate": 1576341061152,
    "status": "completed",
    "requestedAtBlock": 2104300,
    "blockHeight": 2104302,
    "failed": false,
    "preparedWithdrawalId": "35ruwGoGaaSgjYAUdpJh",
    "txHash": "07e8f4ee5a0dcdf3ca3ce987069f107d045def181d438696114fb6990fb3c72c",
    "retries": 0
  }
}
```

### Withdrawal failed

In the case where an account withdrawal was not processed succesfully, the account's balance will be refunded with the amount and the withdrawal failed event is sent.

```js
{
  "code": "withdrawal/failed",
  "data": {
    "id": "mbEz7SwYhNxPRWnb8MYb",
    "paymentId": "dd1b2917f574f5ce2b0fbbfdb0c9d0be7482125fcd93436933c8fe75c38c8a4b",
    "appId": "84U0IRP0rdC57AHfwRQc",
    "accountId": "jaKrijd8WjHRWTu2y8pG",
    "amount": 500000,
    "fees": {
      "txFee": 1500,
      "nodeFee": 10,
      "serviceFee": 0
    },
    "accountDebited": false,
    "address": "TRTLv32bGBP2cfM3SdijU4TTYnCPoR33g5eTas6n9HamBvu8ozc9BZHWza5j7cmBFSgh4dmmGRongfoEEzcvuAEF8dLxixsS7he",
    "timestamp": 1576340903981,
    "lastUpdate": 1576341061152,
    "status": "completed",
    "requestedAtBlock": 2104300,
    "blockHeight": 0,
    "failed": true,
    "preparedWithdrawalId": "35ruwGoGaaSgjYAUdpJh",
    "txHash": "07e8f4ee5a0dcdf3ca3ce987069f107d045def181d438696114fb6990fb3c72c",
    "daemonErrorCode": 31,
    "retries": 0
  }
}
```