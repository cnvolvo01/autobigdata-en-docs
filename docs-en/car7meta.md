---
title: Car7meta
category: Auto Finance — Car 5 Essentials
order: 403
docType: interface
is_active: yes
description: "Supplement model, engine, and first registration date via VIN or license plate to simplify data entry for auto loans and owner loans."
---
# Car7meta

## Use Cases


- **Finance vehicle profiling**: supplement model, engine, and first registration date via VIN or license plate to simplify data entry for auto pledge loans and owner loans.
- **Auto loan and financial lease risk control**: verify the base data of pledged vehicles to assist credit and asset management.
- **Insurance and after-sales service**: provide model basis for quoting, underwriting, repair, and parts matching.
- **Used car transaction verification**: quickly complete vehicle data during acquisition, replacement, and delivery.
- **Additional operational nature**: more accurately judge vehicle history.

## Endpoint

See the cooperation email notification.

## API Description

| Protocol | Method | Encoding | Response Format |
| --- | --- | --- | --- |
| HTTPS | GET/POST | UTF-8 | JSON |

## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| access_token | string | Yes | Access token; required when signature verification is enabled. Generate it via the App.Auth.ApplyToken interface |
| PlateNum | string | Yes | License plate number (civilian plates only, letters uppercase, 7 or 8 characters, e.g., 京Q12**5 or 京AD12**5) |
| PlateType | string | Yes | Plate type: 01 commercial vehicle; 02 passenger vehicle (default) |

## Response Fields

### Response Result

| Field | Type | Meaning |
| --- | --- | --- |
| ret | integer | Legacy business status code; `200` = success, `4xx` = client error, `5xx` = server error. |
| data | object/null | Vehicle seven-field information; may be empty on no-data or failure. |
| msg | string | Message; contains error description on failure, usually an empty string on success. |

### `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| VIN | string | Vehicle identification number; the complete value is a 17-character VIN. |
| EngineNum | string/null | Engine number. |
| EngineModel | string/null | Engine model. |
| VehicleModel | string/null | Vehicle model. |
| Brand | string/null | Vehicle brand. |
| FirstRegistrationDate | string/null | First registration date; format subject to the actual returned value. |
| carUsage | string/null | Vehicle usage type; e.g., "非营业个人" (non-business individual), "非营运" (non-operational); passed through from upstream, non-closed enum. |

## Examples

### Sample JSON Response

```text
{
"ret": 200,
"data": {
    "EngineModel": "CFB",// Engine model
    "EngineNum": "002250",// Engine number
    "VehicleModel": "FV7146TATG",// Vehicle model
    "carUsage": "非营业个人",// Usage type
    "VIN": "1HGBH41JXMN000***",// VIN, complete 17 characters
    "Brand": "一汽-大众",// Brand
    "FirstRegistrationDate": "2009-11-11",// First registration date

    },
"msg": ""// Summary message
}
```

## Error Codes

### Error List

| Status Code | Description |
| --- | --- |
| 400 | ret=400, client parameter error or invalid request |
| 404 | The interface service does not exist |
| 406 | ret=406, access_token verification failed |
| 407 | ret=407, insufficient app_key permission or unknown application |
| 408 | ret=408, the current user is prohibited or not logged in |
| 500 | Internal server error |
