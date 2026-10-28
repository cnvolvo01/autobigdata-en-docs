---
title: First Registration Date & Insurance Month (VIN)
category: Auto Insurance
order: 5
docType: interface
is_active: yes
description: "Judge vehicle age through the first registration date, supporting used car valuation and finance term review."
---
# First Registration Date & Insurance Month by VIN

## Use Cases

- **Vehicle age verification**: judge vehicle age through the first registration date, supporting used car valuation and finance term review.
- **Insurance renewal operations**: filter renewal leads by the latest insurance month and conduct reminder and quoting services.
- **Insurance continuity and risk judgment**: identify insurance record gaps to assist underwriting and vehicle data review.
- **Regional business analysis**: analyze client and vehicle lifecycle by combining the VIN vehicle profile and insurance time.

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
| vin | string | Yes | VIN |

## Response Fields

### Response Result

| Field | Type | Meaning |
| --- | --- | --- |
| ret | integer | Legacy business status code; `200` = success, `4xx` = client error, `5xx` = server error. |
| data | object/null | Vehicle first-registration and insurance month data; may be empty on no-data, and may be absent or empty on failure. |
| msg | string | Message; usually empty on success, contains error description on failure. |

### `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| VIN | string/null | Vehicle identification number; usually a 17-character VIN. |
| PlateNum | string/null | License plate matching the VIN; explicitly set to `null` in the VIN-query scenario. |
| Brand | string/null | Vehicle brand; may be `null` without upstream data. |
| FirstRegistrationDate | string/null | First registration date; common format `YYYY-MM-DD`, subject to upstream. |
| insuranceMonth | string/null | Latest insurance year-month; common format `YYYY-MM`, subject to upstream. |
| carUsage | string/null | Vehicle usage type; e.g., "非营业个人" (non-business individual), "非营运" (non-operational); passed through from upstream, non-closed enum. |



Sample JSON response

```text
{
    "ret": 200,
    "data": {
        "carUsage": "非营业个人",
        "insuranceMonth": "2024-10",
        "VIN": "WVGAV67L9AD004**4",
        "PlateNum": null,
        "Brand": null,
        "FirstRegistrationDate": "2009-10-26"
    },
    "msg": ""
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
