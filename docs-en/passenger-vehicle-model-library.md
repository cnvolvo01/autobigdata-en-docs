---
title: Passenger Vehicle Model Library
category: VIN & Model
order: 103
docType: interface
is_active: yes
description: "The passenger vehicle model library is a structured model-data platform covering sedans, SUVs, MPVs, and sports cars, including conventional fuel and new-energy passenger vehicles."
---
# Passenger Vehicle Model Library

## Use Cases

- The passenger vehicle model library is a structured model-data platform covering sedans, SUVs, MPVs, and sports cars, including conventional fuel and new-energy passenger vehicles.
- It is organized along the brand / series / model year / trim mainline, associating OEM MSRP, powertrain form, body dimensions, seat count, range, energy consumption, configuration parameters, and images.
- Combined with the MIIT automotive product announcements, model application information, and on-market data, it forms a complete profile from eligibility model to consumer model.
- It supports filtering and side-by-side comparison by brand, class, price range, energy type, range, drive type, and seat count.
- The data must be continuously maintained for discontinued, facelifted, generation-changed, newly added, and price-adjusted statuses to ensure timeliness and traceability.

- For consumers: quickly find the target model, compare configurations and powertrain versions, and lower selection and price-comparison costs.
- For sales and dealerships: uniformly present model selling points, parameters, and competitor comparisons to improve lead conversion and sales communication.
- For content and media: provide a standardized, searchable data foundation for buying guides, reviews, model comparisons, and market reports.
- For used car, finance, and insurance: assist in identifying the specific model version and verifying base parameters, and support valuation, risk control, and quoting.
- For industry research: track brand product layouts, NEV penetration, price-band competition, and segment changes to inform product and business decisions.

---

## Field Name Mapping

| English Field Name   | Chinese Name               |
| -------------------- | --------------------- |
| `id`                 | Primary key ID |
| `brand_id`           | Brand ID |
| `brand_name`         | Brand name |
| `series_id`          | Series ID |
| `series_name`        | Series name |
| `series_group_id`    | Series manufacturer ID |
| `series_group_name`  | Series manufacturer name |
| `maker_id`           | Manufacturer ID |
| `maker_name`         | Manufacturer name |
| `model_id`           | Model ID |
| `model_name`         | Model name |
| `short_name`         | Model short name |
| `year`               | Year |
| `price`              | Price (RMB 10,000) |
| `liter`              | Displacement |
| `discharge_standard` | Emission standard |
| `fuel_type_id`       | Fuel type ID |
| `fuel_type_name`     | Fuel type name |
| `engine_power`       | Horsepower (hp) |
| `engine_power_kw`    | Power (kW) |
| `is_green`           | New energy (0: no, 1: yes) |
| `model_code`         | Announcement number |
| `drive_name`         | Drive name |
| `drive_type`         | Drive type |
| `model_status`       | Model status |
| `gear_type`          | Transmission type |
| `gear_name`          | Transmission full name |
| `green_type_id`      | New-energy type ID |
| `green_type_name`    | New-energy type name |
| `market_date`        | Release date |
| `min_reg_year`       | Earliest registration year |
| `max_reg_year`       | Latest registration year |
| `stop_make_year`     | Discontinued year |
| `intake`             | Intake type |
| `seat_number`        | Seat count |
| `body_type`          | Body type |
| `door_number`        | Door count |
| `car_struct`         | Body structure |
| `is_parallel`        | Parallel import (0: no, 1: yes) |
| `price_allowance`    | New-energy price subsidy description |
| `oper_type`          | Model change status |
| `code`               | Code |
| `created_at`         | Created time |
| `updated_at`         | Updated time |
| `process_status`     | Data processing status: 0 = default, 1 = success, 2 = failure |
| `process_error`      | Data processing error message |

---

## Database Data Example

```json
[
    {
        "id": "72024",
        "brand_id": "120",
        "brand_name": "特斯拉",
        "series_id": "38340",
        "series_name": "Model Y",
        "series_group_id": "658",
        "series_group_name": "特斯拉中国",
        "maker_id": "226",
        "maker_name": "特斯拉中国",
        "model_id": "1883536",
        "model_name": "2024款 Model Y 后轮驱动版",
        "short_name": "2024款 后轮驱动版",
        "year": "2024",
        "price": "25.8900",
        "liter": "0",
        "discharge_standard": "纯电",
        "fuel_type_id": "2",
        "fuel_type_name": "电力",
        "engine_power": "299",
        "engine_power_kw": "220",
        "is_green": "1",
        "model_code": "TSL6480BEVAR3",
        "drive_name": "后置后驱",
        "drive_type": "两驱",
        "model_status": "在售",
        "gear_type": "自动",
        "gear_name": "单速",
        "green_type_id": "1",
        "green_type_name": "纯电动",
        "market_date": "2024-02-01",
        "min_reg_year": "2024",
        "max_reg_year": "2024",
        "stop_make_year": "2024",
        "intake": null,
        "seat_number": "5",
        "body_type": "SUV",
        "door_number": "5",
        "car_struct": "5门5座SUV",
        "is_parallel": "0",
        "price_allowance": "0",
        "oper_type": null,
        "code": "S238340M31883536",
        "created_at": "2/2/2024 19:00:07",
        "updated_at": "2/5/2024 07:00:02",
        "process_status": "0",
        "process_error": null
    }
]
```

## Database Data Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| id | brand_id | brand_name | series_id | series_name | series_group_id | series_group_name | maker_id | maker_name | model_id | model_name | short_name | year | price | liter | discharge_standard | fuel_type_id | fuel_type_name | engine_power | engine_power_kw | is_green | model_code | drive_name | drive_type | model_status | gear_type | gear_name | green_type_id | green_type_name | market_date | min_reg_year | max_reg_year | stop_make_year | intake | seat_number | body_type | door_number | car_struct | is_parallel | price_allowance | oper_type | code | created_at | updated_at | process_status | process_error |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 72024 | 120 | 特斯拉 | 38340 | Model Y | 658 | 特斯拉中国 | 226 | 特斯拉中国 | 1883536 | 2024款 Model Y 后轮驱动版 | 2024款 后轮驱动版 | 2024 | 25.8900 | 0 | 纯电 | 2 | 电力 | 299 | 220 | 1 | TSL6480BEVAR3 | 后置后驱 | 两驱 | 在售 | 自动 | 单速 | 1 | 纯电动 | 2024-02-01 | 2024 | 2024 | 2024 | null | 5 | SUV | 5 | 5门5座SUV | 0 | 0 | null | S238340M31883536 | 2/2/2024 19:00:07 | 2/5/2024 07:00:02 | 0 | null |
