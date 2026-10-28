---
title: Commercial Auto Insurance Expiry
category: Auto Insurance
order: 1
docType: interface
is_active: yes
description: "Remind owners to renew before expiry based on remaining days, at 30-day, 60-day, and other milestones."
---
# Commercial Auto Insurance Expiry (Remaining Days)

## Use Cases

- **Expiry reminders**: remind owners to renew in time based on remaining days at 30-day, 60-day, and other milestones to avoid lapse.
- **Renewal management**: insurance institutions or sales staff can filter clients nearing expiry to conduct renewal follow-up, quoting, and plan recommendations.
- **Risk alerts**: flag vehicles with few remaining days or already expired, indicating potential lack of commercial auto insurance coverage.
- **Customer service**: support staff can quickly query policy validity to accurately answer questions about coverage period and renewal timing.
- **Operational statistics**: count policies nearing expiry in different periods to assist renewal tasks and marketing plans.
- **Data dashboards**: display insurance status in vehicle or policy management systems for intuitive visibility into current coverage.

## Endpoint

`POST /api/v1/getVehCommInsExpDate`

See the cooperation email notification for the endpoint.

## Request Parameters

Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{"vin":"1HGBH41JXMN000001"}
```

`vin` is required and is a 17-character vehicle identification number. Do not add other fields to the request body.

## Response Fields

### Common Response Fields

| Field         | Type                | Meaning                                                                                          |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------- |
| code       | string            | Business status code: `0000` success, `0001` no data, `4001` parameter format error, `5001` service processing failure, `5002` supplier token acquisition failure. Not used when the authentication layer rejects. |
| message    | string            | Business processing result description, returned by the service on success, no-data, or failure. |
| data       | object/array/null | Business result. An object or array on success; usually null on no-data or business failure. |
| request_id | string            | Request trace ID for troubleshooting; do not use it as a substitute for a key or token. |

### `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| vin | string | The VIN of the queried vehicle. |
| commInsExpDate | string | Commercial auto insurance remaining-days range; returned by the supplier, common format like `(270，300]`, not a fixed enum. |

## Examples

### Free Test Case

Uses the current Swagger default input: `vin=1HGBH41JXMN000001`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/getVehCommInsExpDate" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN000001"}'
```

### Success Response

The following is the field-structure example based on the default test input; dates and business values are for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{"vin":"1HGBH41JXMN000001","commInsExpDate":"(270，300]"},
  "request_id":"request-id"
}
```

`data.commInsExpDate` is the commercial auto insurance expiry information returned by the service; the display format is subject to the actual response.

## Error Codes

### Business Codes & Notes

`0000` success, `0001` no data, `4001` VIN format incorrect, `5001` service processing failure, `5002` supplier token acquisition failure. Authentication failure, no path permission, rate limiting, and authentication dependency failure are handled as `401`, `403`, `429`, `503`, respectively. For troubleshooting, provide only `request_id`; do not submit complete sensitive request bodies.

### VIN Format Error (HTTP 400)

Request: `{"vin":"INVALID"}`

```json
{"code":"4001","message":"VIN格式不正确","data":null,"request_id":"request-id"}
```

### No Data (HTTP 200)

```json
{"code":"0001","message":"查无数据","data":null,"request_id":"request-id"}
```

### Service or Supplier Token Failure (HTTP 200)

```json
{"code":"5001","message":"供应商接口调用失败","data":null,"request_id":"request-id"}
```

```json
{"code":"5002","message":"供应商Token获取失败","data":null,"request_id":"request-id"}
```

Authentication failure, no path permission, rate limiting, and unavailable authentication dependencies return HTTP `401`, `403`, `429`, `503`, respectively; see the authentication and common conventions for response examples.
