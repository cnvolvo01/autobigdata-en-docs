---
title: Claims Report - InsuranceReportByVIN
category: Accident & Claims
order: 4
docType: interface
is_active: yes
description: "Obtain relatively complete insurance and claims records by VIN to support acquisition decisions."
---
# Claims Report - InsuranceReportByVIN

## Use Cases

- **Deep used car condition verification**: obtain relatively complete insurance and claims records by VIN to support acquisition decisions.
- **Accident risk and price assessment**: combine loss amount, accident type, and repair clues for pricing and grading.
- **Insurance review and anti-fraud**: verify case status, claim count, and abnormal flags to assist risk judgment.
- **Report delivery and customer communication**: used for condition disclosure, transaction explanation, and after-sales dispute records.

## Endpoint

See the cooperation email notification.

## Request Parameters

### Request Method

POST

### Request Parameters

| Parameter    | Type   | Required | Description          |
| ------------ | ------ | ---- | ---------- |
| access_token | String | Yes  | Access token |
| vin          | String | Yes  | Vehicle identification number |
| notify_url   | String | Yes  | Publicly accessible callback URL |
| req_img      | String | Yes  | Driving license image URL |
| plate_num    | String | No   | License plate number (recommended) |
| engine_num   | String | No   | Engine number |

## Response Fields

### Synchronous Response Result

{ "ret": 200, "data": { "orderNum": "735790323510**5**0" }, "msg": "" }

orderNum // Query order number

### Async Notification Field Structure

| Field Name | Type | Description |
| --- | --- | --- |
| orderReportVehicle | Object | Vehicle base information |
| orderReportVehicleModel | Object | Model information |
| orderReportVehicleExactInsurance | Object | Precise claim information |
| orderReportExtend | Object | Report extension information (contains PDF and JPG report links) |

## Examples

### Async Notification Example

Example

{ "orderReportVehicle":{// Vehicle base information
 "vin":"LBV61AF09PSB66xxx",// VIN
 "plateNum":"",// License plate number
 "engineNum":"",// Engine number
 "suppliers":[12],// Product code set
 "is_true":true,// true: has data; false: no data
 "orderNum":"20250723262454125**3"// Order number
 },
 "orderReportVehicleModel":{// Model information
 "brand":"",// Brand
 "series":"",// Series
 "is_true":""// true: has data; false: no data
 },
 "orderReportVehicleExactInsurance":{// Precise claim information
 "is_true":1,// Flag: 1 = purchased with data; 2 = purchased, query no data; 3 = not purchased; 4 = purchase failed
 "data":[{// Repair information
 "VehicleInfo":{// Vehicle information
 "FirstRegDate":"1-2年",// Production date
 "IsBusinessRecord":"否",// Whether there are business records
 "DriverNumber":"1任",// Number of owners
 "UseNatureCode":"非营业企业",// Current usage type
 "IsNotOwn":"是",// Whether there is a non-individual owner
 "OwnerType":"个人"// Current owner type
 },
 "InsuranceInfo":{// Insurance information
 "IsEffectiveCMI":"是",// Current commercial auto insurance validity
 "LargeAmount":"5000",// Largest loss amount
 "RecordicPending":"否",// Unclosed insurance case record (yes/no)
 "IsWaterflooded":"否",// Whether flooded
 "Inscompensation":"否",// Insurance claim denial record (yes/no)
 "RecordIWriteoff":"否",// Insurance case cancellation record (yes/no)
 "CpiDangTimes":"0",// Compulsory insurance claim count
 "CmiDangTimes":"1",// Commercial auto insurance claim count
 "IsSeriescoverCPI":"多张保单连续投保",// Compulsory insurance continuity
 "IsRobber":"否",// Whether theft/robbery occurred
 "IsEffectiveCPI":"是",// Current compulsory insurance validity
 "IsBurned":"否"// Whether burned
 },
 "ClaimDetail":[{// Claim information
 "LossoccurDate":"2024年二季度",// Claim time
 "LossPart":"喷漆:右后视镜上壳,喷漆:右前翼子板,喷漆:右后翼子板,保险杠,喷漆:右前车门",// Loss part
 "VehicleLossAmount":"5000",// Vehicle loss amount
 "IsRobber":"否",// Whether theft/robbery
 "ClaimType":"商业险",// Claim type
 "IsBurned":"否",// Whether burned
 "IsWaterflooded":"否",// Whether flooded
 "ClaimStatus":"已结案，结案金额大于0"// Case status
 }]
 }]
 },
 "orderReportExtend":{// Report extension information
 "is_true":false,// false when empty; true when it has content
 "orderReportUrl1":"",// Claim report in PDF generated from existing content
 "orderReportUrl2":"",// Claim report in JPG generated from existing content
 "orderReportUrl3":""// Claim report in HTML generated from existing content
 } }

## Error Codes

### Error Code List

