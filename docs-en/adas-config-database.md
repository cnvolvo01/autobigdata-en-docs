---
title: ADAS Configuration Database
category: NEV Three-Electric Systems
order: 4
docType: dataset
is_active: yes
description: "Compare model intelligent-equipment levels and standard/optional differences using LDW, LKA, ACC, AEB, highway and urban NOA, and automated/remote/memory/valet parking function fields."
---
# ADAS Configuration Database

## Use Cases

- **ADAS function benchmarking**: compare model intelligent-equipment levels and standard/optional differences using LDW, LKA, ACC, AEB, highway and urban NOA, and automated/remote/memory/valet parking function fields.
- **Sensor and chip solution research**: analyze hardware configuration and Tier1 competitive landscape by LiDAR, front and corner millimeter-wave radar, multi-directional cameras, domain-controller chip and computing power (TOPS), and vision-solution fields.
- **Smart cockpit experience assessment**: evaluate cockpit configuration and software ecosystem by center-display size and chip, domain-controller OS, navigation and AR navigation, voice interaction (wake-word-free, zone-based wake-up, continuous recognition), and connected-vehicle fields.
- **Body and chassis configuration comparison**: analyze model-level configuration differences by power-steering type, braking and parking form, air and electromagnetic suspension, front/rear suspension type, audio, and climate control fields.
- **Intelligence penetration estimation**: estimate ADAS and cockpit feature penetration by brand pedigree, vehicle class, and price range, combined with feature assembly and sales.



## ADAS



| #  | Field Name                                       | Data Type |
| --- | ------------------------------------------ | ---- |
| 1   | OEM Company                             | Text   |
| 2   | OEM Group                           | Text   |
| 3   | Brand                                 | Text   |
| 4   | Model                                 | Text   |
| 5   | Launch Year                          | Text   |
| 6   | Power Type                          | Text   |
| 7   | Brand Pedigree                        | Text   |
| 8   | JV/Domestic                        | Text   |
| 9   | Classification                      | Text   |
| 10  | Launch Time (上市时间)                                    | Text   |
| 11  | Retail Price                        | Number   |
| 12  | Retail Price Range                  | Text   |
| 13  | MSRP by Model                       | Text   |
| 14  | LDW / Lane Departure Warning                              | Text   |
| 15  | LKA / Lane Keeping Assist                              | Text   |
| 16  | ACC / Adaptive Cruise Control                               | Text   |
| 17  | FSRA / Full-Speed Adaptive Cruise                           | Text   |
| 18  | AEB / Automatic Emergency Braking                              | Text   |
| 19  | AEB-P / AEB (Pedestrian)                      | Text   |
| 20  | LCC / Lane Centering Control                              | Text   |
| 21  | TSR / Traffic Sign Recognition                              | Text   |
| 22  | Driving Recorder                  | Text   |
| 23  | RVC / Rear View Camera                                | Text   |
| 24  | BSM (Image) / Blind Spot Monitor (image)                      | Text   |
| 25  | CMS / Camera Monitor System                              | Text   |
| 26  | BSD / Blind Spot Detection                                | Text   |
| 27  | RCTA / Rear Cross Traffic Alert                             | Text   |
| 28  | DOW / Door Open Warning                                | Text   |
| 29  | RCW / Rear Collision Warning                              | Text   |
| 30  | Night View                           | Text   |
| 31  | Transparent Chassis                | Text   |
| 32  | AVM / Around View Monitor                               | Text   |
| 33  | Reversing Assistant  / Trajectory Reversing                 | Text   |
| 34  | Smart Summon                       | Text   |
| 35  | APA / Automatic Parking Assist                                | Text   |
| 36  | F-APA / Full Automatic Parking                             | Text   |
| 37  | RPA / Remote Parking Assist                                | Text   |
| 38  | HPP / Home-zone Parking Pilot                                 | Text   |
| 39  | AVP / Automated Valet Parking                                | Text   |
| 40  | TJA/HWA / Traffic Jam Assist / Highway Assist                     | Text   |
| 41  | ALC / Automatic Lane Change                             | Text   |
| 42  | NOA-HW / Highway NOA                             | Text   |
| 43  | NOA-urban / Urban NOA                          | Text   |
| 44  | D2D / Door-to-Door                                | Text   |
| 45  | HPP / High-Precision Positioning                               | Text   |
| 46  | HD Map                             | Text   |
| 47  | 4D Corner Radar                                  | Text   |
| 48  | 4D Forward Radar                                 | Text   |
| 49  | LiDAR                              | Text   |
| 50  | ADAS Level                        | Text   |
| 51  | Reversing Camera                 | Text   |
| 52  | Surround View Camera               | Text   |
| 53  | BSM Camera                        | Text   |
| 54  | Driving Recorder Camera          | Text   |
| 55  | Ultrasonic Sensor                  | Text   |
| 56  | Front-Facing Camera                | Text   |
| 57  | Wing Camera                      | Text   |
| 58  | Corner Camera                    | Text   |
| 59  | Rear View Camera                   | Text   |
| 60  | Front Radar                      | Text   |
| 61  | Rear Radar                       | Text   |
| 62  | Corner Radar                         | Text   |
| 63  | LiDAR                               | Text   |
| 64  | Sensor Configuration (incl. ultrasonic)           | Text   |
| 65  | Vision Solution                     | Text   |
| 66  | Vision SoC                         | Text   |
| 67  | Front-facing Camera                | Text   |
| 68  | Resolution (M)                        | Text   |
| 69  | Surrounding Camera Supplier     | Text   |
| 70  | Corner Camera Supplier        | Text   |
| 71  | Wing Camera Supplier          | Text   |
| 72  | Rear Camera Supplier            | Text   |
| 73  | Front Radar Supplier                      | Text   |
| 74  | Front Radar Model                  | Text   |
| 75  | Radar Chip                     | Text   |
| 76  | Rear Radar Supplier                       | Text   |
| 77  | Corner Radar Supplier                     | Text   |
| 78  | Forward ADAS Tier1             | Text   |
| 79  | ADAS Function Controller       | Text   |
| 80  | Domain Controller                   | Text   |
| 81  | ADAS Cross-domain Solution        | Text   |
| 82  | DCU MCU                           | Text   |
| 83  | DCU Chipset                       | Text   |
| 84  | AI Performance of Chipset (TOPS) | Number   |
| 85  | HD Map Supplier                  | Text   |
| 86  | LiDAR Supplier                  | Text   |
| 87  | Main LiDAR Max Detection Range (m)                           | Number   |
| 88  | Blind-spot LiDAR Supplier                | Text   |
| 89  | Blind-spot LiDAR Max Detection Range (m)                           | Number   |
| 90  | CMS Controller Supplier        | Text   |
| 91  | AVM Solution                      | Text   |
| 92  | Ultrasonic Supplier             | Text   |
| 93  | APA Supplier                     | Text   |
| 94  | HPP Supplier                     | Text   |
| 95  | AVP Supplier                     | Text   |
| 96  | APA Solution                     | Text   |
| 97  | Chip for APA                      | Text   |
| 98  | Smart Camera                       | Text   |
| 99  | DCU                              | Text   |
| 100 | Vision Tier1                       | Text   |
| 101 | Vision SoC                          | Text   |
| 102 | In-cabin Vision Solution          | Text   |
| 103 | In-cabin Vision Tier1            | Text   |
| 104 | In-cabin Camera Supplier        | Text   |
| 105 | CCU/VDC                          | Text   |
| 106 | Body Zone Supplier           | Text   |
| 107 | Body Domain Controller       | Text   |
| 108 | BCM Supplier                     | Text   |
| 109 | Gateway Supplier                  | Text   |
| 110 | Sales Volume                          | Number   |


