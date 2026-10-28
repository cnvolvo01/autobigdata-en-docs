---
title: Valuation - GetUsedPriceMileAgeCity
category: Used Car Valuation
order: 315
docType: interface
is_active: yes
description: "Generate a valuation reference by combining factors such as vehicle age, mileage, and city."
---
# Valuation - GetUsedPriceMileAgeCity

## Use Cases

- **Acquisition and transaction pricing**: generate a valuation reference by combining factors such as vehicle age, mileage, and city.
- **Inventory grading and negotiation**: provide a unified baseline for acquisition quotes, inventory pricing, and manual negotiation.
- **Finance and lease residual assessment**: assist in determining financing amount, term, and risk buffer.
- **Customer quoting and explanation**: explain price differences with structured factors to improve quote transparency.



## Endpoint

See the cooperation email notification.

## API Description

| Protocol | Method | Encoding | Response Format |
| --- | --- | --- | --- |
| HTTPS | GET/POST | UTF-8 | JSON |

## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| access_token | string | Yes | Access token; only required when signature verification is enabled. Generate it via the App.Auth.ApplyToken interface |
| model_id | string | Yes | Trim ID / model ID |
| type | integer | Yes | Usage type: 1 non-operational, 2 operational, 3 leased non-operational, 4 leased operational, 5 operational-to-non (8 years), 6 ride-hailing taxi, 7 ride-hailing-taxi-to-non, 8 operational-to-non (15 years) |
| condition | integer | Yes | Vehicle condition: 1 excellent, 2 good, 3 fair, 4 poor, 5 very poor |
| mile | float | Yes | Mileage (in 10,000 km, must not be 0), up to two decimals, e.g., 20.60 |
| city | string | Yes | City, e.g., 东莞 |
| licensing_date | string | Yes | Registration date, format: YYYY-MM-DD, e.g., 2022-01-01 |
| register_type | integer | Optional | Owner type, 1 individual, 2 company |
| transfer_count | integer | Optional | Number of vehicle ownership transfers |
| color | enum | Optional | Color: white, red, black, silver, gray, other |



## Response Fields

### Response Result

| Field | Type | Description |
| --- | --- | --- |
| ret | integer | Status code; 200 = success, 4xx = client error, 5xx = server error |
| data | object or mixed type | Business data, specified per interface; usually an object |
| msg | string | Message; error description on failure |

## Examples

### Sample Data

```text
// Successful response example
{
    "ret": 200,
    "data": {
        "BuyPrice": "2.84", // Used car acquisition price (RMB 10,000)
        "ModelID": "17650", // Trim ID returned
        "SellPrice": "3.27" // Used car sale price (RMB 10,000)
    },
    "msg": ""
}

// Failed query example, parameter error
{
    "ret": 400,
    "data": {},
    "msg": "VIN位数不合规"
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
