---
title: Battery Assessment
category: NEV Three-Electric Systems
order: 2
docType: interface
is_active: yes
description: "Judge vehicle condition and price based on battery health, range, capacity, mileage, and estimated battery value."
---
# Battery Report - battery-assessments

## Use Cases

- **NEV used car valuation and transaction verification**: judge vehicle condition and price based on battery health, range, capacity, mileage, and estimated battery value.
- **Finance and insurance risk control**: assist auto loans, financial leases, insurance underwriting, and residual value assessment, and identify battery degradation and abnormal risks.
- **After-sales repair and battery maintenance**: formulate maintenance, inspection, and battery replacement plans based on inspection items, alarm levels, and maintenance advice.
- **Fleet operation management**: track battery status, charging habits, mileage events, and abnormal records to optimize vehicle dispatch and retirement.
- **OEM and dealer product service**: analyze performance across models, battery types, and usage scenarios to support quality improvement and extended-warranty design.

## Endpoint

`POST /api/v1/veh-battery-assessments`

See the cooperation email notification for the endpoint.

## Request Parameters

### Request

Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

```json
{
  "vin":"1HGBH41JXMN00****",
  "plate":"",
  "modelCode":"FV6465BABEV",
  "usageType":"非营运"
}
```

`vin` is required and a 17-character VIN; `plate` is optional; `modelCode` is 1 to 128 characters; `usageType` is 1 to 64 characters and must not be empty. Do not add other fields to the request body.

## Response Fields

### Common Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| code | string | Business status code: `0000` success, `0001` no usable assessment data, `4001` parameter format error, `5001` service processing failure. Not used when the authentication layer rejects. |
| message | string | Business processing result description, returned by the service on success, no-data, or failure. |
| data | object/array/null | Business result. An object or array on success; usually null on no-data or business failure. |
| request_id | string | Request trace ID for troubleshooting; do not use it as a substitute for a key or token. |

### Top-level `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| vin | string/null | Vehicle VIN. |
| isDataAvailable | boolean | Whether usable battery assessment data exists; true in a successful report. |
| modelCode | string/null | Model code from the request or supplier. |
| inspectionDate | string/null | Battery assessment/test date. |
| powertrainType | string/null | Powertrain type; passed through from upstream, non-closed enum. |
| maintenanceAdvice | string/null | Traction battery maintenance advice. |
| salesModelName | string/null | Sales model name. |
| vehicleModel | string/null | Vehicle model. |
| manufactureYear | string/null | Production year or upstream production-time field. |
| firstRegistrationDate | string/null | First registration date. |
| totalMileageKm | string/null | Total mileage in km; value kept as a string for precision. |
| totalMileageRecordedAt | string/null | Total mileage record time. |
| mileageAssessmentDesc | string/null | Mileage assessment description. |
| fuelCellRatedPower | string/null | Fuel cell rated power. |
| driveMotorRatedPower | string/null | Drive motor rated power. |
| batteryHealth | object/null | Battery health metric set. |
| batterySpecs | array | Battery spec key-value list; empty array when no data. |
| additionalMetrics | array | Other assessment metric list; empty array when no data. |
| alarmLevels | object | Battery alarm-level set over the past 90 days; empty object when no data. |
| chargingHabits | object | Charging habit metric set; empty object when no data. |
| inspectionItems | array | Traction battery inspection item list. |
| peerComparisonItems | array | Peer-vehicle comparison item list. |
| mileageEvents | array | Historical mileage event list. |

### `batteryHealth` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| fullChargeRangeKm | string/null | Full-charge range, in km. |
| capacityScore | string/null | Capacity metric score. |
| batteryModel | string/null | Battery model. |
| temperatureConsistencyScore | string/null | Temperature consistency score. |
| selfDischargeScore | string/null | Self-discharge metric score. |
| estimatedValueCny | string/null | Estimated battery value, in RMB. |
| healthScore | string/null | Battery health score. |
| voltageConsistencyScore | string/null | Voltage consistency score. |
| currentCapacityAh | string/null | Current capacity, in Ah. |
| overallRating | string/null | Battery composite rating; passed through from upstream, legacy examples S/A/B/C/D, but not a closed enum in the modern interface. |
| internalResistanceConsistencyScore | string/null | Internal-resistance consistency score. |

### List and Collection Item Fields

