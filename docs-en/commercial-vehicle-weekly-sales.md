---
title: Commercial Vehicle Weekly Sales
category: New Car Sales Analysis
order: 5
docType: interface
is_active: yes
description: "New data has been paused; only historical years are available."
---
# Commercial Vehicle Weekly Sales

### Status

New data has been paused; only historical years are available.

## Use Cases

- Sales statistics compiled from auto insurance data, updated weekly.
- Analyze new-car market changes more promptly.
- Suitable for writing periodic results into an analytics store and cross-analyzing with internal sales or channel data to compare your performance against the overall market.

## Data Field Example

```json
[
    {
        "year": 2024,
        "week": 12,
        "month": 3,
        "start_end_date": "03月18日-03月24日",
        "province": "河北",
        "city": "邯郸市",
        "company_name": "北奔重型汽车集团有限公司",
        "brand": "北奔",
        "model": "北奔V3",
        "fuel_type": "New energy",
        "fuel_kind": "BEV",
        "fuel_variety": "BEV",
        "vehicle_kind": "Heavy truck",
        "usage_type": "Dump truck",
        "usage_kind": "Dump truck",
        "usage_variety": "Dump truck",
        "tire_count": 12,
        "overall_length": 11200,
        "overall_width": 2550,
        "overall_height": 3515,
        "gross_weight": 31000,
        "fuel_kind2": "BEV",
        "ownership": "Corporate",
        "rated_seating": null,
        "volume": 2
    }
]
```

## Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| year | week | month | start_end_date | province | city | company_name | brand | model | fuel_type | fuel_kind | fuel_variety | vehicle_kind | usage_type | usage_kind | usage_variety | tire_count | overall_length | overall_width | overall_height | gross_weight | fuel_kind2 | ownership | rated_seating | volume |
| ---: | ---: | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- | --- | --- | ---: |
| 2024 | 12 | 3 | 03月18日-03月24日 | 河北 | 邯郸市 | 北奔重型汽车集团有限公司 | 北奔 | 北奔V3 | New energy | BEV | BEV | Heavy truck | Dump truck | Dump truck | Dump truck | 12 | 11200 | 2550 | 3515 | 31000 | BEV | Corporate | null | 2 |