### Data Example

The following shows the first 5 records. Sample values are from the Chinese data source and are kept as-is (proper nouns such as OEM, supplier, and model names).

| OEM Company | OEM Group | Brand | Model | Launch Year | Power Type | Brand Pedigree | JV/Domestic | Classification | Launch Time    | Retail Price | Retail Price Range | MSRP by Model | LDW / Lane Departure Warning | LKA / Lane Keeping Assist | ACC / Adaptive Cruise Control | FSRA / Full-Speed Adaptive Cruise | AEB / Automatic Emergency Braking | AEB-P / AEB (Pedestrian) | LCC / Lane Centering Control | TSR / Traffic Sign Recognition | Driving Recorder | RVC / Rear View Camera | BSM (Image) | CMS / Camera Monitor System | BSD / Blind Spot Detection | RCTA / Rear Cross Traffic Alert | DOW / Door Open Warning | RCW / Rear Collision Warning | Night View | Transparent Chassis | AVM / Around View Monitor | Reversing Assistant | Smart Summon | APA | F-APA | RPA | HPP | AVP | TJA/HWA | ALC | NOA-HW | NOA-urban | D2D | HPP (High-Precision Positioning) | HD Map | 4D Corner Radar | 4D Forward Radar | LiDAR | ADAS Level | Reversing Camera | Surround View Camera | BSM Camera | Vision Solution | Vision SoC | Front-facing Camera | Resolution (M) | Surrounding Camera Supplier | Corner Camera Supplier | Wing Camera Supplier | Rear Camera Supplier | Front Radar Supplier | Front Radar Model | Radar Chip | Rear Radar Supplier | Corner Radar Supplier | Forward ADAS Tier1 | ADAS Function Controller | Domain Controller | ADAS Cross-domain Solution | DCU MCU | DCU Chipset | AI Performance of Chipset (TOPS) | HD Map Supplier | LiDAR Supplier | Main LiDAR Max Detection Range (m) | Blind-spot LiDAR Supplier | Blind-spot LiDAR Max Detection Range (m) | CMS Controller Supplier | AVM Solution | Ultrasonic Supplier | APA Supplier | HPP Supplier | Body Zone Supplier | Body Domain Controller | BCM Supplier | Gateway Supplier | Sales Volume |
| -------------- | ---------------- | ---------- | ---------- | ----------------- | ----------------- | ------------------- | ------------------- | --------------------- | ------- | ------------------- | ------------------------- | -------------------- | ------------ | ------------ | ----------- | -------------- | ------------ | -------------------- | ------------ | ------------ | ------------------------ | ---------- | -------------------- | ------------ | ---------- | ------------- | ---------- | ---------- | --------------- | -------------------------- | ----------- | --------------------------- | ------------------- | ---------- | ------------- | ---------- | ---------- | ---------- | --------------------- | ------------- | -------------- | ----------------- | ----------- | ----------- | ------------- | -------- | --------- | ------------ | ------------------ | -------------------------- | ---------------------------- | ------------------ | ---------------------- | ------------------ | --------------------------- | ------------------- | -------------------------------------- | ----------------------------------- | --------------------------------- | ------------------------------- | -------------------- | ------------------------- | ---------------------- | ------------------- | --------------------- | ------------------------------ | ----------------------------------- | ------------------------ | ----------------------------------- | ---------------- | -------------------- | ------------------------------------------ | ------------------------- | ------------------------- | -------------- | -------------------------- | --------------- | ----------------------------------- | --------------------- | ------------------------------ | ---------------------- | ---------------------- | -------------------------------- | ------------------------------------ | ---------------------- | ------------------------- | ------------------- |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2026款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2025.11 | 17.98               | 15-20万                    | 16.98～23.88          | ●            | ●            | -           | ●              | ●            | ●                    | ●            | ●            | -                        | -          | -                    | -            | ●          | ●             | ●          | -          | -               | -                          | ●           | -                           | -                   | -          | -             | -          | -          | -          | -                     | -             | -              | -                 | -           | -           | -             | -        | -         | -            | L2                 | -                          | 4                            | -                  | 电装                     | -                  | 电装                          | 8.4                 | 松下（Ficosa）                             | -                                   | -                                 | -                               | 电装                   | DNMWR011                  | 英飞凌                    | -                   | 大陆                    | 电装                             | -                                   | 电装                       | 行车                                  | -                | 瑞萨V4H                | 34                                         | -                         | -                         |                | -                          |                 | -                                   | 松下（Ficosa）            | 松下泰康                           | -                      | -                      | -                                | -                                    | 电装                     | 电装                        | 14832               |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2026款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2025.11 | 18.98               | 15-20万                    | 16.98～23.88          | ●            | ●            | -           | ●              | ●            | ●                    | ●            | ●            | -                        | -          | -                    | -            | ●          | ●             | ●          | -          | -               | -                          | ●           | -                           | -                   | -          | -             | -          | -          | -          | -                     | -             | -              | -                 | -           | -           | -             | -        | -         | -            | L2                 | -                          | 4                            | -                  | 电装                     | -                  | 电装                          | 8.4                 | 松下（Ficosa）                             | -                                   | -                                 | -                               | 电装                   | DNMWR011                  | 英飞凌                    | -                   | 大陆                    | 电装                             | -                                   | 电装                       | 行车                                  | -                | 瑞萨V4H                | 34                                         | -                         | -                         |                | -                          |                 | -                                   | 松下（Ficosa）            | 松下泰康                           | -                      | -                      | -                                | -                                    | 电装                     | 电装                        | 1761                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 16.98               | 15-20万                    | 16.98～26.38          | ●            | ●            | -           | ●              | ●            | ●                    | ●            | -            | -                        | -          | -                    | -            | -          | -             | -          | -          | -               | -                          | -           | -                           | -                   | -          | -             | -          | -          | -          | -                     | -             | -              | -                 | -           | -           | -             |          | -         | -            | L2                 | -                          | -                            | -                  | 电装                     | 东芝Visconti5        | 电装                          | 1.2                 | -                                      | -                                   | -                                 | -                               | 电装                   | DNMWR011                  | 英飞凌                    | -                   | -                     | 电装                             | -                                   | -                        | -                                   | -                | -                    |                                            | -                         | -                         |                | -                          |                 | -                                   | -                     | -                              | -                      | -                      | -                                | -                                    | 电装                     | 电装                        | 4224                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 18.98               | 15-20万                    | 16.98～26.38          | ●            | ●            | -           | ●              | ●            | ●                    | ●            | -            | -                        | -          | -                    | -            | -          | -             | -          | -          | -               | -                          | ●           | -                           | -                   | -          | -             | -          | -          | -          | -                     | -             | -              | -                 | -           | -           | -             |          | -         | -            | L2                 | -                          | 4                            | -                  | 电装                     | 东芝Visconti5        | 电装                          | 1.2                 | 松下（Ficosa）                             | -                                   | -                                 | -                               | 电装                   | DNMWR011                  | 英飞凌                    | -                   | -                     | 电装                             | -                                   | -                        | -                                   | -                | -                    |                                            | -                         | -                         |                | -                          |                 | -                                   | 松下（Ficosa）            | -                              | -                      | -                      | -                                | -                                    | 电装                     | 电装                        | 1679                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 19.98               | 15-20万                    | 16.98～26.38          | ●            | ●            | -           | ●              | ●            | ●                    | ●            | -            | -                        | -          | -                    | -            | -          | -             | -          | -          | -               | -                          | ●           | -                           | -                   | -          | -             | -          | -          | -          | -                     | -             | -              | -                 | -           | -           | -             |          | -         | -            | L2                 | -                          | 4                            | -                  | 电装                     | 东芝Visconti5        | 电装                          | 1.2                 | 松下（Ficosa）                             | -                                   | -                                 | -                               | 电装                   | DNMWR011                  | 英飞凌                    | -                   | -                     | 电装                             | -                                   | -                        | -                                   | -                | -                    |                                            | -                         | -                         |                | -                          |                 | -                                   | 松下（Ficosa）            | 松下泰康                           | -                      | -                      | -                                | -                                    | 电装                     | 电装                        | 4714                |

