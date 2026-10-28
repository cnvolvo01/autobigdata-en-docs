---
title: Insurance Transfer Count (License Plate)
category: Vehicle Transfer & Condition
order: 1009
docType: interface
is_active: yes
description: "Judge vehicle transfer frequency to assist pricing, acquisition, and sale."
---
# Insurance Transfer Count (License Plate) Query

## Use Cases

- **Used car valuation and transaction decisions**: judge vehicle transfer frequency to assist pricing, acquisition, and sale.
- **Condition and risk verification**: identify potential risks such as frequent transfers and short-term flipping.
- **Insurance and finance review**: assist insurance underwriting, auto-loan approval, and risk assessment.

## Endpoint

`POST /api/v1/getInsTransferCountbyPlate`

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

### `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| plate | string | The license plate returned and verified to match the query plate. |
| totalTransCount | string | Cumulative insurance transfer count; `"0"` is a valid result. |
| latestTransYM | string/null | Year-month of the latest insurance transfer; null when no record. |
| transCarYear | string/null | Vehicle age at the latest transfer; null when no record. |

## Examples

### Free Test Case

Uses the current Swagger default input: `licensePlate=京A00000`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/getInsTransferCountbyPlate" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"licensePlate":"京A00000"}'
```

### Success Response

The following is the field-structure example based on the default test input; count, year-month, and age are for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{
    "plate":"京A00000",
    "totalTransCount":"0",
    "latestTransYM":null,
    "transCarYear":null
  },
  "request_id":"request-id"
}
```

## Error Codes

### License Plate Format Error (HTTP 400)

```json
{"code":"4001","message":"车牌格式不正确","data":null,"request_id":"request-id"}
```

### No Data, Service Failure, and Token Failure (HTTP 200)

```json
{"code":"0001","message":"查无数据","data":null,"request_id":"request-id"}
```

```json
{"code":"5001","message":"供应商接口调用失败","data":null,"request_id":"request-id"}
```

```json
{"code":"5002","message":"供应商Token获取失败","data":null,"request_id":"request-id"}
```

Authentication-layer errors are HTTP `401`, `403`, `429`, `503` and do not use business codes.
