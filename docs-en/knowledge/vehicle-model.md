---
title: Vehicle Model & Type
description: The difference between automotive product model, vehicle model code, model name, and VIN, and the boundaries of code usage.
is_active: no
---

# Vehicle Model (Model Code) Coding Rules & Notes

> Scope: the "vehicle model" and its code in automotive product announcements, vehicle registration, the model library, and the vehicle base-information interfaces. Different vehicle categories, manufacturers, regulatory versions, and data sources may use different coding rules; this document explains the general caliber and does not replace specific manufacturer or regulatory documents.

## 1. What Is a Vehicle Model

A vehicle model (also commonly called vehicle model code or model code) is the model identifier a manufacturer or applicant sets for a class of technical products, used to associate announcements, registration, production, sales, and technical parameters. It describes a class of vehicle products, not the unique identity of a single vehicle.

Common fields in this project include:

| Field or Name | Common Meaning | Notes |
| --- | --- | --- |
| `model_code` | Vehicle model code | A common vehicle-model field in the announcement database and commercial vehicle data |
| `clxh` | Vehicle model | The vehicle-model field returned by the VIN & model interface |
| `VehicleModel` | Vehicle model | The vehicle-model field in Car5Meta, Car7Meta, and other interfaces |
| `model_code` (model library) | Announcement number or model-related code | Historical model-library fields may use the name "announcement number"; follow that data source's dictionary |
| `product_num` | Product number | The product number in announcement data, not equivalent to the vehicle model code |
| `chexing` / `model_name` | Model or trim name | A business-facing display name, usually more readable than the model code |

The relationship between the model code and the VIN:

- The VIN identifies a specific vehicle; the model code identifies a class of technical models.
- One model code can correspond to multiple vehicles and multiple VINs.
- One marketing model name may correspond to multiple model codes.
- A VIN lookup may match multiple candidate trims; the complete configuration cannot be inferred from the VIN or model code alone.

## 2. General Structure of the Coding Rules

A model code is usually composed of letters, digits, and a few separators, in a form similar to:

```text
manufacturer or product-series identifier + vehicle-category / technical-feature segment + variant or configuration identifier
```

Some codes may also contain chassis model, special-purpose-vehicle use, powertrain form, wheelbase, or product-variant information. Coding length and composition may differ for passenger vehicles, commercial vehicles, special-purpose vehicles, and chassis products.

Pay special attention:

1. The segments above are an abstract structure for understanding; not all model codes can be interpreted character by character at fixed positions.
2. A prefix does not necessarily represent the production location or brand; follow the enterprise code table, announcement data, or manufacturer documents.
3. A digit segment does not necessarily equal displacement, wheelbase, gross weight, or seating; unless the corresponding manufacturer rule exists, do not decompose it yourself.
4. A suffix may represent variant, powertrain, drive, wheelbase, use, or technical upgrade, but its exact meaning is defined by the corresponding coding system.
5. Separators such as `-` may be part of the code or part of the display format; keep the original value when storing.

For example, announcement or model data may contain forms such as:

```text
GFA7140DFCA
BJ1030V4AV8-32
SC5021XXYWQ6B4
```

These codes can serve as association keys for models, announcements, and technical parameters, but the exact meaning of each segment must not be asserted based on character position alone. Precise interpretation should consult the corresponding enterprise's model-numbering rules, announcement batch records, or model-library mapping.

## 3. Differences Between the Vehicle Model and Related Names

```text
Brand
└── Manufacturer / OEM
    └── Series
        └── Model / Trim
            └── Configuration, powertrain, and options
                └── Vehicle model code / announcement model
```

| Concept | Primary Use | Equivalent to model code? |
| --- | --- | --- |
| Brand | Market attribution and product display | No |
| Manufacturer / OEM | Production enterprise or applicant | No |
| Series | Product family and retrieval grouping | No |
| Model / Trim | Display name for the year, powertrain, transmission, and configuration combination | No |
| Vehicle model code | Association with announcements, registration, and technical parameters | Yes (the subject of this document) |
| VIN | Single-vehicle identity | No |