## Smart Cockpit



| #  | Field Name                                               | Data Type |
| --- | -------------------------------------------------- | ---- |
| 1   | OEM Company                                     | Text   |
| 2   | OEM Group                                   | Text   |
| 3   | Brand                                         | Text   |
| 4   | Model                                         | Text   |
| 5   | Launch Year                                  | Text   |
| 6   | Power Type                                  | Text   |
| 7   | Brand Pedigree                                | Text   |
| 8   | JV/Domestic                                | Text   |
| 9   | Classification                              | Text   |
| 10  | Launch Time                                          | Text   |
| 11  | Retail Price                                | Number   |
| 12  | Retail Price Range                          | Text   |
| 13  | MSRP by Model                               | Text   |
| 14  | Cockpit Cross-domain Solution            | Text   |
| 15  | In-cabin CDC                                | Text   |
| 16  | CDC Supplier                              | Text   |
| 17  | CDC SoC                                 | Text   |
| 18  | CDC OS                                  | Text   |
| 19  | In-cabin Hypervisor                    | Text   |
| 20  | IVI Screen                                   | Text   |
| 21  | IVI Screen Size (inches)                    | Number   |
| 22  | IVI Tier1                          | Text   |
| 23  | IVI SoC                                     | Text   |
| 24  | IVI Screen SI                           | Text   |
| 25  | IVI LCD Screen Supplier                 | Text   |
| 26  | IVI SW Integrator                  | Text   |
| 27  | Entertainment System                      | Text   |
| 28  | Vehicle-to-Phone Mapping                 | Text   |
| 29  | IVI OS                                      | Text   |
| 30  | GPS                                        | Text   |
| 31  | AR Navigation                              | Text   |
| 32  | Real-time Traffic                           | Text   |
| 33  | Map                                           | Text   |
| 34  | Navigation Engine                           | Text   |
| 35  | Voice Supplier                                | Text   |
| 36  | Voice Control                               | Text   |
| 37  | Wake-word-free (语音免唤醒词)                                            | Text   |
| 38  | Zone-based Wake-up Recognition                                         | Text   |
| 39  | Continuous Voice Recognition                                            | Text   |
| 40  | See-and-Say (可见即可说)                                             | Text   |
| 41  | Vehicle Computer                            | Text   |
| 42  | Full Digital Dashboard                    | Text   |
| 43  | Digital Dashboard Size (inches)            | Number   |
| 44  | Instrument Cluster SI              | Text   |
| 45  | Instrument Cluster SoC                      | Text   |
| 46  | Instrument Cluster Screen Integrator    | Text   |
| 47  | Instrument Cluster Screen Supplier      | Text   |
| 48  | Passenger Screen                             | Text   |
| 49  | Passenger Screen Supplier                | Text   |
| 50  | Front Climate Control Screen             | Text   |
| 51  | Front Climate Control Screen Supplier | Text   |
| 52  | Backseat Headrest Screen                   | Text   |
| 53  | Backseat Headrest Screen Size            | Number   |
| 54  | Backseat Headrest Screen Supplier       | Text   |
| 55  | Backseat Roof-mounted Screen               | Text   |
| 56  | Backseat Roof-mounted Screen Size        | Number   |
| 57  | Backseat Roof-mounted Screen Supplier   | Text   |
| 58  | Backseat Armrest Screen                    | Text   |
| 59  | Backseat Armrest Screen Size             | Number   |
| 60  | Backseat Armrest Screen Supplier        | Text   |
| 61  | Backseat Projection Screen                 | Text   |
| 62  | HUD                                               | Text   |
| 63  | HUD Type                                   | Text   |
| 64  | HUD Supplier                              | Text   |
| 65  | PGU Type                                   | Text   |
| 66  | Driving Recorder                           | Text   |
| 67  | Streaming Rearview Mirror                  | Text   |
| 68  | Electronic Toll Collection                   | Text   |
| 69  | Hand-off Detection                       | Text   |
| 70  | Fatigue Warning                             | Text   |
| 71  | In-cabin Monitoring                      | Text   |
| 72  | Face ID                                            | Text   |
| 73  | DMS (Driver Monitoring)                                     | Text   |
| 74  | OMS (Occupant Monitoring)                                      | Text   |
| 75  | Gesture Recognition                         | Text   |
| 76  | In-cabin Entertainment Camera             | Text   |
| 77  | In-cabin Vision Solution                  | Text   |
| 78  | In-cabin Vision Tier1                    | Text   |
| 79  | In-cabin Camera Supplier               | Text   |
| 80  | Camera Count (in-cabin)                      | Text   |
| 81  | Camera Install Location (in-cabin)          | Text   |
| 82  | Internet of Vehicles                         | Text   |
| 83  | OTA                                               | Text   |
| 84  | FOTA                                              | Text   |
| 85  | OTA Supplier                              | Text   |
| 86  | Telematic Module                            | Text   |
| 87  | Cellular                                    | Text   |
| 88  | Bluetooth                                   | Text   |
| 89  | APP Remote Control                       | Text   |
| 90  | Roadside Assistance                         | Text   |
| 91  | TBOX Supplier                               | Text   |
| 92  | TBOX Solution                            | Text   |
| 93  | Sales Volume                                | Number   |


