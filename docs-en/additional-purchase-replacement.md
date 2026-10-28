---
title: Additional Purchase & Replacement
category: Auto Market Research
order: 221
docType: interface
is_active: yes
description: "Analyze the additional-purchase and replacement demand scale across regions, brands, and models."
---
# Additional Purchase & Replacement

## Use Cases

- **Customer additional/replacement identification**: analyze the additional-purchase and replacement demand scale across regions, brands, and models.
- **Product and channel planning**: judge upgrade/replacement direction and regional demand to assist model mix and store layout.
- **Business effect assessment**: track additional/replacement changes before and after campaigns to assess promotion and trade-in policy effectiveness.

## Data Field Example

```json
[
    {
        "province": "新疆",
        "city": "乌鲁木齐市",
        "replacement_time": 202303,
        "replacement_cycle_months": 59,
        "pre_company": "长安汽车",
        "pre_brand": "长安",
        "pre_model": "长安之星9",
        "pre_axle_count": 1,
        "pre_vehicle_category": "Crossover passenger vehicle",
        "pre_vehicle_class": "-",
        "pre_brand_origin": "Domestic",
        "pre_import_flag": "Domestic",
        "pre_is_luxury": "Non-luxury",
        "pre_displacement_l": "1.5L",
        "pre_transmission": "5MT",
        "pre_fuel_type": "Gasoline",
        "pre_usage_type": "Non-business individual",
        "post_company": "奇瑞捷豹路虎",
        "post_brand": "捷豹",
        "post_model": "捷豹E-PACE",
        "post_axle_count": 2,
        "post_vehicle_category": "SUV",
        "post_vehicle_class": "A",
        "post_brand_origin": "British",
        "post_import_flag": "Domestic",
        "post_is_luxury": "Luxury",
        "post_displacement_l": "2.0T",
        "post_transmission": "9AT",
        "post_fuel_type": "Gasoline",
        "post_usage_type": "Non-business individual",
        "volume": 1

    }
]
```

### Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| province | city | replacement_time | replacement_cycle_months | pre_company | pre_brand | pre_model | pre_axle_count | pre_vehicle_category | pre_vehicle_class | pre_brand_origin | pre_import_flag | pre_is_luxury | pre_displacement_l | pre_transmission | pre_fuel_type | pre_usage_type | post_company | post_brand | post_model | post_axle_count | post_vehicle_category | post_vehicle_class | post_brand_origin | post_import_flag | post_is_luxury | post_displacement_l | post_transmission | post_fuel_type | post_usage_type | volume |
| --- | --- | ---: | ---: | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: |
| 新疆 | 乌鲁木齐市 | 202303 | 59 | 长安汽车 | 长安 | 长安之星9 | 1 | Crossover passenger vehicle | - | Domestic | Domestic | Non-luxury | 1.5L | 5MT | Gasoline | Non-business individual | 奇瑞捷豹路虎 | 捷豹 | 捷豹E-PACE | 2 | SUV | A | British | Domestic | Luxury | 2.0T | 9AT | Gasoline | Non-business individual | 1 |
