---
title: Accident Summary Mini
category: Accident & Claims
order: 1
docType: interface
is_active: yes
description: "Quickly understand a vehicle's claim count, claim amount, and major loss situation."
---
# Accident Summary Query

## Use Cases

- **Quick used car screening**: quickly understand a vehicle's claim count, claim amount, and major loss situation.
- **Transaction pricing and risk grading**: incorporate the summary into acquisition quotes, inventory grading, and manual review rules.
- **Insurance underwriting and claims review**: assist in judging historical risk, abnormal payouts, and duplicate-claim clues.
- **Customer communication and delivery records**: provide a basis for condition disclosure, quote explanation, and after-sales dispute handling.

## Endpoint

`POST /api/v1/getVehClaimsdataMini`

See the cooperation email notification for the endpoint.



## Request Parameters

Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{"vin":"1HGBH41JXMN00****"}
```

`vin` is required. The service trims surrounding whitespace, converts to uppercase, and validates against the VIN check-digit rules.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/getVehClaimsdataMini" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN000001"}'
```

## Response Fields

### Common Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| code | string | Business status code: `0000` success or no claims, `4001` parameter format error, `5001` service processing failure, `5002` supplier token acquisition failure. Not used when the authentication layer rejects. |
| message | string | Business processing result description, returned by the service on success, no-data, or failure. |
| data | object/array/null | Business result. An object or array on success; usually null on no-data or business failure. |
| request_id | string | Request trace ID for troubleshooting; do not use it as a substitute for a key or token. |

### Modern-format `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| vin | string | The VIN of the queried vehicle. |
| claimsData | string | Claim amount range and count text; "无出险" (no claims) when there are none. |
| totalLoss | string | Total-loss conclusion: `否` (no), `是全损` (total loss), `未知` (unknown). |
| majorAccident | string | Major-accident summary: `无大事故` (none), `碰撞` (collision), `水淹` (flood), `火烧` (fire), `拆解` (dismantled), `未知` (unknown). |


## Examples

### Success Response

```json
{"code":"0000","message":"成功","data":{"vin":"1HGBH41JXMN00****","claimsData":"(0,2000]元:2次,(10000,20000]元:1次","totalLoss":"否","majorAccident":"无大事故"},"request_id":"request-id"}
```

`claimsData` is the claim amount range and count; `totalLoss` is `否`, `是全损`, or `未知`; `majorAccident` is the accident summary or `未知`. When the vehicle has no claims it is still a success result: `code=0000`, `message=车辆无出险`, `claimsData=无出险`. See the customer version of the accident summary for field explanations and usage boundaries.



### Business Results

`0000` success, `4001` VIN format error, `5001` service temporarily unavailable, `5002` service credentials temporarily unavailable. Authentication-layer errors use HTTP `401`, `403`, `429`, `503` rather than business codes. For troubleshooting, provide `request_id`, time, method, and path — do not submit tokens or full sensitive request bodies.
