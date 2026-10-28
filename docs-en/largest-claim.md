---
title: Largest Claim
category: Accident & Claims
order: 2
docType: interface
is_active: yes
description: "Judge the severity of a vehicle's major accident, repair scope, and depreciation."
---
# Largest Claim Query

## Use Cases

- **Used car valuation and transaction decisions**
    - Judge the severity of a vehicle's major accident, repair scope, and depreciation.
    - Support pricing, acquisition, replacement, and condition disclosure.
- **Insurance underwriting and renewal**
    - Assess the vehicle's historical risk, claim frequency, and potential payout risk.
    - Assist in premium pricing, coverage restrictions, and renewal review.
- **Fleet and corporate vehicle management**
    - Monitor major accidents, repair costs, and downtime impact of operating vehicles.
    - Support vehicle retirement, replacement, and driving-safety management.


## Endpoint

`POST /api/v1/getVehMaxClaimIncident`
See the cooperation email notification for the endpoint.

## Request Parameters

### Request

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

| Field | Type | Meaning |
| --- | --- | --- |
| vin | string | The VIN of the queried vehicle. |
| insuranceType | any/null | Insurance type and insured object, e.g., "商业险,主车" (commercial auto insurance, primary vehicle); passed through from upstream, non-closed enum. |
| accidentTime | any/null | Time of the largest claim; format determined by upstream data. |
| accidentRegion | any/null | Region where the largest claim occurred. |
| vehicleDamageAmount | any/null | Vehicle loss amount. |
| personInjuryAmount | any/null | Personal injury amount. |
| repairAgency | any/null | Repair agency name. |
| partsGroups | array | List of damaged parts grouped by repair operation; empty array when no parts. |
| lossPart | any/null | Loss-part summary; usually comma-separated text, passed through from upstream. |

### `partsGroups[].parts[]` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| operation | any/null | Repair operation, e.g., "更换" (replace); passed through from upstream, non-closed enum. |
| parts | array | The list of parts for the operation. |
| parts[].partIdentifier | any/null | Part name or part identifier. |
| parts[].type | any/null | Part type code/name; passed through from upstream, non-closed enum. |
| parts[].lossPartIdentifier | any/null | Part loss location or identifier. |
| parts[].flag | any/null | Supplier part additional flag. |

## Examples

### Free Test Case

Uses the current Swagger default input: `vin=1HGBH41JXMN000001`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/getVehMaxClaimIncident" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN000001"}'
```

### Success Response

The following is the field-structure example based on the default test input; accident, amount, and part values are for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{
    "vin":"1HGBH41JXMN00****",
    "insuranceType":"商业险,主车",
    "accidentTime":"2019-01",
    "accidentRegion":"天津市津南区***",
    "vehicleDamageAmount":162337.0,
    "personInjuryAmount":5000.0,
    "repairAgency":"天津悦诚****公司",
    "partsGroups":[{"operation":"更换","parts":[{"partIdentifier":"仪表台扬声器（左）","type":1,"lossPartIdentifier":"内部","flag":""}]}],
    "lossPart":"内部,正前,底部,左前,顶部,右侧,左侧"
  },
  "request_id":"request-id"
}
```

`partsGroups` is always an array; part items may contain `partIdentifier`, `type`, `lossPartIdentifier`, and `flag`, with missing values as `null`.

## Error Codes

### Business Codes & Notes

`0000` success, `0001` no data, `4001` incorrect parameter, `5001` service processing failure, `5002` supplier token acquisition failure. Authentication-layer errors are handled per the common authentication documentation, and `request_id` is retained.

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

Authentication failure, no path permission, rate limiting, and unavailable authentication dependencies return HTTP `401`, `403`, `429`, `503` without using the above business codes.
