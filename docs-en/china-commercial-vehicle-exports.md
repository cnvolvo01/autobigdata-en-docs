---
title: China Commercial Vehicle Exports
category: Global Market Analysis
order: 802
docType: interface
is_active: yes
description: "Analyze the overseas export scale and model structure of commercial vehicle products such as heavy and light trucks."
---
# China Commercial Vehicle Exports

## Use Cases

- Analyze the overseas export scale and model structure of commercial vehicle products such as heavy and light trucks.
- Compare export layouts by enterprise, tonnage segment, fuel type, and market segment.
- Support commercial vehicle enterprises in destination-market screening, product planning, and channel expansion.
- Provide a data foundation for overseas commercial vehicle competitive landscape, export structure, and industry trend research.

## Data Fields

The following fields come from commercial vehicle export data.

```json
{
  "year_month": "string",
  "vehicle_major_category": "string",
  "vehicle_category": "string",
  "company_name": "string",
  "company_short_name": "string",
  "length_tonnage_segment": "string",
  "fuel_type": "string",
  "market_segment": "string",
  "export_volume": "number|string"
}
```

## Data Sample

The following is a spreadsheet-style display of the first 5 records of the source file.
The volume is only illustrative.

| year_month     | vehicle_major_category | vehicle_category | company_short_name | length_tonnage_segment        | fuel_type | market_segment  | export_volume |
| ------ | ---- | ---- | ---- | ------------- | ---- | ----- | --- |
| 202603 | Heavy truck   | Semi-trailer   | Sinotruk Group | Tractor-trailer gross mass ≤25 t   | Diesel | None     | 1   |
| 202603 | Light truck   | Truck   | Great Wall Motor | 1.8 t < gross mass ≤3.5 t | Diesel | Multi-purpose truck | 11  |
| 202603 | Light truck   | Truck   | Changan Group | 3.5 t < gross mass ≤4.5 t | Diesel | Ordinary truck  | 36  |
| 202603 | Light truck   | Truck   | BAIC Group | 1.8 t < gross mass ≤3.5 t | Diesel | Ordinary truck  | 21  |
| 202603 | Light truck   | Truck   | SAIC Group | 1.8 t < gross mass ≤3.5 t | Diesel | Multi-purpose truck | 19  |
