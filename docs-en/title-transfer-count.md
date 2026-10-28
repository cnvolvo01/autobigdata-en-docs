---
title: Vehicle Ownership Transfer Count
category: Vehicle Transfer & Condition
order: 1004
docType: interface
is_active: yes
description: "Judge vehicle transfer frequency to assist pricing, acquisition, and sale."
---
# Vehicle Ownership Transfer Count Query

## Use Cases

- **Used car valuation and transaction decisions**: judge vehicle transfer frequency to assist pricing, acquisition, and sale.
- **Condition and risk verification**: identify potential risks such as frequent transfers and short-term flipping.
- **Insurance and finance review**: assist insurance underwriting, auto-loan approval, and risk assessment.

## Endpoint

`POST /api/v1/getVehTransferCount`

See the cooperation email notification for the endpoint.

## Request Parameters



Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{"vin":"1HGBH41JXMN000001"}
```

`vin` is required and must be a 17-character VIN. Do not add other fields to the request body.

## Response Fields

### Common Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| code | string | Business status code: `0000` success, `0001` no data, `4001` parameter format error, `5001` service processing failure, `5002` supplier token acquisition failure. Not used when the authentication layer rejects. |
| message | string | Business processing result description, returned by the service on success, no-data, or failure. |
| data | object/array/null | Business result. An object or array on success; usually null on no-data or business failure. |
| request_id | string | Request trace ID for troubleshooting; do not use it as a substitute for a key or token. |

### `data` Fields

| Field            | Type     | Meaning                              |
| ------------- | ------ | --------------------------------- |
| vin           | string | The VIN of the queried vehicle.                        |
| transferCount | string | Historical vehicle ownership-transfer count; returned as a string, `"0"` is a valid zero-transfer result. |

## Examples

### Free Test Case

Uses the current Swagger default input: `vin=1HGBH41JXMN000001`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/getVehTransferCount" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN000001"}'
```

### Success Response

The following is the field-structure example based on the default test input; the count is for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{"vin":"1HGBH41JXMN00****","transferCount":"0"},
  "request_id":"request-id"
}
```

`transferCount` uses a string; `"0"` is a valid result and must not be treated as no-data.

## Error Codes

### Business Codes & Notes

`0000` success, `0001` no data, `4001` VIN format incorrect, `5001` service processing failure, `5002` supplier token acquisition failure. Authentication-layer errors are handled per the common authentication documentation.

### VIN Format Error (HTTP 400)

```json
{"code":"4001","message":"VIN格式不正确","data":null,"request_id":"request-id"}
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
