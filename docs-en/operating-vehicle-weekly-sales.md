---
title: Operating Vehicle Weekly Sales
category: New Car Sales Analysis
order: 6
docType: interface
is_active: yes
description: "Track new operating-vehicle additions and brand/type changes on a weekly basis."
---
# Operating Vehicle Weekly Sales

## Use Cases

- Track new operating-vehicle additions and brand/type changes on a weekly basis.
- Analyze vehicle structure by emission standard, fuel type, horsepower range, and drive form.
- Locate the regional distribution and incremental market of operating vehicles (passenger transport, hazardous goods, and heavy-duty) by province, city, and district.
- Support commercial vehicle sales, operating-fleet management, regional deployment, and policy-effect assessment.

## Data Fields



```json
{
  "week": "string",
  "brand": "string",
  "vehicle_type": "string",
  "emission_standard": "string",
  "fuel_type": "string",
  "horsepower_range": "string",
  "drive_form": "string",
  "province": "string",
  "city": "string",
  "district": "string",
  "engine_model": "string",
  "vehicle_model": "string",
  "vehicle_count": "integer"
}
```

## Data Sample

The following is a spreadsheet-style display of the first 5 records of the source file.

| week         | brand    | vehicle_type | emission_standard | fuel_type | horsepower_range       | drive_form | province   | city   | vehicle_model               | vehicle_count |
| ------------ | ----- | ---- | ---- | ---- | --------- | ---- | --- | --- | ------------------ | --- |
| 202606-week1 | 安徽江淮  | Cargo   | China VI   | Diesel   | [200-240) | 4x2  | 云南省 | 昭通市 | HFC5181CCYB80K1D4S | 3   |
| 202606-week1 | 卡销    | Tractor   | China VI   | Diesel   | [440-480) | 6x4  | 北京市 | 顺义区 | ZZ4257V324GF1      | 3   |
| 202606-week1 | 卡销    | Cargo   | China VI   | Diesel   | [200-240) | 4x2  | 四川省 | 成都市 | ZZ5187TPBK501GF1   | 2   |
| 202606-week1 | 福田其他  | Special   | China VI   | Diesel   | [320-360) | 8x4  | 四川省 | 绵阳市 | WL5316GJBBJG6A0    | 2   |
| 202606-week1 | 东风商用车 | Dump   | China V   | Diesel   | [160-200) | 4x2  | 安徽省 | 安庆市 | DFH3180B2          | 3   |
