---
title: Transaction Volume & City Flow
category: Used Car Transaction Volume
order: 301
docType: interface
is_active: yes
description: "Count transaction scale and cross-province/city vehicle flow to identify active markets."
---
# Transaction Volume & City Flow

## Use Cases

- **Used car market flow analysis**: count transaction scale and cross-province/city vehicle flow to identify active markets.
- **Inventory and channel allocation**: optimize acquisition channels, inventory allocation, and logistics based on inflow/outflow direction.
- **Regional pricing and business planning**: compare supply-demand and transaction characteristics across cities to assist pricing and store layout.
- **Cross-regional marketing and risk control**: identify cross-region transaction opportunities and abnormal flows to support marketing and manual verification.

```json
[
    {
        "plate_change_year_month": 202308,
        "source_province": "北京市",
        "source_city": "北京市",
        "target_province": "河南省",
        "target_city": "安阳市",
        "cross_province_flow": "Flowed",
        "cross_city_flow": "Flowed",
        "brand": "大众",
        "manufacturer": "一汽-大众",
        "series": "迈腾",
        "sub_series": "迈腾",
        "vehicle_class": "Mid-size sedan",
        "body_type": "Sedan",
        "vehicle_category": "Sedan",
        "vehicle_type": "Passenger vehicle",
        "manufacturer_type": "JV",
        "brand_attribute": "Non-luxury",
        "brand_origin": "German",
        "vehicle_age": "13",
        "fuel_type": "Gasoline",
        "emission_standard": "China IV",
        "engine": "1.8T",
        "msrp_range": "20-25万",
        "sales": 1
    }
]
```

### Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| plate_change_year_month | source_province | source_city | target_province | target_city | cross_province_flow | cross_city_flow | brand | manufacturer | series | sub_series | vehicle_class | body_type | vehicle_category | vehicle_type | manufacturer_type | brand_attribute | brand_origin | vehicle_age | fuel_type | emission_standard | engine | msrp_range | sales |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: |
| 202308 | 北京市 | 北京市 | 河南省 | 安阳市 | Flowed | Flowed | 大众 | 一汽-大众 | 迈腾 | 迈腾 | Mid-size sedan | Sedan | Sedan | Passenger vehicle | JV | Non-luxury | German | 13 | Gasoline | China IV | 1.8T | 20-25万 | 1 |

