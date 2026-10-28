---
title: VIN Fundamentals
description: The definition of VIN, its 17-character structure, model year rules, and usage boundaries.
is_active: no
---

# VIN Fundamentals

> Scope: general description of the Vehicle Identification Number. Specific automakers, markets, and regulatory versions may differ.

## Basic Concepts

VIN (Vehicle Identification Number) is a character code used to identify a specific motor vehicle. A common passenger-vehicle VIN is 17 characters long and typically contains the manufacturer, vehicle characteristics, model year, assembly plant, and production serial number.

The VIN is a vehicle identity, not equivalent to the brand name, series name, vehicle model, or trim name.

The VIN can be used for vehicle lookup, profile association, data deduplication, and model identification, but it usually cannot by itself reconstruct the complete configuration, options, or actual registration information. Precise identification requires combining the manufacturer's rules, production batch, model database, and vehicle documents.

## 17-Character Structure

| Position | Name | Common Meaning |
| --- | --- | --- |
| 1–3 | WMI | World Manufacturer Identifier, usually identifying the manufacturing country/region, manufacturer, and vehicle category |
| 4–8 | VDS | Vehicle Descriptor Section, usually describing body, platform, engine, restraint system, and other characteristics |
| 9 | Check digit | Used to verify that the VIN conforms to the relevant calculation rules; not all markets use identical rules |
| 10 | Model year code | Usually represents the model year; see rules below |
| 11 | Plant code | Usually identifies the manufacturing or final-assembly plant |
| 12–17 | VIS | Vehicle Indicator Section, usually containing the production serial number used to distinguish a specific vehicle |

VINs generally avoid the uppercase letters `I`, `O`, and `Q` to reduce confusion with the digits `1` and `0`. The specific coding of the VDS and VIS is defined by the manufacturer and cannot be interpreted across automakers using only the generic position table.

## Model Year Rules

VIN position 10 is usually used to represent the model year. The model year is the identifier a manufacturer uses to define a product year or version; it does not necessarily equal the actual production year of the vehicle, nor the first registration date.

Common letters and digits are mapped to a model year through the year-cycling table adopted by the manufacturer. Different markets may have different starting years, cycle periods, and exceptions, so a fixed table must not be applied without the manufacturer's rules.

| Concept | Meaning | Primary Source |
| --- | --- | --- |
| Model year | The product year or model version | VIN, manufacturer model documents |
| Production / release date | The date the vehicle was actually manufactured or released | Nameplate, production records, data interface |
| First registration date | The date the vehicle was first registered and licensed | Registration documents, vehicle profile |

For vehicle age, insurance, or finance judgments, use the actual date field required by the business. For cross-year production, facelifts, or imported vehicles, verify against the model database and registration documents.

## Related Interfaces

- [GetModelByVIN](/vin-model-getmodelbyvin)

## Source & Version

- Source: general VIN structure conventions, manufacturer coding rules, manufacturer model documents, and vehicle data business practice.
- Maintained version: 2026-09.
