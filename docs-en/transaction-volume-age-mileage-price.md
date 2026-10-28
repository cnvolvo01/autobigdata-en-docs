---
title: Transaction Volume, Age, Mileage & Price
category: Used Car Transaction Volume
order: 302
docType: interface
is_active: yes
description: "Build a price reference for comparable vehicles by combining vehicle age, mileage, and transaction price."
---
# Transaction Volume, Age, Mileage & Transaction Price

## Use Cases

- **Used car pricing and valuation**: build a price reference for comparable vehicles by combining vehicle age, mileage, and transaction price.
- **Acquisition and inventory grading**: identify transaction activity across age-mileage combinations to assist acquisition decisions.
- **Regional business analysis**: compare transaction volume and price differences across provinces and cities to support channel layout.
- **Finance residual value and risk assessment**: provide market evidence for loan terms, financing amounts, and residual value estimation.

```json
[
    {
        "year_month": 202402,
        "province": "河南",
        "city": "濮阳",
        "brand": "奔驰",
        "series": "奔驰GLC级",
        "vehicle_class": "Mid-size SUV",
        "model": "2022款 奔驰GLC级 GLC 300 L 4MATIC 豪华型",
        "volume": 1,
        "average_price": 41,
        "average_age": 1.0833,
        "average_mileage": 0.6,
        "msrp": 47.53,
        "is_new_energy": "No"
    },
    {
        "year_month": 202402,
        "province": "河南",
        "city": "濮阳",
        "brand": "广汽埃安",
        "series": "AION Y",
        "vehicle_class": "Compact SUV",
        "model": "2022款 AION Y 70 智领版 磷酸铁锂",
        "volume": 1,
        "average_price": 9.6,
        "average_age": 1.9167,
        "average_mileage": 1.5,
        "msrp": 14.76,
        "is_new_energy": "Yes"
    }
]
```

### Data Table Example

The table below uses the same records as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| year_month | province | city | brand | series | vehicle_class | model | volume | average_price | average_age | average_mileage | msrp | is_new_energy |
| ---: | --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| 202402 | 河南 | 濮阳 | 奔驰 | 奔驰GLC级 | Mid-size SUV | 2022款 奔驰GLC级 GLC 300 L 4MATIC 豪华型 | 1 | 41 | 1.0833 | 0.6 | 47.53 | No |
| 202402 | 河南 | 濮阳 | 广汽埃安 | AION Y | Compact SUV | 2022款 AION Y 70 智领版 磷酸铁锂 | 1 | 9.6 | 1.9167 | 1.5 | 14.76 | Yes |