### Data Example

The following shows the first 5 records; sample values are from the Chinese data source and are kept as-is.

| OEM Company | OEM Group | Brand | Model | Launch Year | Power Type | Brand Pedigree | JV/Domestic | Classification | Launch Time    | Retail Price | Retail Price Range | MSRP by Model | Cockpit Cross-domain Solution | In-cabin CDC | CDC Supplier | CDC SoC | CDC OS | In-cabin Hypervisor | IVI Screen | IVI Screen Size | IVI Tier1 | IVI SoC | IVI Screen SI | IVI LCD Screen Supplier | IVI SW Integrator | Entertainment System | Vehicle-to-Phone Mapping | IVI OS | GPS | AR Navigation | Real-time Traffic | Map | Navigation Engine | Voice Supplier | Voice Control | Wake-word-free | Zone-based Wake-up | Continuous Recognition | See-and-Say | Vehicle Computer | Full Digital Dashboard | Digital Dashboard Size | Instrument Cluster SI | Instrument Cluster SoC | Instrument Cluster Screen Integrator | Instrument Cluster Screen Supplier | Passenger Screen | Passenger Screen Supplier | Front Climate Control Screen | Front Climate Control Screen Supplier | Backseat Headrest Screen | Backseat Headrest Screen Size | PGU Type | Driving Recorder | Streaming Rearview Mirror | ETC | Hand-off Detection | Fatigue Warning | In-cabin Monitoring | Face ID | DMS | OMS | Gesture Recognition | In-cabin Entertainment Camera | In-cabin Vision Solution | In-cabin Vision Tier1 | In-cabin Camera Supplier | Camera Count (in-cabin) | Camera Install Location (in-cabin) | Internet of Vehicles | OTA | FOTA | OTA Supplier | Telematic Module | Cellular | Bluetooth | APP Remote Control | Roadside Assistance | TBOX Supplier | TBOX Solution | Sales Volume |
| -------------- | ---------------- | ---------- | ---------- | ----------------- | ----------------- | ------------------- | ------------------- | --------------------- | ------- | ------------------- | ------------------------- | -------------------- | --------------------------------------- | ------------------- | --------------------- | ------------------ | ----------------- | ------------------------------- | ---------------- | ------------------------------- | ------------------------- | -------------- | ------------------------ | ---------------------------------- | --------------------------------- | ----------------------------- | ---------------------------------- | ------------- | ----------- | --------------------- | ------------------------ | -------- | ------------------------ | ------------------- | -------------------- | ------ | --------- | ------ | ----- | ----------------------- | ------------------------------- | --------------------------------------- | ------------------------------------- | ----------------------------- | ----------------------------------------------- | --------------------------------------------- | ---------------------- | ----------------------------------- | -------------------------------------- | -------------------------------------------------- | -------------------------------- | --------------------------------------- | ---------------- | ------------------------ | --------------------------------- | -------------------------------- | ---------------------------- | ---------------------- | ----------------------------- | ------- | -------------- | ------------- | -------------------------- | -------------------------------------- | --------------------------------- | ------------------------------- | ------------------------------------ | ----------------------------- | ----------------------------------------- | -------------------------- | --- | ---- | --------------------- | ----------------------- | ----------- | --------- | ---------------- | ------------------- | ----------- | -------------- | --------------- |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2026款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2025.11 | 17.98               | 15-20万                    | 16.98～23.88          |                                         | ●                   | 德赛西威                  | 高通8155             | QNX               | QNX Hypervisor                  | ●                | 15.6                            | 德赛西威                      | 高通8155         | 德赛西威                     | 友达光电                               |                                   |                               | CarPlay$HiCar$Carlink              | 安卓            | ●           | -                     | ●                        | 四维图新     | 四维图新                     | 科大讯飞                | 多媒体$导航$电话$空调$天窗$座椅加热 | ●      | 四区域       | ●      | ●     | 彩色                      | ●                               | 8.8                                     | 电装                                    | 瑞萨                            | 电装                                              | JDI                                           | -                      | -                                   | -                                      | -                                                  | -                                | -                                       | -                | -                        | -                                 | ●                                | -                            | ●                      | -                             | -       | -              | -             | -                          | -                                      | -                                 | -                               | -                                    | -                             | -                                         | ●                          | ●   | -    | 德赛西威                  | 华为                      | 4G           | ●              | ●                 | ●                   | ●           | 德赛西威              | 华为                        | 14832               |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2026款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2025.11 | 18.98               | 15-20万                    | 16.98～23.88          |                                         | ●                   | 德赛西威                  | 高通8155             | QNX               | QNX Hypervisor                  | ●                | 15.6                            | 德赛西威                      | 高通8155         | 德赛西威                     | 友达光电                               |                                   |                               | CarPlay$HiCar$Carlink              | 安卓            | ●           | -                     | ●                        | 四维图新     | 四维图新                     | 科大讯飞                | 多媒体$导航$电话$空调$天窗$座椅加热 | ●      | 四区域       | ●      | ●     | 彩色                      | ●                               | 8.8                                     | 电装                                    | 瑞萨                            | 电装                                              | JDI                                           | -                      | -                                   | -                                      | -                                                  | -                                | -                                       | -                | -                        | -                                 | ●                                | -                            | ●                      | -                             | -       | -              | -             | -                          | -                                      | -                                 | -                               | -                                    | -                             | -                                         | ●                          | ●   | -    | 德赛西威                  | 华为                      | 4G           | ●              | ●                 | ●                   | ●           | 德赛西威              | 华为                        | 1761                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 16.98               | 15-20万                    | 16.98～26.38          |                                         | -                   | -                     | -                  | -                 | -                               | ●                | 10.25                           | 德赛西威&富赛                   | 瑞萨             | 德赛西威&富赛                  | 友达光电                               | 航盛                                | 丰田智行互联系统                      | CarPlay$CarLife$HUAWEI HiCar       | Linux         | -           | -                     | -                        | -        | -                        | -                   | -                    |        |           |        |       | 彩色                      | -                               | 4.2                                     | 电装                                    |                               | -                                               | -                                             | -                      | -                                   | -                                      | -                                                  | -                                | -                                       | -                | -                        | -                                 | -                                | -                            | -                      | -                             | -       | -              | -             | -                          | -                                      | -                                 | -                               | -                                    | -                             | -                                         | -                          | -   | -    | -                     | -                       | -           | -              | -                 | -                   | -           | -                     | -                           | 4224                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 18.98               | 15-20万                    | 16.98～26.38          |                                         | -                   | -                     | -                  | -                 | -                               | ●                | 10.25                           | 德赛西威&富赛                   | 瑞萨             | 德赛西威&富赛                  | 友达光电                               | 航盛                                | 丰田智行互联系统                      | CarPlay$CarLife$HUAWEI HiCar       | Linux         | ●           | -                     | ●                        | 高德       | 高德                       | 百度                  | 多媒体$导航$电话$空调$天窗      |        | 单区域       |        |       | 彩色                      | -                               | 7                                       | 电装                                    |                               | -                                               | -                                             | -                      | -                                   | -                                      | -                                                  | -                                | -                                       | -                | -                        | -                                 | -                                | -                            | -                      | -                             | -       | -              | -             | -                          | -                                      | -                                 | -                               | -                                    | -                             | -                                         | ●                          | ●   | -    | 德赛西威                  | 华为                      | 4G           | ●              | ●                 | ●                   | ●           | 德赛西威              | 华为                        | 1679                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 19.98               | 15-20万                    | 16.98～26.38          |                                         | -                   | -                     | -                  | -                 | -                               | ●                | 10.25                           | 德赛西威&富赛                   | 瑞萨             | 德赛西威&富赛                  | 友达光电                               | 德赛西威                              | 丰田智行互联系统                      | CarPlay$CarLife$HUAWEI HiCar       | Linux         | ●           | -                     | ●                        | 高德       | 高德                       | 百度                  | 多媒体$导航$电话$空调$天窗      |        | 单区域       |        |       | 彩色                      | ●                               | 12.3                                    | 电装                                    | 瑞萨                            | 电装                                              | JDI                                           | -                      | -                                   | -                                      | -                                                  | -                                | -                                       | -                | -                        | -                                 | -                                | -                            | -                      | -                             | -       | -              | -             | -                          | -                                      | -                                 | -                               | -                                    | -                             | -                                         | ●                          | ●   | -    | 德赛西威                  | 华为                      | 4G           | ●              | ●                 | ●                   | ●           | 德赛西威              | 华为                        | 4714                |

