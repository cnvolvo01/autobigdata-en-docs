---
title: Vehicle Terminology & Date Caliber
description: The difference between brand, series, model, and trim, and the vehicle date fields.
is_active: no
---

# Vehicle Terminology & Date Caliber

## Brand, Series, Model, and Trim

| Term | Description |
| --- | --- |
| Brand | The market-facing brand identity, which may correspond to one or more manufacturers |
| Manufacturer / OEM | The production enterprise, applicant, or the OEM entity in the model library |
| Series | The set of models under one product family, usually spanning multiple model years and trims |
| Model / Trim | A specific combination of model year, powertrain, transmission, drive, and configuration |
| Trim level | A more specific configuration version under a model, usually reflecting different standard configurations or option combinations |

A "series" is not the complete configuration of a single vehicle; brand and manufacturer may also differ. The displacement, powertrain, or version description in a model name does not necessarily contain all technical parameters. When returning model information, store brand, manufacturer, series, model name, and the original model code separately.

## Production Year, Model Year, and First Registration Date

| Field | Description | Common Use |
| --- | --- | --- |
| Production year | The year the vehicle was manufactured or rolled off the line | Production records, vehicle profile |
| Release date | The date a specific vehicle actually finished manufacturing or left the factory | Vehicle condition, warranty, inventory management |
| Model year | The model year defined by the manufacturer | Model identification, product display |
| First registration date | The date the vehicle was first registered and licensed | Vehicle age, finance, insurance business |

Before calculating vehicle age, confirm which date the business requires. Do not substitute the VIN position 10 directly for the release date or first registration date. For imported vehicles, cross-year production, facelift models, and inventory vehicles, keep the original date fields and state the source.

## Related Interfaces

- [Passenger Vehicle Model Library](/passenger-vehicle-model-library)
- [VIN Fundamentals](/knowledge/vin)
- [Vehicle Model & Type](/knowledge/vehicle-model)

## Source & Version

- Source: model-library field calibers, automotive product catalogs, manufacturer model documents, registration documents, and general VIN rules.
- Maintained version: 2026-09.
