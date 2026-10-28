---
title: Electrification Configuration Database
category: NEV Three-Electric Systems
order: 3
docType: dataset
is_active: yes
description: "Reconstruct model-level supplier relationships and compute supplier share across cell, pack, BMS, main and auxiliary drive motors, e-control, reducer, OBC/DC-DC/PDU, and power device supplier fields."
---
# Electrification Configuration Database

## Use Cases

- **Three-electric supply chain mapping**: reconstruct model-level supplier relationships and compute supplier share across cell, pack, BMS, main and auxiliary drive motors, e-control, reducer, OBC/DC-DC/PDU, and power device supplier fields.
- **Technology roadmap tracking**: track three-electric technology evolution and roadmap divergence by cathode/anode material system, package form, battery integration form, voltage platform, hybrid architecture, and battery-swapping support.
- **Competitor parameter benchmarking**: side-by-side comparison of same-class models by BEV range, energy per vehicle, system energy density, peak fast-charge rate, system power, and torque.
- **Installation scale estimation**: estimate battery and e-drive installation scale by combining energy per vehicle (kWh), drive motors per vehicle, installed capacity (MWh), and sales.
- **Segment structure analysis**: analyze NEV penetration and competitive landscape by powertrain type, brand pedigree, vehicle class, and price range combined with sales.


## Data Fields

| #  | Field Name               | Data Type |
| --- | ------------------ | ---- |
| 1   | Plate type              | Text   |
| 2   | Domestic/imported              | Text   |
| 3   | Body form              | Text   |
| 4   | Vehicle model              | Text   |
| 5   | Enterprise short name              | Text   |
| 6   | Group short name              | Text   |
| 7   | Brand                | Text   |
| 8   | Model                | Text   |
| 9   | Trim                | Text   |
| 10  | Price                | Number   |
| 11  | Price range              | Number   |
| 12  | Brand pedigree                | Text   |
| 13  | Vehicle type              | Text   |
| 14  | Vehicle class              | Text   |
| 15  | Fuel type              | Text   |
| 16  | Powertrain type              | Text   |
| 17  | Class                | Text   |
| 18  | Overall length (mm)           | Number   |
| 19  | Overall width (mm)           | Number   |
| 20  | Overall height (mm)           | Number   |
| 21  | Number of axles               | Text   |
| 22  | Wheelbase (mm)             | Number   |
| 23  | Front track (mm)            | Number   |
| 24  | Rear track (mm)            | Number   |
| 25  | Tire specification              | Text   |
| 26  | Number of tires             | Text   |
| 27  | Gross weight (kg)            | Number   |
| 28  | Curb weight (kg)           | Number   |
| 29  | Rated seating              | Text   |
| 30  | Year                 | Text   |
| 31  | Month                 | Text   |
| 32  | Sales (units)              | Number   |
| 33  | Electric energy consumption (kWh/100 km)   | Number   |
| 34  | Equivalent fuel consumption (L/100 km)  | Text   |
| 35  | Engine model              | Text   |
| 36  | Displacement (L)              | Text   |
| 37  | Engine power (kW)          | Number   |
| 38  | Engine manufacturer              | Text   |
| 39  | Fuel consumption (L/100 km)        | Text   |
| 40  | National emission standard              | Text   |
| 41  | Number of gears                | Number   |
| 42  | Hybrid architecture              | Text   |
| 43  | Hybrid generator supplier           | Text   |
| 44  | Generator power (kW)          | Number   |
| 45  | Generator type              | Text   |
| 46  | Drive form              | Text   |
| 47  | Voltage platform (V)            | Number   |
| 48  | System power (kW)           | Number   |
| 49  | System torque (N·m)          | Number   |
| 50  | E-drive integration level          | Text   |
| 51  | E-drive integrated components          | Text   |
| 52  | E-drive system supplier           | Text   |
| 53  | Main drive motor supplier           | Text   |
| 54  | Main drive short name              | Text   |
| 55  | Main drive motor power (kW)        | Number   |
| 56  | Main drive motor speed (rpm)        | Number   |
| 57  | Main drive motor type            | Text   |
| 58  | Main drive motor cooling          | Text   |
| 59  | Main drive motor winding          | Text   |
| 60  | Auxiliary drive motor supplier           | Text   |
| 61  | Auxiliary drive type              | Text   |
| 62  | Auxiliary drive motor power (kW)        | Number   |
| 63  | Auxiliary drive motor speed (rpm)        | Number   |
| 64  | Reducer supplier             | Text   |
| 65  | Reducer type              | Text   |
| 66  | E-control supplier              | Text   |
| 67  | E-control cooling             | Text   |
| 68  | Drive motors per vehicle (sets)       | Number   |
| 69  | Drive motor installations (sets)     | Text   |
| 70  | Power chip type             | Number   |
| 71  | Power device supplier            | Number   |
| 72  | Main-drive power module position       | Number   |
| 73  | OBC output power (kW)       | Number   |
| 74  | OBC supplier short name           | Text   |
| 75  | DC-DC supplier short name          | Text   |
| 76  | PDU supplier short name           | Text   |
| 77  | VCU hardware supplier short name         | Text   |
| 78  | Powertrain domain controller supplier          | Text   |
| 79  | Compressor                | Text   |
| 80  | Whether heat pump equipped             | Text   |
| 81  | Electric range (driving cycle; km)    | Number   |
| 82  | Charging time (h)            | Text   |
| 83  | Fast-charge capacity (%)            | Number   |
| 84  | Average fast-charge rate (C)          | Number   |
| 85  | Peak fast-charge rate (C)          | Number   |
| 86  | Cell supplier short name            | Text   |
| 87  | Pack supplier short name          | Text   |
| 88  | BMS supplier short name           | Text   |
| 89  | Battery integration form             | Text   |
| 90  | Whether battery swapping supported             | Text   |
| 91  | Battery shape detail             | Text   |
| 92  | Package form               | Text   |
| 93  | Pack voltage (V)          | Number   |
| 94  | Pack capacity (Ah)         | Number   |
| 95  | System energy density (Wh/kg) | Number   |
| 96  | Cell voltage (V)            | Number   |
| 97  | Cell capacity (Ah)           | Number   |
| 98  | Cell energy density (Wh/kg)      | Number   |
| 99  | Cell volumetric density (Wh/L)       | Number   |
| 100 | Anode material               | Text   |
| 101 | Electrolyte state              | Text   |
| 102 | Cathode chemistry             | Text   |
| 103 | Cathode material system             | Text   |
| 104 | Integration efficiency               | Text   |
| 105 | Battery pack mass (kg)          | Number   |
| 106 | Cell mass (kg)           | Number   |
| 107 | Cell energy (Wh)           | Number   |
| 108 | Cell thickness/diameter (mm)        | Number   |
| 109 | Cell length (mm)            | Text   |
| 110 | Cell height (mm)            | Text   |
| 111 | Cell dimensions (mm)           | Number   |
| 112 | Number of cells            | Number   |
| 113 | Cell grouping method             | Text   |
| 114 | Energy per vehicle (kWh)          | Number   |
| 115 | Installed capacity (MWh)           | Number   |
| 116 | Announcement batch number              | Text   |

