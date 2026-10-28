---
title: Industry Fundamentals
description: Fundamentals of VIN, vehicle model, and vehicle terminology used across the automotive data interfaces.
is_active: no
---

# Industry Fundamentals

This directory consolidates the industry concepts, coding rules, and data-caliber definitions that recur throughout the automotive data interfaces. Knowledge is split by topic, keeping only the summaries and constraints directly relevant to the interfaces.

## Knowledge Navigation

### VIN

- [VIN Fundamentals](./vin)

### Vehicle Model

- [Vehicle Model & Type](./vehicle-model)

### Terminology & Date Caliber

- [Vehicle Terminology & Date Caliber](./vehicle-terminology)

## FAQ

### Can VIN position 10 directly give the vehicle production year?

No, it cannot be directly equated. Position 10 usually represents the model year; the production date must be confirmed together with position 11, the manufacturer's rules, the vehicle nameplate, or the model database. See [VIN Fundamentals](./vin).

### Can a complete configuration be determined from the VIN alone?

Generally no. The VIN provides the manufacturer and some vehicle-feature clues, but the complete trim usually requires the manufacturer's rules, production batch, and the model database. The model results returned by an interface should follow the interface definition and data-source caliber.

### Is the vehicle model the same as the marketing model name?

No. The vehicle model is usually a code from announcements, registration, or technical data; the marketing name is a display name for the brand, series, and trim. The two must be mapped through the model library or manufacturer documents.

## Usage Conventions

- This directory explains common industry concepts and does not replace the parameter, field, and error-code definitions of specific interfaces.
- Differences may exist across automakers, markets, and regulatory versions; for business judgments, follow the corresponding manufacturer, regulatory document, or interface data source.
- When rules change, update the relevant topic page rather than duplicating the same body text across multiple interface documents.
