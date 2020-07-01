---
id: development
title: Development
sidebar_label: Development
---

## Updating firestore indexes

If you have updated the firestore indexes it is important to also add the changes to source control. In the firebase CLI, run `firebase firestore:indexes` to get the JSON, then overwrite the content of the `firestore.indexes.json` file in the root of the project folder.

## Updating firestore security rules

If you have updated the firestore rules it is important to also add the changes to source control. In the firebase console, copy the rules text and overwrite the content of the `firestore.rules` file in the root folder of the project.

## Updating OpenAPI documentation

Copy the `swagger.json` openAPI spec into the `src/docs/openapi` folder. Deploy to firebase hosting.