## Body Configuration



| #  | Field Name                                          | Data Type |
| --- | --------------------------------------------- | ---- |
| 1   | OEM Company                                | Text   |
| 2   | OEM Group                              | Text   |
| 3   | Brand                                    | Text   |
| 4   | Model                                    | Text   |
| 5   | Launch Year                             | Text   |
| 6   | Power Type                             | Text   |
| 7   | Brand Pedigree                           | Text   |
| 8   | JV/Domestic                           | Text   |
| 9   | Classification                         | Text   |
| 10  | Launch Time                                         | Text   |
| 11  | Retail Price                           | Number   |
| 12  | Retail Price Range                     | Text   |
| 13  | MSRP by Model                          | Text   |
| 14  | CCU/VDC                             | Text   |
| 15  | Body Zone Supplier              | Text   |
| 16  | Body Domain Controller          | Text   |
| 17  | BCM Supplier                        | Text   |
| 18  | Gateway Supplier                     | Text   |
| 19  | AC                                     | Text   |
| 20  | Heat Pump AC                           | Text   |
| 21  | Rear Independent AC                  | Text   |
| 22  | AC ECU                                | Text   |
| 23  | Audio System                           | Text   |
| 24  | Speaker Number                         | Number   |
| 25  | Speaker Brand (Standard)         | Text   |
| 26  | Speaker Brand (Optional)         | Text   |
| 27  | AMP                               | Text   |
| 28  | ANC Feature                         | Text   |
| 29  | ANC Supplier                        | Text   |
| 30  | AVAS Supplier                 | Text   |
| 31  | Power Steering Type                  | Text   |
| 32  | EPS ECU Supplier                  | Text   |
| 33  | ESC/ESP Feature              | Text   |
| 34  | ESC/ESP Supplier                 | Text   |
| 35  | Brake Assist (vacuum/hydraulic) | Text   |
| 36  | Two-box EHB                      | Text   |
| 37  | One-box EHB                      | Text   |
| 38  | EMB (Brake-by-wire Supplier)                                | Text   |
| 39  | Parking Brake                        | Text   |
| 40  | Adjustable Suspension Height         | Text   |
| 41  | Adjustable Suspension Soft/Stiff     | Text   |
| 42  | Air Suspension                         | Text   |
| 43  | Electromagnetic Suspension           | Text   |
| 44  | Air Suspension Controller           | Text   |
| 45  | Air Spring                             | Text   |
| 46  | CDC/MRC Supplier                    | Text   |
| 47  | CDC/MRC                              | Text   |
| 48  | Air Compressor                         | Text   |
| 49  | Compressor Supplier                     | Text   |
| 50  | Front Suspension Type                 | Text   |
| 51  | Rear Suspension Type                  | Text   |
| 52  | Sales Volume                           | Number   |


