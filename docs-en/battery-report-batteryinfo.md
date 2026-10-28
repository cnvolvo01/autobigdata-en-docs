---
title: Battery Report - BatteryInfo
category: NEV Three-Electric Systems
order: 1
docType: interface
is_active: yes
description: "Judge vehicle condition and price based on battery health, capacity, range, and mileage."
---
# Battery Report - BatteryInfo

## Use Cases

- **NEV used car valuation**: judge vehicle condition and price based on battery health, capacity, range, and mileage.
- **Finance and insurance risk control**: assist residual value assessment, auto-loan review, insurance underwriting, and extended-warranty pricing.
- **After-sales repair and maintenance**: plan repair, replacement, and maintenance based on test results and alarm information.
- **Fleet operation management**: track vehicle battery status, fault risk, and usage performance to support retirement decisions.



## Endpoint

See the cooperation email notification for the endpoint.


## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| access_token | string | Yes | Access token; generate it via the App.Auth.ApplyToken interface (or contact business staff) |
| vin | string | Yes | VIN, e.g., LNBSCCAKXEF0200** |

## Response Fields

### Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| ret | integer | Legacy business status code; `200` = success, `4xx` = client error, `5xx` = server error. |
| data | object/null | Traction battery report data. |
| msg | string | Message; contains error description on failure. |

### Top-level `data` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| checkDate | string/null | Battery test date. |
| engineType | string/null | Vehicle powertrain type; passed through from upstream. |
| batteryInfo | object/null | Battery health base information. |
| batteryStaticInfo | array | Battery static base information list; empty array when no data. |
| annualInspectionInfo | array | Traction battery annual-inspection item list; empty array when no data. |
| batteryEvaluationInfo | array | Same-city same-model battery consistency comparison list; empty array when no data. |
| chargingHabits | object/array | Charging behavior habits over the past year. |
| batteryAlarmInfo | object/null | Battery alarm information over the past 90 days. |
| batteryMaintenanceMsg | string/null | Traction battery maintenance advice. |
| otherinfo | array | Other vehicle information list; empty array when no data. |

### `batteryInfo` Fields

| Field | Type | Meaning |
| --- | --- | --- |
| batteryLevel | string/null | Battery composite rating; legacy examples are `S`, `A`, `B`, `C`, `D`; subject to upstream. |
| batteryModel | string/null | Battery model. |
| batteryValuation | number/null | Battery market valuation, in RMB. |
| fullCapacityAssessment | number/null | Current battery capacity, in Ah. |
| fullEndurance | number/string/null | Current full-charge range, in km. |
| batteryHealthVal | number/null | Battery health score. |
| batteryCapacityScore | number/null | Capacity score. |
| temperatureAccordScore | number/null | Temperature consistency score. |
| voltageAccordScore | number/null | Voltage consistency score. |
| irAccordScore | number/null | Internal-resistance consistency score. |
| isolationScore | number/null | Self-discharge / insulation metric score. |

### List and Collection Item Fields

| Path | Type | Meaning |
| --- | --- | --- |
| batteryStaticInfo[].staticKey / staticName / staticValue | string | Static field code, name, and value. |
| annualInspectionInfo[].annualInspectionName | string | Annual-inspection item name. |
| annualInspectionInfo[].ownValue | number | This vehicle's measured value. |
| annualInspectionInfo[].annualInspectionValue | string | Annual-inspection standard or threshold. |
| annualInspectionInfo[].annualInspectionResult | string | Annual-inspection result; commonly "合格" (pass), non-closed enum. |
| batteryEvaluationInfo[].evaluationName | string | Comparison item name. |
| batteryEvaluationInfo[].ownData / otherData | number | This vehicle's / same-city same-model corresponding data. |
| batteryEvaluationInfo[].evaluationResult | string | Comparison result; commonly "优秀" (excellent), "正常" (normal), "较差" (poor), non-closed enum. |
| chargingHabits[].avgStartSoc / avgEndSoc | number | Average charge start/end SOC, in percent. |
| chargingHabits[].depthOfCharge | number | Depth of charge, in percent. |
| chargingHabits[].fastChargingYearRat | number | Fast-charging share over the past year, in percent. |
| batteryAlarmInfo.batteryLevel1Alarm/2Alarm/3Alarm | string | Level-1, level-2, level-3 fault alarm levels; commonly "优秀" (excellent), "一般" (fair), "差" (poor), non-closed enum. |
| otherinfo[].infoKey / infoName / infoValue | string | Other information code, name, and value. |


