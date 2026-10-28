---
title: Commercial Vehicle Monthly Sales
category: New Car Sales Analysis
order: 2
docType: interface
is_active: yes
description: "Monthly commercial vehicle sales based on first-time compulsory-insurance registrations: the number of new vehicles insured for compulsory insurance for the first time, aggregated by month and mapped to brand, series, trim, and energy type via VIN."
---
# Commercial Vehicle Monthly Sales

## Use Cases

- Monthly commercial vehicle sales based on first-time compulsory-insurance registrations: the number of new vehicles insured for compulsory insurance for the first time, aggregated by month and mapped to brand, series, trim, and energy type via VIN.
- It is closer to vehicles actually entering use and end-delivery, so it is often used to observe retail demand; strictly speaking, however, it is not the automaker's factory-gate sales.
- Statistics must be limited to "first-time new-vehicle insurance" and exclude renewals, endorsements, cancellations, and duplicate records, and ensure correct vehicle-type attribution; otherwise monthly new-vehicle sales will be overestimated.
- The insured region reflects the region associated with the policy or vehicle registration and does not necessarily equal the consumer's long-term usage location; cross-region purchasing and out-of-area registration affect regional market judgment.
- Aggregated statistics only; no personal information.

- Market monitoring: track monthly commercial vehicle totals, fuel vs. new-energy vehicles, and terminal performance by brand and series to identify demand turning points and seasonality earlier.
- Competitor analysis: compare regional sales, growth, and share of same-class, same-price-band, or same-powertrain models to inform product positioning, marketing rhythm, and model planning.
- Regional operations: identify the true insured-registration distribution by province, city, or city cluster to support dealer network layout, channel target breakdown, and marketing and inventory resource allocation.
- New model assessment: observe monthly insured-registration ramp, regional penetration, and configuration structure after a new model launch.
- Supply chain and business forecasting: combine insured-registration trends with wholesale, orders, inventory, and delivery cycles to support production/sales forecasting.
- Finance and insurance research: under compliance, provide model-level demand evidence for residual value assessment, risk pricing, parc estimation, and after-sales service network planning.
- Data product building: combined with MIIT announcements, the model library, MSRP, and configuration data, more dimensional analytical frameworks can be formed.


## English Field Example

```json
[
    {
        "yymm": 202402,
        "province": "陕西省",
        "city": "汉中市",
        "district": "汉台区",
        "sales": 2,
        "car_category": "Light truck",
        "car_name": "Cargo truck",
        "model_code": "SC1022SEAH6",
        "chassis_com": "河北长安汽车有限公司",
        "chassis_code": "SC1022SEAN6",
        "rated_people": "NULL",
        "rated_quality": "745",
        "engine_company": "重庆长安汽车股份有限公司",
        "engine_code": "JL474QAK",
        "engine_power": "85",
        "after_wheel_track": "1360",
        "cargo_van_height": "370",
        "cargo_van_width": "1515",
        "cargo_van_length": "2550",
        "front_people": "NULL",
        "tyre_spec": "175R14LT 8PR",
        "tyre_num": "4",
        "emission_standard": "China VI",
        "engine_liter": "1499",
        "chinese_brand": "长安",
        "company_name": "河北长安汽车有限公司",
        "before_wheel_track": "1360",
        "drive_type": "4×2",
        "fuel_type": "Gasoline",
        "use_character": "Non-business",
        "vehicle_height": "1910",
        "vehicle_width": "1610",
        "vehicle_length": "5175",
        "curb_quality": "1215",
        "wheelbase": "3200",
        "axes_num": "2",
        "trailer_quality": "NULL",
        "total_quality": "2285",
        "ownership": "Unknown",
        "spring_num": "_\\6",
        "seats_num": "5"
    }
]
```



## Chinese Field Example

The following example uses the same data as the English field example above, with field names converted to Chinese for business reading and data-dictionary organization. The fields actually returned by the interface follow the current interface definition.

```json
[
    {
        "年月": 202402,
        "省份": "陕西省",
        "城市": "汉中市",
        "区县": "汉台区",
        "销量": 2,
        "车型类别": "轻型货车",
        "车辆名称": "载货汽车",
        "车辆型号": "SC1022SEAH6",
        "底盘企业": "河北长安汽车有限公司",
        "底盘型号": "SC1022SEAN6",
        "额定载客": "NULL",
        "额定质量": "745",
        "发动机企业": "重庆长安汽车股份有限公司",
        "发动机型号": "JL474QAK",
        "发动机功率": "85",
        "后轮距": "1360",
        "货厢高": "370",
        "货厢宽": "1515",
        "货厢长": "2550",
        "前排乘客": "NULL",
        "轮胎规格": "175R14LT 8PR",
        "轮胎数": "4",
        "排放标准": "国六",
        "发动机排量": "1499",
        "中文品牌": "长安",
        "企业名称": "河北长安汽车有限公司",
        "前轮距": "1360",
        "驱动形式": "4×2",
        "燃料类型": "汽油",
        "使用性质": "非营业",
        "车辆高": "1910",
        "车辆宽": "1610",
        "车辆长": "5175",
        "整备质量": "1215",
        "轴距": "3200",
        "轴数": "2",
        "牵引质量": "NULL",
        "总质量": "2285",
        "所有权": "未知",
        "钢板弹簧片数": "_\\6",
        "座位数": "5"
    }
]
```

## Chinese Field Table Example

The table below uses the same record as the JSON example above, with fields laid out by column for easy viewing and copying in spreadsheet form.

| year_month | province | city | district | sales | car_category | car_name | model_code | chassis_com | chassis_code | rated_people | rated_quality | engine_company | engine_code | engine_power | after_wheel_track | cargo_van_height | cargo_van_width | cargo_van_length | front_people | tyre_spec | tyre_num | emission_standard | engine_liter | chinese_brand | company_name | before_wheel_track | drive_type | fuel_type | use_character | vehicle_height | vehicle_width | vehicle_length | curb_quality | wheelbase | axes_num | trailer_quality | total_quality | ownership | spring_num | seats_num |
| ---: | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 202402 | 陕西省 | 汉中市 | 汉台区 | 2 | Light truck | Cargo truck | SC1022SEAH6 | 河北长安汽车有限公司 | SC1022SEAN6 | NULL | 745 | 重庆长安汽车股份有限公司 | JL474QAK | 85 | 1360 | 370 | 1515 | 2550 | NULL | 175R14LT 8PR | 4 | China VI | 1499 | 长安 | 河北长安汽车有限公司 | 1360 | 4×2 | Gasoline | Non-business | 1910 | 1610 | 5175 | 1215 | 3200 | 2 | NULL | 2285 | Unknown | _\6 | 5 |
