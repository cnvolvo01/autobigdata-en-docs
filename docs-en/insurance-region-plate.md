---
title: Insurance Region (License Plate)
category: Auto Insurance
order: 4
docType: interface
is_active: yes
description: "Judge vehicle usage years and information consistency by combining first registration date and insurance time."
---
# Insurance Region (License Plate) Query

## Use Cases

- **Used car valuation and condition verification**: judge vehicle usage years and information consistency by combining first registration date and insurance time.
- **Insurance underwriting and renewal**: assess underwriting, renewal, and client-reach opportunities based on insured region and latest insurance month.
- **Vehicle regional risk analysis**: analyze vehicle distribution, accident risk, and insurance demand across provinces, cities, and districts.
- **Owner operations and marketing**: conduct reminders, quoting, and value-added service recommendations for clients nearing renewal.
- **Vehicle finance and risk-control review**: assist in confirming base vehicle information and insurance coverage continuity.
- **Sales flow analysis**: OEM sales flow analysis.

## Endpoint

`POST /api/v1/getVehInsuranceRegionbyPlate`

See the cooperation email notification for the endpoint.

## Request Parameters

### Request

Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{"licensePlate":"京A00000"}
```

The request body only allows `licensePlate`. The service trims surrounding whitespace, uppercases Latin letters, and validates against ordinary and new-energy plate rules.

## Response Fields

### Common Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| code | string | Business status code: `0000` success, `0001` no data, `4001` parameter format error, `5001` service processing failure, `5002` supplier token acquisition failure. Not used when the authentication layer rejects. |
| message | string | Business processing result description, returned by the service on success, no-data, or failure. |
| data | object/array/null | Business result. An object or array on success; usually null on no-data or business failure. |
| request_id | string | Request trace ID for troubleshooting; do not use it as a substitute for a key or token. |

### `data[]` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| province | string/null | Province of the insurance. |
| city | string/null | City of the insurance. |
| county | string/null | District/county of the insurance. |
| insuranceMonth | string/null | Latest insurance year-month; usually `YYYY-MM`, subject to the actual value. |
| vin | string/null | VIN of the associated vehicle. |
| registerDate | string/null | Vehicle registration / first registration date; format from upstream. |

`data` is an array; it is `null` when there is no matching data. The response does not return the query license plate.

## Examples

### Free Test Case

Uses the current Swagger default input: `licensePlate=京A00000`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/getVehInsuranceRegionbyPlate" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"licensePlate":"京A00000"}'
```

### Success Response

The following is the field-structure example based on the default test input; region, month, and date are for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":[{
    "province":"河北省",
    "city":"石家庄市",
    "county":"新华区",
    "insuranceMonth":"2026-06",
    "vin":"1HGBH41JXMN00****",
    "registerDate":"2020-01-01"
  }],
  "request_id":"request-id"
}
```

## Error Codes

### License Plate Format Error (HTTP 400)

```json
{"code":"4001","message":"车牌格式不正确","data":null,"request_id":"request-id"}
```

### No Data (HTTP 200)

```json
{"code":"0001","message":"查无数据","data":null,"request_id":"request-id"}
```

### Supplier Format Error or Service Failure (HTTP 200)

```json
{"code":"5001","message":"供应商返回格式不正确","data":null,"request_id":"request-id"}
```

```json
{"code":"5002","message":"供应商Token获取失败","data":null,"request_id":"request-id"}
```

```json
{"code":"5001","message":"供应商接口调用失败","data":null,"request_id":"request-id"}
```

Authentication-layer errors are handled as HTTP `401`, `403`, `429`, `503`.