## Data Example

The following shows the first 5 records at the January caliber. Sample values are from the Chinese data source and are kept as-is (proper nouns such as OEM, model, and supplier names).

| Plate type | Domestic/imported | Body form | Vehicle model | Enterprise short name | Group short name | Brand | Model | Trim | Price | Price range | Brand pedigree | Vehicle type | Vehicle class | Fuel type | Powertrain type | Class | Overall length (mm) | Overall width (mm) | Overall height (mm) | Number of axles | Wheelbase (mm) | Front track (mm) | Rear track (mm) | Tire specification | Number of tires | Gross weight (kg) | Curb weight (kg) | Rated seating | Year | Month | Sales (units) | Electric energy consumption (kWh/100 km) | Equivalent fuel consumption (L/100 km) | Engine model | Displacement (L) | Engine power (kW) | Engine manufacturer | Fuel consumption (L/100 km) | National emission standard | Number of gears | Hybrid architecture | Hybrid generator supplier | Generator power (kW) | Generator type | Drive form | Voltage platform (V) | System power (kW) | System torque (N·m) | E-drive integration level | E-drive integrated components | E-drive system supplier | Main drive motor supplier | Main drive short name | Main drive motor power (kW) | Main drive motor speed (rpm) | Main drive motor type | Main drive motor cooling | Main drive motor winding | Auxiliary drive motor supplier | Auxiliary drive type | Auxiliary drive motor power (kW) | Auxiliary drive motor speed (rpm) | Reducer supplier | Reducer type | E-control supplier | E-control cooling | Drive motors per vehicle (sets) | Drive motor installations (sets) | Power chip type | Power device supplier | Main-drive power module position | OBC output power (kW) | OBC supplier short name | DC-DC supplier short name | PDU supplier short name | VCU hardware supplier short name | Powertrain domain controller supplier | Compressor | Whether heat pump equipped | Electric range (driving cycle; km) | Charging time (h) | Fast-charge capacity (%) | Average fast-charge rate (C) | Peak fast-charge rate (C) | Cell supplier short name | Pack supplier short name | BMS supplier short name | Battery integration form | Whether battery swapping supported | Battery shape detail | Package form | Pack voltage (V) | Pack capacity (Ah) | System energy density (Wh/kg) | Cell voltage (V) | Cell capacity (Ah) | Cell energy density (Wh/kg) | Cell volumetric density (Wh/L) | Anode material | Electrolyte state | Cathode chemistry | Cathode material system | Integration efficiency | Battery pack mass (kg) | Cell mass (kg) | Cell energy (Wh) | Cell thickness/diameter (mm) | Cell length (mm) | Cell height (mm) | Cell dimensions (mm) | Number of cells | Cell grouping method | Energy per vehicle (kWh) | Installed capacity (MWh) | Announcement batch number |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 小型汽车 | 国产 | SUV | JL7000BEV07 | Smart | 吉利控股集团 | Smart | smart精灵#1 | 2022款 BRABUS性能版 | 27.9万 | 25-30万 | 欧系 | SUV | A0 | 纯电动 | NEV | 小型SUV | 4300 | 1822 | 1636 | 4×4 | 2750 | 1585 | 1590 | 235/45R19 | 4 | 2290 | 1900 | 5 | 2024年 | 1月 | 212 | 14.8 | 1.67 |  |  |  |  |  |  | 1 |  |  |  |  | 四驱 | 400V | 315 | 543 | 三合一 | 电机+电控+减速器 | 威睿电动 | 威睿电动 | 威睿电动 | 200 | 16500 | 永磁同步 | 油冷 | 扁线 | 威睿电动 | 永磁同步 | 115 | 16000 | 威睿电动 | EAT | 威睿电动 | 水冷 | 2 | 424 | SiC-Mosfet | 芯聚能 | R | 6.6 | 威迈斯 | 威迈斯 | 威迈斯 | 联合电子 | - | 华域三电 | ●标配 | 500 | 快充0.5小时 慢充7.5小时 | 10-80 | 1.4 | - | 中创新航 | 威睿电动 | 威睿电动 | CMP | 不支持 | 传统方形 | 方形 | 392 | 169 | 169.2 | 3.66 | 169 | 245.9 | 555.3 | 石墨 | 液态 | 三元 | NCM523 | 0.69 | 390 | 2.515 | 618.54 | 45 | 221 | 112 | 221*112*45 | 107 | 1P107S | 66 | 13.992 | 387 |
| 小型汽车 | 国产 | SUV | JL7000BEV09 | Smart | 吉利控股集团 | Smart | smart精灵#1 | 2022款 Premium | 24.5万 | 20-25万 | 欧系 | SUV | A0 | 纯电动 | NEV | 小型SUV | 4270 | 1822 | 1636 | 4×2 | 2750 | 1590 | 1585 | 235/45R19 | 4 | 2190 | 1800 | 5 | 2024年 | 1月 | 230 | 13 | 1.47 |  |  |  |  |  |  | 1 |  |  |  |  | 后驱 | 400V | 200 | 343 | 三合一 | 电机+电控+减速器 | 威睿电动 | 威睿电动 | 威睿电动 | 200 | 16500 | 永磁同步 | 油冷 | 圆线 | - | - |  |  | 威睿电动 | EAT | 威睿电动 | 液冷 | 1 | 230 | SiC-Mosfet | 芯聚能 | R | 6.6 | 威迈斯 | 威迈斯 | 威迈斯 | 联合电子 | - | 华域三电 | ●标配 | 560 | 快充0.5小时 慢充7.5小时 | 10-80 | 1.4 | - | 欣旺达 | 威睿电动 | 威睿电动 | CMP | 不支持 | 传统方形 | 方形 | 392 | 169 | 169.2 | 3.66 | 173 | 245.4 | 581.4 | 石墨 | 液态 | 三元 | NCM523 | 0.69 | 390 | 2.58 | 633.18 | 45 | 220 | 110 | 220*110*45 | 107 | 1P107S | 66 | 15.18 | 387 |
| 小型汽车 | 国产 | SUV | JL7000BEV06 | Smart | 吉利控股集团 | Smart | smart精灵#1 | 2022款 Pro+ | 20.92万 | 20-25万 | 欧系 | SUV | A0 | 纯电动 | NEV | 小型SUV | 4270 | 1822 | 1636 | 4×2 | 2750 | 1581 | 1586 | 235/50R18 | 4 | 2160 | 1770 | 5 | 2024年 | 1月 | 185 | 13.4 | 1.52 |  |  |  |  |  |  | 1 |  |  |  |  | 后驱 | 400V | 200 | 343 | 三合一 | 电机+电控+减速器 | 威睿电动 | 威睿电动 | 威睿电动 | 200 | 16500 | 永磁同步 | 水冷 | 扁线 |  |  |  |  | 威睿电动 | EAT | 威睿电动 | 液冷 | 1 | 185 | Si-IGBT | 芯聚能 | R | 6.6 | 威迈斯 | 威迈斯 | 威迈斯 | 联合电子 | - | 华域三电 | ○选配 | 535 | 快充0.5小时 慢充7.5小时 | 10-80 | 1.4 | - | 中创新航 | 威睿电动 | 威睿电动 | CMP | 不支持 | 传统方形 | 方形 | 392 | 169 | 169 | 3.66 | 169 | 245.9 | 555.3 | 石墨 | 液态 | 三元 | NCM523 | 0.69 | 390 | 2.515 | 618.54 | 45 | 221 | 112 | 221*112*45 | 107 | 1P107S | 66 | 12.21 | 387 |
| 小型汽车 | 国产 | SUV | JL7000BEV08 | Smart | 吉利控股集团 | Smart | smart精灵#1 | 2022款 Pulse心动版 | 22.9万 | 20-25万 | 欧系 | SUV | A0 | 纯电动 | NEV | 小型SUV | 4270 | 1822 | 1636 | 4×2 | 2750 | 1586 | 1581 | 235/50R18 | 4 | 2160 | 1770 | 5 | 2024年 | 1月 | 135 | 13.4 | 1.52 |  |  |  |  |  |  | 1 |  |  |  |  | 后驱 | 400V | 315 | 543 | 三合一 | 电机+电控+减速器 | 威睿电动 | 威睿电动 | 威睿电动 | 200 | 16500 | 永磁同步 | 水冷 | 扁线 |  |  |  |  | 威睿电动 | EAT | 威睿电动 | 水冷 | 1 | 135 | Si-IGBT | 芯聚能 | R | 6.6 | 威迈斯 | 威迈斯 | 威迈斯 | 联合电子 | - | 华域三电 | ●标配 | 535 | 快充0.5小时 慢充7.5小时 | 10-80 | 1.4 | 2 | 欣旺达 | 威睿电动 | 威睿电动 | CMP | 不支持 | 传统方形 | 方形 | 392 | 169 | 169 | 3.66 | 173 | 245.4 | 581.4 | 石墨 | 液态 | 三元 | NCM523 | 0.69 | 390 | 2.58 | 633.18 | 45 | 220 | 110 | 220*110*45 | 107 | 1P107S | 66 | 8.91 | 387 |
| 小型汽车 | 国产 | SUV | JL7000BEV08 | Smart | 吉利控股集团 | Smart | smart精灵#1 | 2022款 Pure+ | 19.42万 | 15-20万 | 欧系 | SUV | A0 | 纯电动 | NEV | 小型SUV | 4270 | 1822 | 1636 | 4×2 | 2750 | 1586 | 1581 | 235/50R18 | 4 | 2160 | 1770 | 5 | 2024年 | 1月 | 72 | 13.4 | 1.52 |  |  |  |  |  |  | 1 |  |  |  |  | 后驱 | 400V | 315 | 543 | 三合一 | 电机+电控+减速器 | 威睿电动 | 威睿电动 | 威睿电动 | 200 | 16500 | 永磁同步 | 水冷 | 扁线 |  |  |  |  | 威睿电动 | EAT | 威睿电动 | 水冷 | 1 | 72 | Si-IGBT | 芯聚能 | R | 6.6 | 威迈斯 | 威迈斯 | 威迈斯 | 联合电子 | - | 华域三电 | - | 535 | 快充0.5小时 慢充7.5小时 | 10-80 | 1.4 | 2 | 欣旺达 | 威睿电动 | 威睿电动 | CMP | 不支持 | 传统方形 | 方形 | 392 | 169 | 169 | 3.66 | 173 | 245.4 | 581.4 | 石墨 | 液态 | 三元 | NCM523 | 0.69 | 390 | 2.58 | 633.18 | 45 | 220 | 110 | 220*110*45 | 107 | 1P107S | 66 | 4.752 | 387 |
