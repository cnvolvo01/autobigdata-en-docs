---
title: Owner Consistency Verification (Compulsory & Commercial)
category: Auto Finance — Person-Vehicle Verification
order: 1005
docType: interface
is_active: yes
description: "Verify the consistency between the vehicle and its current owner using VIN, owner ID number, and insurance information."
---
# Owner Consistency Verification — Compulsory and Commercial Auto Insurance Separately

## Use Cases

- **Used car transaction verification**: verify the consistency between the vehicle and its current owner using VIN, owner ID number, and insurance information.
- **Mobility and freight platform review**: judge whether the compulsory and commercial auto insurance policyholder or owner information matches, reducing identity-impersonation risk.
- **Vehicle finance risk control**: assist auto loans and financial leases in verifying vehicle ownership and insurance status.
- **OEM used-car trade-in subsidy policy verification**: verify the authenticity of trade-in subsidy policies launched by OEMs in new-car marketing.



## Endpoint

`POST /api/v1/verifyVehOwnerConsistency`

See the cooperation email notification for the endpoint.

## Request Parameters

### Request

Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{
  "vin":"1HGBH41JXMN00****",
  "idCard":"<ID_CARD>",
  "licensePlate":""
}
```

`vin` is a 17-character VIN; `idCard` is required and 18 characters; `licensePlate` is optional and supports 7- or 8-character ordinary/new-energy plates. The service trims surrounding whitespace and normalizes letters.

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
| vin | string | The VIN of the queried vehicle. |
| ownerConsistency | string | Owner consistency verification result; usually text containing "商业险:是/否、交强险:是/否" (commercial: yes/no, compulsory: yes/no); passed through from upstream, non-closed enum. |

## Examples

### Free Test Case

Uses the current Swagger default input. This ID number is only a docs example; replace it with authorized test data.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/verifyVehOwnerConsistency" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN00****","idCard":"<ID_CARD>","licensePlate":""}'
```

### Success Response

The following is the field-structure example based on the default test input; the consistency result is for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{"vin":"1HGBH41JXMN00****","ownerConsistency":"商业险:否,交强险:否"},
  "request_id":"request-id"
}
```

ID numbers are sensitive data and must only be transmitted on the client's controlled server side; do not write them into logs, tickets, or screenshots.

## Error Codes

### Business Codes & Notes

`0000` success, `0001` no data, `4001` input format incorrect, `5001` service processing failure, `5002` supplier token acquisition failure. Authentication-layer errors are handled as `401`, `403`, `429`, `503`.

### ID Number Length Error (HTTP 422)

Request: `{"vin":"1HGBH41JXMN00****","idCard":"123","licensePlate":""}`

```json
{"code":"invalid_request","message":"request validation failed","request_id":"request-id"}
```

### No Data or Supplier Failure (HTTP 200)

```json
{"code":"0001","message":"查无数据","data":null,"request_id":"request-id"}
```

```json
{"code":"5001","message":"供应商接口调用失败","data":null,"request_id":"request-id"}
```

```json
{"code":"5002","message":"供应商Token获取失败","data":null,"request_id":"request-id"}
```

Authentication failure, no path permission, rate limiting, and unavailable authentication dependencies are HTTP `401`, `403`, `429`, `503`.
