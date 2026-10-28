---
title: Mileage Assessment
category: Vehicle Transfer & Condition
order: 1013
docType: interface
is_active: no
---
# Mileage Assessment

## Use Cases

- **Used car valuation and acquisition review**: combine current mileage and historical records to assist pricing, acquisition, and inventory grading.
- **Mileage anomaly identification**: detect rollback, jumps, or discontinuous records to trigger manual inspection.
- **Finance and insurance risk control**: provide a reference for vehicle residual value, loan terms, premiums, and underwriting rules.
- **After-sales and fleet management**: support maintenance reminders, repair-cycle judgment, and operating-vehicle status tracking.

## Endpoint

`POST /api/v1/veh-mileage-assessments`

See the cooperation email notification for the endpoint.

## Request Parameters



Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{
  "vin":"1HGBH41JXMN00****",
  "mileage_10k_km":1.5
}
```

`vin` is required and a 17-character VIN; `mileage_10k_km` must be greater than 0, in units of 10,000 km, and may be a decimal. Do not add other fields to the request body.

## Response Fields

### Common Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| code | string | Business status code: `0000` success, `0001` no usable assessment data, `4001` parameter format error, `5001` service processing failure. Not used when the authentication layer rejects. |
| message | string | Business processing result description, returned by the service on success, no-data, or failure. |
| data | object/array/null | Business result. An object or array on success; usually null on no-data or business failure. |
| request_id | string | Request trace ID for troubleshooting; do not use it as a substitute for a key or token. |

### `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| vin | string | The normalized vehicle VIN. |
| assessment | string | Mileage assessment conclusion, fixed enum: `里程正常` (normal), `里程异常` (abnormal), `无法判定` (undetermined). |
| assessmentDesc | string/null | Text description of the assessment conclusion. |
| abnormalRecordCount | integer/null | Number of abnormal mileage records; may be null when undetermined. |
| mileageEvents | array | Historical mileage event list; empty array when no records. |

### `mileageEvents[]` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| recordedMileage_10K_Km | string/null | Recorded mileage, in 10,000 km. |
| recordedAt | string/null | Record date or time. |
| isAbnormal | boolean/null | Whether this record is abnormal. |
| mileageDelta_10k_Km | string/null | Mileage difference from the adjacent record, in 10,000 km. |

## Examples

### Free Test Case and curl

Uses the current Swagger default input: `vin=1HGBH41JXMN00****`, `mileage_10k_km=1`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/veh-mileage-assessments" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN00****","mileage_10k_km":1}'
```

### Success Response

The following is the field-structure example based on the default test input; the assessment conclusion and event content are for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{
    "vin":"1HGBH41JXMN00****",
    "assessment":"里程正常",
    "assessmentDesc":"未发现明显异常",
    "abnormalRecordCount":0,
    "mileageEvents":[]
  },
  "request_id":"request-id"
}
```

`assessment` is `里程正常`, `里程异常`, or `无法判定`. Event items contain recorded mileage, record time, whether abnormal, and mileage difference; missing values may be `null`.

## Error Codes

### Business Codes & Notes

`0000` success, `0001` no usable assessment data, `4001` parameter format incorrect, `5001` service processing failure. Authentication-layer errors are handled as `401`, `403`, `429`, `503`.

### VIN Format Error (HTTP 400)

```json
{"code":"4001","message":"VIN格式不正确","data":null,"request_id":"request-id"}
```

### Service Processing Failure (HTTP 200)

```json
{"code":"5001","message":"供应商接口调用失败","data":null,"request_id":"request-id"}
```

Authentication-layer errors are HTTP `401`, `403`, `429`, `503` and do not use the above business codes.