Marketing names and model codes are not one-to-one. The model library should establish mapping through brand, series, model ID, model code, announcement information, and validity period, rather than replacing codes with name strings.

## 4. Relationship with Announcement Data

Automotive product announcements usually contain the following information:

| Information | Purpose |
| --- | --- |
| Product number | Identifies an announcement product or product record |
| Announcement batch, release date | Determines the time and source of the record |
| Vehicle model | Associates a specific technical model |
| Product name | Describes the vehicle use or product name |
| Manufacturer, brand | Identifies the applicant and product attribution |
| Engine, chassis, traction battery, and other parameters | Supports technical and configuration verification |
| Parameter change, change batch, status | Determines whether the model has changed or is still valid |

The same model may have parameter changes in different batches, and there may be multiple similar models. When verifying a model, check the model code, enterprise, product name, announcement batch, release date, and key technical parameters together, rather than comparing only one string.

## 5. Data Processing and Verification Recommendations

### 1. Storage

- Store as a string, not an integer, to avoid losing leading zeros.
- Store both `raw_model_code` (original value) and a business-approved normalized value.
- Do not remove hyphens, spaces, or other separators on your own; cleaning rules should be versioned.
- Store the source system, collection time, announcement batch, or model-library version.

### 2. Format validation

- First validate for emptiness, then validate the character set and length per the current data source.
- Do not use a single nationwide regex to validate all model codes.
- Allow different formats for passenger, commercial, special-purpose, and chassis models in the same system.
- Format validity only means the string satisfies basic requirements; it does not mean the model actually exists or is currently valid.

### 3. Association and matching

- For exact matching, prefer "enterprise + model code + data-source version / validity period".
- For cross-system matching, keep the original code and build an explicit mapping table; do not rely only on fuzzy name matching.
- When VIN lookup, driving license, registration certificate, announcement, and model library disagree, escalate to manual review.
- When one model name corresponds to multiple models, show the candidate list and matching basis rather than forcing a single result.

## 6. Common Misconceptions

| Misconception | Correct Understanding |
| --- | --- |
| Treating the model code as a VIN | The model code corresponds to a class of products; the VIN corresponds to a specific vehicle |
| Inferring displacement or wheelbase from digits | Only interpretable when the corresponding manufacturer rule or data dictionary is explicit |
| Treating `product_num` as `model_code` | Product number and model code are different fields in announcement data |
| Replacing the model code with the marketing model name | Names may duplicate, facelift, or vary across data sources |
| Judging model validity from the code string alone | Also check announcement batch, release date, status, and parameter changes |
| Assuming one VIN maps to exactly one model result | Multiple candidate trims may be returned when the data source is insufficient or model-library mapping is non-unique |
| Assuming a model-code change means a vehicle modification | It may be an announcement change, configuration variant, data-source mapping, or entry difference; verification is required |

## 7. Interface Usage Boundaries

The vehicle model or candidate trims returned by this project's interfaces are suitable for vehicle profile completion, model retrieval, parameter association, and initial screening before manual review. They must not be used alone to:

- Prove a vehicle's complete configuration, options, or actual modification;
- Prove that a vehicle currently has production, sales, licensing, or operating eligibility;
- Replace the driving license, registration certificate, announcement original, or on-site inspection;
- Interpret the specific meaning of each character without enterprise rules and validity-period information.

When null values, multiple candidates, field conflicts, or unconfirmable validity periods occur, treat the result as "to be verified" rather than "no such model" or "the vehicle does not exist."

## Related Interfaces & References

- [MIIT Product Announcement Database](/miit-product-announcement-database)
- [Passenger Vehicle Model Library](/passenger-vehicle-model-library)
- [GetModelByVIN](/vin-model-getmodelbyvin)
- [Vehicle Terminology & Date Caliber](/knowledge/vehicle-terminology)

## Source & Version

- Source: automotive product announcement fields, model-library fields, VIN & model interface, and vehicle base-information interfaces.
- Maintained version: 2026-09.
