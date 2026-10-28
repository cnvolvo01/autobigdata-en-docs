---
title: Passenger Vehicle Monthly Sales
category: New Car Sales Analysis
order: 1
docType: interface
is_active: yes
description: "Monthly passenger vehicle sales based on first-time compulsory-insurance registrations: the number of new vehicles insured for compulsory insurance for the first time, aggregated by month and mapped to brand, series, trim, and energy type via VIN."
---
# Passenger Vehicle Monthly Sales

## Use Cases

- Monthly passenger vehicle sales based on first-time compulsory-insurance registrations: the number of new vehicles insured for compulsory insurance for the first time, aggregated by month and mapped to brand, series, trim, and energy type via VIN.
- It is closer to vehicles actually entering use and end-delivery, so it is often used to observe retail demand; strictly speaking, however, it is neither the automaker's factory-gate sales nor the narrow retail caliber used by institutions such as the CPCA.
- Statistics must be limited to "first-time new-vehicle insurance" and exclude renewals, endorsements, cancellations, and duplicate records, and ensure correct vehicle-type attribution (passenger vs. commercial); otherwise monthly new-vehicle sales will be overestimated.
- The insured region reflects the region associated with the policy or vehicle registration and does not necessarily equal the consumer's long-term usage location; cross-region purchasing and out-of-area registration affect regional market judgment.
- Aggregated statistics only; no personal information.



- Market monitoring: track monthly passenger vehicle totals, fuel vs. new-energy vehicles, and terminal performance by brand and series to identify demand turning points and seasonality earlier.
- Competitor analysis: compare regional sales, growth, and share of same-class, same-price-band, or same-powertrain models to inform product positioning, marketing rhythm, and model planning.
- Regional operations: identify the true insured-registration distribution by province, city, or city cluster to support dealer network layout, channel target breakdown, and marketing and inventory resource allocation.
- New model assessment: observe monthly insured-registration ramp, regional penetration, and configuration structure after a new model launch to assess product acceptance and promotion effectiveness.
- Supply chain and business forecasting: combine insured-registration trends with wholesale, orders, inventory, and delivery cycles to support production/sales forecasting and reduce inventory misjudgment from wholesale data alone.
- Finance and insurance research: under compliance, provide model-level demand evidence for residual value assessment, risk pricing, parc estimation, and after-sales service network planning.
- Data product building: combined with MIIT announcements, the passenger vehicle model library, MSRP, and configuration data, more dimensional analytical frameworks can be formed.



## Data Field Example

```json
[
    {
        "year_month": 202402,
        "city": "广州市",
        "province": "广东省",
        "domestic_imported": "Domestic",
        "manufacturer": "小鹏汽车",
        "brand": "小鹏",
        "series": "小鹏X9",
        "fuel_type": "BEV",
        "sales": 19,
        "body_type": "MPV",
        "vehicle_class": "Full-size MPV",
        "vehicle_category": "MPV",
        "displacement_l": "0.0L",
        "transmission": "1AT",
        "emission_standard": "Zero-emission",
        "drive_type": "AWD",
        "usage_type": "Non-operational",
        "ownership": "Corporate",
        "city_tier": "Tier 1",
        "brand_tier": "Mid-high",
        "brand_origin": "Domestic"
    }
]
```

## Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| year_month | city | province | domestic_imported | manufacturer | brand | series | fuel_type | sales | body_type | vehicle_class | vehicle_category | displacement_l | transmission | emission_standard | drive_type | usage_type | ownership | city_tier | brand_tier | brand_origin |
| --- | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 202402 | 广州市 | 广东省 | Domestic | 小鹏汽车 | 小鹏 | 小鹏X9 | BEV | 19 | MPV | Full-size MPV | MPV | 0.0L | 1AT | Zero-emission | AWD | Non-operational | Corporate | Tier 1 | Mid-high | Domestic |