| Path | Type | Meaning |
| --- | --- | --- |
| batterySpecs[].code / additionalMetrics[].code | string/null | Metric code. |
| batterySpecs[].name / additionalMetrics[].name | string | Metric name. |
| batterySpecs[].value / additionalMetrics[].value | string/null | Metric value. |
| inspectionItems[].name | string | Inspection item name. |
| inspectionItems[].vehValue | string/null | Actual vehicle value. |
| inspectionItems[].threshold | string/null | Judgment threshold. |
| inspectionItems[].result | string/null | Inspection result; passed through from upstream, non-closed enum. |
| peerComparisonItems[].name | string | Comparison metric name. |
| peerComparisonItems[].vehValue | string/null | This vehicle's metric value. |
| peerComparisonItems[].peerValue | string/null | Peer-vehicle metric value. |
| peerComparisonItems[].result | string/null | Comparison result; passed through from upstream, non-closed enum. |
| alarmLevels.levelOne / levelTwo / levelThree | string/null | Level-one, level-two, level-three alarm levels; passed through from upstream, non-closed enum. |
| chargingHabits.annualFastChargingRatePercent | string/null | Fast-charging share over the past year, in percent. |
| chargingHabits.averageChargeEndSocPercent | string/null | Average charge-end SOC, in percent. |
| chargingHabits.chargeDepthPercent | string/null | Depth of charge, in percent. |
| chargingHabits.averageChargeStartSocPercent | string/null | Average charge-start SOC, in percent. |
| mileageEvents[].recordedMileage_10K_Km | string/null | Recorded mileage, in 10,000 km. |
| mileageEvents[].recordedAt | string/null | Mileage record date or time. |
| mileageEvents[].isAbnormal | boolean/null | Whether this mileage record is abnormal. |
| mileageEvents[].mileageDelta_10k_Km | string/null | Mileage difference from the adjacent record, in 10,000 km. |

Numeric fields other than booleans are returned as strings; unprovided optional fields are null, lists with no data are empty arrays, and sets with no data are empty objects.

## Examples

### Free Test Case and curl

Uses the current Swagger default input: `vin=1HGBH41JXMN00****`, `plate` empty, `modelCode=FV6465BABEV`, `usageType=非营运`.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/veh-battery-assessments" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"vin":"1HGBH41JXMN00****","plate":"","modelCode":"FV6465BABEV","usageType":"非营运"}'
```

### Success Response

The following is the field-structure example based on the default test input; health, date, and rating are for illustration only, and the actual result is subject to the interface response.

```json
{
  "code":"0000",
  "message":"成功",
  "data":{
    "vin":"1HGBH41JXMN00****",
    "isDataAvailable":true,
    "modelCode":"FV6465BABEV",
    "inspectionDate":"2026-06-01",
    "powertrainType":"纯电动",
    "maintenanceAdvice":"建议按周期检查电池状态",
    "salesModelName":"示例车型",
    "vehicleModel":"示例车型",
    "manufactureYear":"2022",
    "firstRegistrationDate":"2022-06-01",
    "totalMileageKm":"1.0000",
    "totalMileageRecordedAt":"2026-06-01",
    "mileageAssessmentDesc":"里程记录正常",
    "fuelCellRatedPower":null,
    "driveMotorRatedPower":"100",
    "batteryHealth":{"fullChargeRangeKm":"420","capacityScore":"95","batteryModel":"示例电池","temperatureConsistencyScore":"98","selfDischargeScore":"97","estimatedValueCny":"80000","healthScore":"95","voltageConsistencyScore":"96","currentCapacityAh":"120","overallRating":"A","internalResistanceConsistencyScore":"97"},
    "batterySpecs":[{"code":"capacity","name":"电池容量","value":"60"}],
    "additionalMetrics":[{"code":"energy","name":"能耗","value":"14.5"}],
    "alarmLevels":{"levelOne":null,"levelTwo":null,"levelThree":null},
    "chargingHabits":{"fastChargeRatio":"0.30","slowChargeRatio":"0.70"},
    "inspectionItems":[{"name":"电池健康度","vehValue":"95","threshold":"80","result":"正常"}],
    "peerComparisonItems":[{"name":"健康度","vehValue":"95","peerValue":"90","result":"较好"}],
    "mileageEvents":[{"recordedMileage_10K_Km":"1.0000","recordedAt":"2026-06-01","isAbnormal":false,"mileageDelta_10k_Km":"0.0000"}]
  },
  "request_id":"request-id"
}
```

`data` may also contain vehicle information, maintenance advice, mileage information, and assessment details; unprovided data returns `null` or an empty array. When upstream has no data, treat as `0001` with `data=null`.

## Error Codes

### Business Codes & Notes

`0000` success, `0001` no usable assessment data, `4001` parameter format incorrect, `5001` service processing failure. Authentication-layer errors are handled as `401`, `403`, `429`, `503`.

### Service Processing Failure (HTTP 200)

```json
{"code":"5001","message":"供应商接口调用失败","data":null,"request_id":"request-id"}
```

Authentication-layer errors are HTTP `401`, `403`, `429`, `503` and do not use the above business codes.



### No Usable Assessment Data (HTTP 200)

```json
{"code":"0001","message":"查无数据","data":null,"request_id":"request-id"}
```
