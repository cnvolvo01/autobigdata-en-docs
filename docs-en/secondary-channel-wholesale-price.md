---
title: Secondary-channel Wholesale Price Monitoring
category: Auto Market Research
order: 214
docType: interface
is_active: yes
description: "Track secondary-channel wholesale price changes across regions, brands, and models."
---
# Secondary-channel Wholesale Price Monitoring

## Use Cases

- **Price trend monitoring**: track secondary-channel wholesale price changes across regions, brands, and models.
- **Channel and inventory management**: identify price inversion and inventory pressure to support allocation, promotion, and channel strategy.
- **Competitor pricing analysis**: compare same-class model price bands to inform quoting and product strategy.
- **Business dashboards and alerts**: accumulate periodic data into trend dashboards to promptly detect abnormal fluctuations.

## Data Field Example


```json
[
    {
        "year_month": 202602,
        "province": "广东省",
        "city": "广州市",
        "brand": "广汽传祺",
        "manufacturer": "广汽乘用车",
        "series": "传祺M8",
        "sub_series": "传祺M8",
        "model_full_name": "2023款 传祺M8 领秀系列 390T 至尊版",
        "manufacturer_type": "Domestic",
        "brand_attribute": "Non-luxury",
        "brand_origin": "Domestic",
        "body_type": "MPV",
        "vehicle_class": "Full-size MPV",
        "vehicle_type": "MPV",
        "fuel_type": "Gasoline",
        "emission_standard": "China VI",
        "engine": "2.0T",
        "transmission": "Automatic",
        "msrp": 232800,
        "average_wholesale_price": 214700
    }
]
```

### Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

|     year_month | province  | city  | brand   | manufacturer    | series   | sub_series  | model_full_name                     | manufacturer_type | brand_attribute | brand_origin | body_type | vehicle_class   | vehicle_type | fuel_type | emission_standard | engine  | transmission |    msrp | average_wholesale_price |
| -----: | --- | --- | ---- | ----- | ---- | ---- | ------------------------ | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- | ---- | --- | -----: | ------: |
| 202602 | 广东省 | 广州市 | 广汽传祺 | 广汽乘用车 | 传祺M8 | 传祺M8 | 2023款 传祺M8 领秀系列 390T 至尊版 | Domestic   | Non-luxury  | Domestic   | MPV  | Full-size MPV | MPV  | Gasoline   | China VI   | 2.0T | Automatic  | 232800 |  214700 |