### Data Example

The following shows the first 5 records; sample values are from the Chinese data source and are kept as-is.

| OEM Company | OEM Group | Brand | Model | Launch Year | Power Type | Brand Pedigree | JV/Domestic | Classification | Launch Time    | Retail Price | Retail Price Range | MSRP by Model | CCU/VDC | Body Zone Supplier | Body Domain Controller | BCM Supplier | Gateway Supplier | AC | Heat Pump AC | Rear Independent AC | AC ECU | Audio System | Speaker Number | Speaker Brand (Standard) | Speaker Brand (Optional) | AMP | ANC Feature | ANC Supplier | AVAS Supplier | Power Steering Type | EPS ECU Supplier | ESC/ESP Feature | ESC/ESP Supplier | Brake Assist (vacuum/hydraulic) | Two-box EHB | One-box EHB | EMB | Parking Brake | Adjustable Suspension Height | Adjustable Suspension Soft/Stiff | Air Suspension | Electromagnetic Suspension | Air Suspension Controller | Air Spring | CDC/MRC Supplier | CDC/MRC | Air Compressor | Compressor Supplier | Front Suspension Type | Rear Suspension Type | Sales Volume |
| -------------- | ---------------- | ---------- | ---------- | ----------------- | ----------------- | ------------------- | ------------------- | --------------------- | ------- | ------------------- | ------------------------- | -------------------- | ----------------- | -------------------------------- | ------------------------------------ | ---------------------- | ------------------------- | --------- | ------------------- | ---------------------------- | -------------- | ------------------- | --------------------- | ------------------------------------- | ------------------------------------- | --------------- | --------------------- | ---------------------- | ----------------------------- | ---------------------------- | ---------------------------- | -------------------------------- | ----------------------------- | --------------------------------------------- | ------------------------ | ------------------------ | ------------- | ---------------------- | ------------------------------------- | ----------------------------------------- | --------------------- | ----------------------------------- | ----------------------------------- | ----------------- | -------------------------- | ---------------- | --------------------- | ------------------------- | ----------------------------- | ---------------------------- | ------------------- |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2026款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2025.11 | 17.98               | 15-20万                    | 16.98～23.88          | -                 | -                                | -                                    | 电装                     | 电装                        | ●         | -                   | -                            | 电装             | ●                   | 6                     | 松下                                    | -                                     | -               | -                     | -                      | -                             | 电动助力                         | Jtekt                        | ●                                | 博世                            | 爱德克斯                                          | -                        | -                        | -             | 电子驻车                   | -                                     | -                                         | -                     | -                                   | -                                   | -                 | -                          | -                | -                     | -                         | 麦弗逊式独立悬架                      | 双横臂式独立悬架                     | 14832               |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2026款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2025.11 | 18.98               | 15-20万                    | 16.98～23.88          | -                 | -                                | -                                    | 电装                     | 电装                        | ●         | -                   | -                            | 电装             | ●                   | 6                     | 松下                                    | -                                     | -               | -                     | -                      | -                             | 电动助力                         | Jtekt                        | ●                                | 博世                            | 爱德克斯                                          | -                        | -                        | -             | 电子驻车                   | -                                     | -                                         | -                     | -                                   | -                                   | -                 | -                          | -                | -                     | -                         | 麦弗逊式独立悬架                      | 双横臂式独立悬架                     | 1761                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 16.98               | 15-20万                    | 16.98～26.38          | -                 | -                                | -                                    | 电装                     | 电装                        | ●         | -                   | -                            | 电装             | ●                   | 4                     | 松下                                    | -                                     | -               | -                     | -                      | -                             | 电动助力                         | Jtekt                        | ●                                | 博世                            | 爱德克斯                                          | -                        | -                        | -             | 电子驻车                   | -                                     | -                                         | -                     | -                                   | -                                   | -                 | -                          | -                | -                     | -                         | 麦弗逊式独立悬架                      | 双叉臂式独立悬架                     | 4224                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 18.98               | 15-20万                    | 16.98～26.38          | -                 | -                                | -                                    | 电装                     | 电装                        | ●         | -                   | -                            | 电装             | ●                   | 6                     | 松下                                    | -                                     | -               | -                     | -                      | -                             | 电动助力                         | Jtekt                        | ●                                | 博世                            | 爱德克斯                                          | -                        | -                        | -             | 电子驻车                   | -                                     | -                                         | -                     | -                                   | -                                   | -                 | -                          | -                | -                     | -                         | 麦弗逊式独立悬架                      | 双叉臂式独立悬架                     | 1679                |
| 一汽丰田           | 一汽集团             | 丰田         | RAV4荣放     | 2024款             | 汽油                | 日系                  | 合资                  | 紧凑型SUV                | 2024.09 | 19.98               | 15-20万                    | 16.98～26.38          | -                 | -                                | -                                    | 电装                     | 电装                        | ●         | -                   | -                            | 电装             | ●                   | 6                     | 松下                                    | -                                     | -               | -                     | -                      | -                             | 电动助力                         | Jtekt                        | ●                                | 博世                            | 爱德克斯                                          | -                        | -                        | -             | 电子驻车                   | -                                     | -                                         | -                     | -                                   | -                                   | -                 | -                          | -                | -                     | -                         | 麦弗逊式独立悬架                      | 双叉臂式独立悬架                     | 4714                |
