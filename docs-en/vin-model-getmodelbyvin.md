---
title: VIN Model Lookup (High Precision) - GetModelByVIN
category: VIN & Model
order: 105
docType: interface
is_active: yes
description: "Match brand, series, model, and configuration through the VIN to reduce manual data entry."
---
# VIN Model Lookup (High Precision) - GetModelByVIN

## Use Cases

- **Vehicle profile completion**: match brand, series, model, and configuration through the VIN to reduce manual data entry.
- **Used car valuation and acquisition screening**: after confirming the exact trim, assist in matching MSRP, condition, and historical transaction data.
- **Finance and insurance verification**: provide standardized model base information for auto loans, insurance quoting, and risk rules.
- **Repair and parts matching**: confirm the exact model to determine maintenance, repair, and parts applicability.
- **Data governance and manual review**: trigger a review when registration data disagrees with VIN lookup results.

## Endpoint

See the cooperation email notification.

## API Description

| Protocol | Method | Encoding | Response Format |
| --- | --- | --- | --- |
| HTTPS | GET/POST | UTF-8 | JSON |

## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| access_token | string | Yes | Access token; generate it via the App.Auth.ApplyToken interface |
| vin | string | Yes | Min: 17; Max: 17. The VIN, e.g., 1HGBH41JXMN000001 |

## Response Fields

### Response Result

| Field | Type | Description |
| --- | --- | --- |
| ret | integer | Status code; 200 = success, 4xx = client error, 5xx = server error |
| data | object or mixed type | Business data, specified per interface; usually an object |
| msg | string | Message; error description on failure |

### Data Array Field Meanings

| Field        | Data Type  | Meaning                     | Example                              |
| ---------- | ------- | ------------------------- | --------------------------------- |
| vin        | varchar | The VIN from the request                 |                                   |
| autoID     | int     | AUTODATA model-library trim ID; blank marks 0 | 26847                             |
| bodyStruct | varchar | Body structure                      | SUV                               |
| chexi      | varchar | Series                        | 自由侠(第一代,2016-)                    |
| chexing    | varchar | Model / trim                      | 自由侠 2016款 1.4T 手动动能版              |
| clxh       | varchar | Vehicle model                      | GFA7140DFCA                       |
| code       | varchar | Trim code                     | 8LR3UFIUC25V7O86 S200089M31708581 |
| code5      | varchar | One-to-one relationship between code5 and chexi | 8LR3UF                            |
| csys       | varchar | Body color                      | 皓白色                               |
| edzk       | varchar | Rated seating                     | 5                                 |
| fdjhm      | varchar | Engine number                    | 200991                            |
| fdjMod     | varchar | Engine                      | 1.4T 150马力 L4                     |
| fdjxh      | varchar | Engine model                    | 523A0027                          |
| gl         | varchar | Power                        | 110                               |
| hlj        | varchar | Rear track                      | 1540                              |
| jiage      | decimal | MSRP                      | 13.48                             |
| jibie      | varchar | Vehicle class                      | 小型SUV                             |
| ltgg       | varchar | Tire specification                      | 215\/65R16 98H                    |
| lts        | varchar | Number of tires                     | 4                                 |
| niank      | int     | Model year                       | 2016                              |
| oilWay     | varchar | Fuel type                      | 汽油                                |
| pfbz       | varchar | Emission standard                      | GB18352.5-2013国V                  |
| qlj        | varchar | Front track                      | 1540                              |
| qud        | varchar | Drive type                     | 前置前驱                              |
| riqi       | varchar | Release date                      | 2016/12/27                        |
| wkc        | varchar | Overall length                      | 4245                              |
| wkg        | varchar | Overall height                     | 1695                              |
| wkk        | varchar | Overall width                      | 1805                              |
| yh         | varchar | Fuel consumption                       | 6.8                               |
| zbzl       | varchar | Curb weight                      | 1385                              |
| zh         | varchar | Axle load                       | 934\/881                          |
| zj         | varchar | Wheelbase                       | 2570                              |
| zs         | varchar | Number of axles                     | 2                                 |
| zzl        | varchar | Gross weight                      | 1815                              |
| zzs        | varchar | Manufacturer                      | 广汽菲克Jeep                          |

## Examples

### Sample JSON Response

If the VIN corresponds to multiple possible trims, the `list` contains multiple arrays.

```text
{
  "ret": 200.0,
  "data": {
    "vin": "LB37742Z6JB134**0",// In production the full VIN is shown
    "list": [
      {
        "autoID": 33668.0,
        "bodyStruct": "SUV",
        "chexi": "博越(第一代,2016-)",
        "chexing": "博越 2018款 1.8TD 自动两驱智联型4G互联版",
        "clxh": "HQ6453C03",
        "code": "8IN2U6LUD29V7C56",
        "code5": "8IN2U6",
        "csys": "吉利白",
        "edzk": "5",
        "fdjhm": "JACB0209402",
        "fdjMod": "1.8T 184马力 L4",
        "fdjxh": "JLE-4G18TDB",
        "gl": "135",
        "hlj": "1550",
        "jiage": 12.98,
        "jibie": "紧凑型SUV",
        "ltgg": "225/60R18",
        "lts": "4",
        "niank": 2018.0,
        "oilWay": "汽油",
        "pfbz": "GB18352.5-2013国Ⅴ",
        "qlj": "1560",
        "qud": "前置前驱",
        "riqi": "2018-10-29",
        "wkc": "4519",
        "wkg": "1694",
        "wkk": "1831",
        "yh": "7.8",
        "zbzl": "1690",
        "zh": "1110/955",
        "zj": "2670",
        "zs": "2",
        "zzl": "2065",
        "zzs": "吉利汽车"
      }
    ]
  },
  "msg": ""
}
```

## Error Codes

### Error List

| Status Code | Description |
| --- | --- |
| 400 | ret=400, client parameter error or invalid request |
| 404 | The interface service does not exist |
| 406 | ret=406, access_token verification failed |
| 407 | ret=407, insufficient app_key permission or unknown application |
| 408 | ret=408, the current user is prohibited or not logged in |
| 500 | Internal server error |