| Error Code (ret) | Description |
| --- | --- |
| 200 | Success |
| 400 | Error, usually parameter validation failure, invalid VIN format, abnormal request, etc. |
| 404 | No data found |



---

### Async Notification Description

The async notification pushes a JSON payload to the callback URL provided in the request. After processing the notification, output `1` to confirm receipt.

Normally it completes within about 20 seconds. Obtain the downstream client's success response;

otherwise it re-pushes every 3 minutes, up to 12 times.

### `orderReportVehicle` Structure

| Parameter | Type | Description |
| --- | --- | --- |
| vin | String | VIN |
| plateNum | String | License plate number |
| engineNum | String | Engine number |
| orderNum | String | Order number |
| suppliers | Array | Product code set |
| is_true | Boolean | true: has data; false: no data |

### `orderReportVehicleModel` Structure

| Parameter | Type | Description |
| --- | --- | --- |
| brand | String | Brand |
| series | String | Series |
| is_true | Boolean | true: has data; false: no data |

### `orderReportVehicleExactInsurance` Structure

| Parameter | Type | Description |
| --- | --- | --- |
| data | Array | Repair information |
| is_true | Byte | Flag: 1 = purchased with data; 2 = purchased, query no data; 3 = not purchased; 4 = purchase failed |

#### `Data.InsuranceInfo` Structure

| Parameter | Description |
| --- | --- |
| IsEffectiveCPI | Current compulsory insurance validity |
| IsEffectiveCMI | Current commercial auto insurance validity |
| IsRobber | Whether theft/robbery occurred |
| IsBurned | Whether burned |
| IsWaterflooded | Whether flooded |
| IsSeriescoverCDR | Vehicle damage insurance continuity |
| IsSeriescoverCPI | Compulsory insurance continuity |
| IsEffectiveTPL | Current third-party liability insurance validity |
| IsEffectiveMVL | Current motor vehicle loss insurance validity |
| IsCoverageMVL | Current vehicle damage coverage amount |
| CpiDangTimes | Compulsory insurance claim count |
| CmiDangTimes | Commercial auto insurance claim count |
| LargeAmount | Largest loss amount |
| LargeClaims | Large claim (yes/no) |
| RecordicPending | Unclosed insurance case record (yes/no) |
| RecordIWriteoff | Insurance case cancellation record (yes/no) |
| Inscompensation | Insurance claim denial record (yes/no) |

#### `Data.VehicleInfo` Structure

| Parameter | Description |
| --- | --- |
| FirstRegDate | First registration date |
| BodyColor | Body color |
| CarCategory | Vehicle category |
| DriverNumber | Number of owners |
| OwnerType | Current owner type |
| UseNatureCode | Current usage type |
| engineNum | Engine number |
| EmissionStandards | Emission standard |
| ProductionDate | Production date |
| IsBusinessRecord | Whether there are business records |
| VIN | VIN |
| plateNum | License plate number |
| plateType | Plate type code (see code table) |
| VehicleCategory | Category attribute |
| ReplacementValue | New car purchase price |
| Brand | Brand name |
| vehicleType | Vehicle type (see code table) |
| VehicleDisplacement | Displacement |
| ModelName | Trim name |
| RatedPasscapa | Rated seating capacity |
| IsNotOwn | Whether there is a non-individual owner |

#### `Data.ClaimDetail` Structure

| Parameter | Description |
| --- | --- |
| ClaimStatus | Case status |
| LossoccurDate | Claim time |
| ClaimType | Claim type |
| OptionCause | Accident cause |
| AccidentLiab | Accident liability assignment |
| VehicleLossAmount | Vehicle loss amount |
| IsRobber | Whether theft/robbery |
| IsBurned | Whether burned |
| IsWaterflooded | Whether flooded |
| LossPart | Loss part |

### `orderReportExtend` Structure

| Parameter | Type | Description |
| --- | --- | --- |
| is_true | Boolean | true: has data; false: no data |
| orderReportUrl1 | String | Formatted HTML report generated from the text JSON; has content immediately after the callback is received |
| orderReportUrl2 | String | AI-extracted risk summary report generated later; because AI generation takes time, it usually has content about 5 minutes after the callback |
| orderReportUrl3 | String | Empty, reserved field |

Notes

The AI-extracted risk summary report is a test giveaway; it may be removed later due to policy or technical reasons.

### Formatted HTML

[https://{domain}/20251205/LBVHY3101LMW30**1_20251205918493717**6_3BlV2r.html](https://{domain}/20251205/LBVHY3101LMW30**1_20251205918493717**6_3BlV2r.html)

### AI-extracted Risk Summary Report

[https://{domain}/20251205/LBVHY3101LMW30**1_20251205918493717**6_3BlV2r_ai.html](https://{domain}/20251205/LBVHY3101LMW30**1_20251205918493717**6_3BlV2r_ai.html)

---
