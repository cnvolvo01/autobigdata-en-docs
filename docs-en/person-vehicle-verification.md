---
title: Person-Vehicle Verification
category: Auto Finance — Person-Vehicle Verification
order: 401
docType: interface
is_active: yes
description: "Verify the association between the applicant, the vehicle, and the business documents."
---
# Person-Vehicle Verification

## Use Cases

- **Auto finance credit review**: verify the association between the applicant, the vehicle, and the business documents.
- **Financial lease and pledge management**: assist in confirming the vehicle user or related entity to reduce ownership and fraud risk.
- **Insurance and claims document verification**: verify the person-vehicle relationship during underwriting, changes, and claims.
- **Used car transaction review**: provide auxiliary verification for transfers, replacements, and high-value vehicle transactions.

## Endpoint

See the cooperation email notification.

## API Description

| Protocol | Method | Encoding | Response Format |
| --- | --- | --- | --- |
| HTTPS | GET/POST | UTF-8 | JSON |


## Input Parameters
VIN (or license plate number) + name or enterprise name

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| access_token | string | Optional | Access token; only required when signature verification is enabled. Generate it via the App.Auth.ApplyToken interface |
| ownerName | string | Yes | Owner name or entity name |
| plateNum | string | Optional | License plate number (either plate or VIN is required; when both are passed, VIN takes priority) |
| vin | string | Optional | VIN (either plate or VIN is required; when both are passed, VIN takes priority) |

ownerName+plateNum

or

ownerName+vin

Choose either combination.

Generally, ownerName+vin has a higher hit rate.

## Response Fields

### Response Result

| Field | Type | Description |
| --- | --- | --- |
| ret | integer | Status code; 200 = success, 4xx = client error, 5xx = server error |
| data | object or mixed type | Business data, specified per interface; usually an object |
| msg | string | Message; error description on failure |

Sample JSON response

```text
// Successful query example, consistent
{
    "ret": 200,
    "data": {
        "checkResult": 1
    },
    "msg": ""
}

// Successful query example, inconsistent
{
    "ret": 200,
    "data": {
        "checkResult": 2
    },
    "msg": ""
}

// Failed query example, parameter error
{
    "ret": 400,
    "data": {},
    "msg": "车牌号码不正确或超出服务范围"
}

// Failed query example, no data
{
    "ret": 414,
    "data": {},
    "msg": "查无数据"
}
```

## Error Codes

### Error List

| Status Code | Description |
| --- | --- |
| 400 | ret=400, client parameter error or invalid request |
| 404 | ret=404, the interface service does not exist |
| 406 | ret=406, access_token verification failed |
| 407 | ret=407, insufficient app_key permission or unknown application |
| 408 | ret=408, the current user is prohibited or not logged in |
| 414 | ret=414, no data found |
| 500 | Internal server error |



### Important Technical FAQ

If the owner and the insured person are inconsistent — this often occurs with company-registered vehicles.

After actual verification, the actual owner is used.
