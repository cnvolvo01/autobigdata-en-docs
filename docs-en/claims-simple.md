---
title: Claims - Claimsdata_simple
category: Accident & Claims
order: 3
docType: interface
is_active: yes
description: "Judge whether a vehicle has obvious accident risk through simplified claims information."
---
# Claims - Claimsdata_simple

## Use Cases

- **Quick used car verification**: judge whether a vehicle has obvious accident risk through simplified claims information.
- **Transaction quoting and acquisition grading**: incorporate loss amount, claim time, and loss part into pricing reference.
- **Insurance and anti-fraud review**: assist in identifying abnormal claims, duplicate reports, and high-risk vehicles.
- **Customer service and dispute handling**: provide a structured basis for condition description and after-sales communication.

## Endpoint

See the cooperation email notification.

## API Description

| Protocol | Method | Encoding | Response Format |
| --- | --- | --- | --- |
| HTTPS | GET/POST | UTF-8 | JSON |

## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| access_token | string | Yes | Access token, obtained from the authentication interface |
| vin | string | Yes | VIN, 17 characters |

## Response Fields

### Response Result

| Field | Type | Description |
| --- | --- | --- |
| success | boolean | True/false |
| msg | string | Message; null on success, specific error message on failure |
| data | object or mixed type | Business data, specified per interface; usually an object |

## Examples

### Sample Data

```text
{
    "ret": 200,
    "data": {
        "carType": "宝马BMW X5 30i M运动套装",
        "fuelType": "燃油",
        "typeName": "",
        "displacement": "",
        "bodyColor": "无",
        "engineNumber": "F016K714B48B20B",
        "debutDate": "2021-06-25 00:00:00",
        "purchasePrice": "685900.00",
        "orderNo": "AT-0415141525196**8",
        "carAge": "46",
        "ifHighriskVehicle": 0,
        "commercialPolicyTime": "1:289",
        "compulsoryPolicyTime": "3:262",
        "ifCarDamage": 0,
        "isConInsure": 1,
        "ifTuoBao": 0,
        "tuoBaoTime": "60-90天内",
        "commercialPolicyDangerCount": "A:2",
        "compulsoryPolicyDangerCount": "B:1",
        "threeRisksDangerCount": "C:0.0",
        "majorAccident": "A:1,B:0,C:0,D:0",
        "lossPart": "4:1,10:1,7:1,8:1,5:1,1:1",
        "compensationRatioo": "32.0%",
        "total": "290.84",
        "isLiabilityAvailable": "Y",
        "isExtendAvailable": null,
        "emiStandard": null,
        "ratedCapacity": null,
        "isMajorAccidentData": 2,
        "isMajorAccidentLevel": "高",
        "isOperation": "0",
        "licensePlate": "京A0***0",
        "commercialPolicyTransferCount": "1:1",
        "compulsoryPolicyTransferCount": "2:1",
        "usedCarPrice": "481693.85",
        "totalLoss": "1",
        "code": 0
    },
    "msg": ""
}
```

## Error Codes

### Error List

| Status Code | Description |
| --- | --- |
| 400 | ret=400, client parameter error or invalid request |
| 404 | The interface service does not exist |
| 406 | ret=406, access_token verification failed |
| 407 | ret=407, insufficient app_key permission or unknown application |
| 408 | ret=408, the current user is prohibited or not logged in |
| 500 | Internal server error |

---

## `data` Array Contents

| data Array Field | Type | Description | Sample Data |
| --- | --- | --- | --- |
| data.carType | string | Vehicle trim | 奥迪AUDI A8L 50TFSI QUATTRO轿车 |
| data.fuelType | string | Fuel type | 燃油 |
| data.typeName | string | Category name |  |
| data.displacement | string | Displacement |  |
| data.bodyColor | string | Body color | 无 |
| data.engineNumber | string | Engine number | CZS130416 |
| data.debutDate | string | First registration date | 2025-02-24 00:00:00 |
| data.purchasePrice | string | New car purchase price | 702942.00 |
| data.orderNo | string | Order number | AT-0415085401041**8 |
| data.carAge | string | Vehicle age, in months | 2 |
| data.ifHighriskVehicle | integer | Whether on the high-risk vehicle list, 1 yes 0 no | 0 |
| data.commercialPolicyTime | string | Commercial auto insurance policy countdown, e.g., 1:78 means (result 1 (commercial) = latest policy end date - query date, in days); NULL means no current policy, 2:null means current policy days < 0 | 1:316 |
| data.compulsoryPolicyTime | string | Compulsory insurance policy countdown, e.g., 3:78; NULL means no current policy, 4:null means current policy days < 0 | 3:316 |
| data.ifCarDamage | integer | Whether vehicle damage insurance is covered, 1 yes 0 no | 1 |
| data.isConInsure | integer | Whether continuously insured, 1 yes 0 no | 0 |
| data.ifTuoBao | integer | Whether lapsed (uninsured), 1 yes 0 no | 1 |
| data.tuoBaoTime | string | Lapse time, within 15 days / within 30 days |  |
| data.commercialPolicyDangerCount | string | Commercial auto insurance claim count (5-year claims): A:5 means A (commercial + claim count) | A:0 |
| data.compulsoryPolicyDangerCount | string | Compulsory insurance claim count (5-year claims): B:1 means B (compulsory + claim count) | B:0 |
| data.threeRisksDangerCount | string | Third-party liability claim count (5-year claims): C:0 means C (third-party + claim count, i.e., other vehicles hitting this vehicle) | C:0 |
| data.majorAccident | string | Major accident flag: A:1,B:0,C:0,D:0; A = collision, B = fire/spontaneous combustion, C = flood, D = theft/robbery | A:0,B:0,C:0,D:0 |
| data.lossPart | string | Loss part: 05:1,06:1,07:1,08:1,10:1; 1 = front + count, 2 = rear + count, 3 = roof + count, 4 = underside + count, 5 = front-left + count, 6 = rear-left + count, 7 = middle-left + count, 8 = front-right + count, 9 = rear-right + count, 10 = middle-right + count, 11 = interior + count, 12 = whole vehicle + count, 13 = null-unknown + count |  |
| data.compensationRatioo | string | Highest vehicle-damage loss ratio |  |
| data.total | string | Vehicle-damage composite score | 136.8 |
| data.isLiabilityAvailable | string | Whether liability insurance can be covered, returns N or Y (reserved, meaningless) | N |
| data.isExtendAvailable | string | Whether extended warranty can be covered, returns N or Y (reserved, meaningless) |  |
| data.emiStandard | string | Emission standard |  |
| data.ratedCapacity | string | Seating capacity |  |
| data.isMajorAccidentData | integer | Number of accidents | 0 |
| data.isMajorAccidentLevel | string | Accident level | 一般 |
| data.isOperation | string | Whether an operating vehicle, 1 yes 0 no | 0 |
| data.licensePlate | string | License plate | 空 |
| data.commercialPolicyTransferCount | string | Commercial auto insurance transfer count, e.g., 1:0 (1 = commercial code, 0 = transfer count) | 1:0 |
| data.compulsoryPolicyTransferCount | string | Compulsory insurance transfer count, e.g., 2:1 (2 = compulsory code, 1 = transfer count) | 2:0 |
| data.usedCarPrice | string | Used car disposal price | 673671.5 |
| data.totalLoss | string | Whether a total-loss vehicle (including constructive total loss); 0 no, 1 yes | 0 |
| data.code | integer | Success, non-zero failure | 0 |
| msg | string | Message; error description on failure |  |