### Battery Static Base Information List

| Field Code | Field Name |
| --- | --- |
| enterpriseName | Battery manufacturer |
| batteryType | Battery type |
| batteryWarranty | Battery warranty |
| powerChange | Whether battery swapping |
| cellNumber | Number of cells |
| singleCellShape | Cell form factor |
| singleCellVoltage | Cell voltage (V) |
| batteryCapacityNominal | Nominal capacity (Ah) |
| batteryEnergyNominal | Nominal energy (kWh) |
| batteryVoltageNominal | Nominal voltage (V) |
| enduranceNominal | Nominal range (km) |
| fuelConsumption | Energy consumption per 100 km (kWh) |
| energyDensity | Energy density (kWh/kg) |
| batteryWeight | Total battery mass (kg) |
| batteryCombinationMode | Battery combination mode |


## Examples

### Successful Response Sample Data

```json

{  
    "batteryAlarmInfo": {  
        "batteryLevel2Alarm": "优秀",  
        "batteryLevel1Alarm": "优秀",  
        "batteryLevel3Alarm": "优秀"  
    },  
    "otherInfo": [  
        {  
            "infoName": "25-35度参考续航(夏季)",  
            "infoValue": "171",  
            "infoKey": "summerEndurance_01"  
        },  
        {  
            "infoName": "35-45度参考续航(夏季)",  
            "infoValue": "153",  
            "infoKey": "summerEndurance_02"  
        },  
        {  
            "infoName": "0-10度参考续航(春秋季)",  
            "infoValue": "153",  
            "infoKey": "springAutumnEndurance_01"  
        },  
        {  
            "infoName": "10-25度参考续航(春秋季)",  
            "infoValue": "166",  
            "infoKey": "springAutumnEndurance_02"  
        },  
        {  
            "infoName": "-10-0度参考续航(冬季)",  
            "infoValue": "117",  
            "infoKey": "winterEndurance_01"  
        },  
        {  
            "infoName": "<-10度参考续航(冬季)",  
            "infoValue": "90",  
            "infoKey": "winterEndurance_02"  
        },  
        {  
            "infoName": "循环次数",  
            "infoValue": "",  
            "infoKey": "cyclesNum"  
        },  
        {  
            "infoName": "总充电次数",  
            "infoValue": "",  
            "infoKey": "totalChargingNum"  
        },  
        {  
            "infoName": "表显里程",  
            "infoValue": "\/",  
            "infoKey": "totalMileage"  
        }  
    ],  
    "batteryEvaluationInfo": [  
        {  
            "ownData": 2,  
            "evaluationName": "历史单体平均温差（℃）",  
            "otherData": 4,  
            "evaluationResult": "优秀"  
        },  
        {  
            "ownData": 12,  
            "evaluationName": "历史单体平均压差（mV）",  
            "otherData": 28,  
            "evaluationResult": "优秀"  
        },  
        {  
            "ownData": 2,  
            "evaluationName": "历史单体最大温差（℃）",  
            "otherData": 4.8,  
            "evaluationResult": "优秀"  
        },  
        {  
            "ownData": 29,  
            "evaluationName": "历史单体最大压差（mV）",  
            "otherData": 45,  
            "evaluationResult": "优秀"  
        }  
    ],  
    "engineType": "插电式",  
    "annualInspectionInfo": [  
        {  
            "annualInspectionName": "动力蓄电池最高温度（℃）",  
            "annualInspectionValue": "≤60.0",  
            "annualInspectionResult": "合格",  
            "ownValue": 35  
        },  
        {  
            "annualInspectionName": "单体蓄电池最高电压（V）",  
            "annualInspectionValue": "≤4.5",  
            "annualInspectionResult": "合格",  
            "ownValue": 4.32  
        },  
        {  
            "annualInspectionName": "单体蓄电池电压极差（V）",  
            "annualInspectionValue": "≤0.3",  
            "annualInspectionResult": "合格",  
            "ownValue": 0.24  
        },  
        {  
            "annualInspectionName": "单体蓄电池最低电压（V）",  
            "annualInspectionValue": "≥1.8",  
            "annualInspectionResult": "合格",  
            "ownValue": 4.08  
        }  
    ],  
    "chargingHabits": {  
        "depthOfCharge": 43,  
        "avgStartSoc": 38,  
        "fastChargingYearRate": 13,  
        "avgEndSoc": 81  
    },  
    "checkDate": "2026-10-16",  
    "batteryMaintenanceMsg": "电池工况良好，请继续保持。",  
    "batteryInfo": {  
        "fullEndurance": "181",  
        "updateDate": null,  
        "batteryCapacityScore": 96,  
        "isolationScore": 95,  
        "batteryValuation": 22656,  
        "batteryHealthVal": 96,  
        "batteryModel": "",  
        "voltageAccordScore": 99,  
        "fullCapacityAssessment": 109.4,  
        "batteryLevel": "S",  
        "temperatureAccordScore": 99,  
        "irAccordScore": 97  
    },  
    "batteryStaticInfo": [  
        {  
            "staticName": "电池生产企业",  
            "staticValue": "蜂巢能源科技股份有限公司\/蜂巢能源科技(遂宁)有限公司",  
            "staticKey": "packManufacturer"  
        },  
        {  
            "staticName": "电池类型",  
            "staticValue": "三元材料电池",  
            "staticKey": "batteryType"  
        },  
        {  
            "staticName": "电池质保",  
            "staticValue": "8年或16万公里",  
            "staticKey": "batteryWarranty"  
        },  
        {  
            "staticName": "是否换电",  
            "staticValue": "否",  
            "staticKey": "powerChange"  
        },  
        {  
            "staticName": "电芯数量",  
            "staticValue": "140",  
            "staticKey": "cellNumber"  
        },  
        {  
            "staticName": "电芯单体外形",  
            "staticValue": "方形",  
            "staticKey": "singleCellShape"  
        },  
        {  
            "staticName": "电芯单体电压(V)",  
            "staticValue": "3.7",  
            "staticKey": "singleCellVoltage"  
        },  
        {  
            "staticName": "标称容量(Ah)",  
            "staticValue": "114",  
            "staticKey": "batteryCapacityNominal"  
        },  
        {  
            "staticName": "标称能量(kWh)",  
            "staticValue": "59",  
            "staticKey": "batteryEnergyNominal"  
        },  
        {  
            "staticName": "标称电压(V)",  
            "staticValue": "518",  
            "staticKey": "batteryVoltageNominal"  
        },  
        {  
            "staticName": "标称续航(km)",  
            "staticValue": "201",  
            "staticKey": "enduranceNominal"  
        },  
        {  
            "staticName": "百公里耗电(kWh)",  
            "staticValue": "7.75",  
            "staticKey": "fuelConsumption"  
        },  
        {  
            "staticName": "能量密度(Wh\/kg)",  
            "staticValue": "170.66",  
            "staticKey": "energyDensity"  
        },  
        {  
            "staticName": "电池总质量(kg)",  
            "staticValue": "346",  
            "staticKey": "batteryWeight"  
        },  
        {  
            "staticName": "电池组合方式",  
            "staticValue": "1P140S",  
            "staticKey": "batteryCombinationMode"  
        },  
        {  
            "staticName": "电芯生产企业",  
            "staticValue": "蜂巢能源科技股份有限公司\/蜂巢能源科技(遂宁)有限公司",  
            "staticKey": "cellEnterpriseName"  
        }  
    ]  
}

```

### Failed Response Sample Data, Parameter Error

```json
{
    "ret": 400,
    "data": {},
    "msg": "vin格式不规范"
}
```

## Error Codes

### No Data

```json
{
    "ret": 414,
    "data": {},
    "msg": "查无数据"
}
```

### Error List

| Status Code | Description |
| --- | --- |
| 400 | ret=400, client parameter error or invalid request |
| 404 | ret=404, the interface service does not exist |
| 406 | ret=406, access_token verification failed |
| 407 | ret=407, insufficient app_key permission or unknown application |
| 408 | ret=408, the current user is prohibited or not logged in |
| 414 | ret=414, no data found |
| 500 | Internal server error |


