---
title: Used Car Value Retention Rate
category: Used Car Valuation
order: 303
docType: interface
is_active: yes
description: "Compare value retention levels by brand, model, and vehicle age to support acquisition pricing."
---
# Used Car Value Retention Rate

## Use Cases

- **Used car valuation and pricing**: compare value retention levels by brand, model, and vehicle age to support acquisition pricing.
- **New car product and finance design**: assess model residual value performance to inform pricing, financing terms, and leasing plans.
- **Inventory and replacement management**: identify models with better value retention to optimize inventory structure and replacement strategy.
- **Consumer purchase decisions**: provide a reference for vehicle selection, long-term holding cost, and future resale expectations.

```json
[
    {
        "year_month": 202602,
        "brand": "比亚迪",
        "manufacturer": "比亚迪",
        "series": "比亚迪E2",
        "sub_series": "比亚迪E2",
        "vehicle_type": "Sedan",
        "body_type": "Hatchback",
        "vehicle_class": "Compact sedan",
        "brand_attribute": "Non-luxury",
        "brand_origin": "Domestic",
        "manufacturer_type": "Domestic",
        "vehicle_age": 3,
        "value_retention_rate": 0.5253
    }
]
```

## Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

|     year_month | brand  | manufacturer  | series    | sub_series   | vehicle_type | body_type | vehicle_class  | brand_attribute | brand_origin | manufacturer_type |  vehicle_age |    value_retention_rate |
| -----: | --- | --- | ----- | ----- | ---- | ---- | ----- | ---- | ---- | ---- | --: | -----: |
| 202602 | 比亚迪 | 比亚迪 | 比亚迪E2 | 比亚迪E2 | Sedan   | Hatchback   | Compact sedan | Non-luxury  | Domestic   | Domestic   |   3 | 0.5253 |

