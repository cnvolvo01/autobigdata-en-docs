---
title: China Passenger Vehicle Exports
category: Global Market Analysis
order: 801
docType: interface
is_active: yes
description: "Analyze the scale, brand structure, and model structure of China's passenger vehicle exports to different destination countries."
---
# China Passenger Vehicle Exports

## Use Cases

- Analyze the scale, brand structure, and model structure of China's passenger vehicle exports to different destination countries.
- Compare the export performance of BEVs and fuel vehicles in different overseas markets.
- Support automakers in developing destination-market entry, dealer network, and product mix strategies.
- Provide detailed data for overseas market research, competitor monitoring, and export trend forecasting.

## Data Fields

The following fields come from customs passenger vehicle export data.

```json
{
  "year": "integer",
  "month": "string",
  "destination_country": "string",
  "brand": "string",
  "model": "string",
  "vehicle_category": "string",
  "powertrain": "string",
  "export_volume": "integer"
}
```

## Data Sample

The following is a spreadsheet-style display of the first 5 records of the source file.
The volume is only illustrative.

| year   | month  | destination_country | brand  | model     | vehicle_category | powertrain | export_volume |
| ---- | --- | ----- | --- | ------ | ---- | ---- | ------- |
| 2026 | 03  | Australia  | BYD | Seagull     | CAR  | EV   | 49      |
| 2026 | 03  | Australia  | BMW  | BMW iX3  | SUV  | EV   | 169     |
| 2026 | 03  | Australia  | Haval  | Haval H6   | SUV  | ICE  | 826     |
| 2026 | 03  | Australia  | Haval  | Haval Dagou   | SUV  | ICE  | 174     |
| 2026 | 03  | Australia  | MG  | MG4 EV | CAR  | EV   | 153     |
