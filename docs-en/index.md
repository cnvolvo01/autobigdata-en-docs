---
title: Data & API Overview
order: 0
---

# Data & API Overview

The AutoData open platform provides full-value-chain automotive data and API services covering vehicle basic data, new cars, used cars, auto finance, and NEV three-electric systems (traction battery, electric drive, and electronic control). This page indexes all data and interfaces by business capability, helping business owners, product managers, sales, procurement, dealership staff, and vehicle appraisers quickly locate the capability they need.

All interfaces follow a unified **HTTPS + JSON** calling convention. You first obtain an `access_token` by applying with your `app_key` / `app_secret`, then call the interface. See each interface's documentation for parameter and response details. The interfaces return vehicle information and risk clues that improve review efficiency and reduce information asymmetry, but they do not replace your own vehicle inspection, face-to-face verification, contract review, or final decisions.

---

## VIN & Model

The base profile of a vehicle and its model, used to confirm model eligibility, identify the exact trim, and verify base vehicle parameters.

- [Passenger Vehicle Model Library](/passenger-vehicle-model-library): the brand / series / model year / trim mainline, including MSRP, powertrain, dimensions, range and other parameters
- [VIN Model Lookup](/vin-model-getmodelbyvin): resolve the vehicle trim from a VIN (high precision)

## Used Car Valuation

Used car value retention and factor-based valuation, used for pricing and residual value assessment.

- [Used Car Value Retention Rate](/used-car-value-retention): used car value retention rate
- [Used Car Valuation](/valuation-getusedpricemileagecity): factor-based used car valuation by age, mileage, and city

## Accident & Claims

A progressive chain from claim summary to full claim report, used as risk signals for used car acquisition, valuation, and transaction review.

- [Accident Summary Mini](/accident-summary-mini): claim amount range, total-loss clue, and major-accident summary as the first layer of risk signal
- [Largest Claim](/largest-claim): the most significant accident or claim in history
- [Claims — Simple](/claims-simple): simplified claims settlement query
- [Claims Report](/insurance-report-by-vin): VIN-based insurance claim report
- [CIECC Claim Report](/ciecc-claim-report): claim report from CIECC Saike Data (a center under the Ministry of Commerce)

## Vehicle Transfer & Condition

Vehicle transfer and condition clues, used to identify transfer frequency and suspected odometer rollback.

- [Vehicle Ownership Transfer Count](/title-transfer-count): number of historical vehicle ownership transfers
- [Insurance Transfer Count — VIN](/insurance-transfer-count-vin): query transfer frequency in insurance records by VIN
- [Insurance Transfer Count — Plate](/insurance-transfer-count-plate): query transfer frequency in insurance records by license plate

## Auto Finance — Car 5 Essentials

Supplements base information such as engine number, vehicle model, brand, first registration date, and usage type, for dealership data entry, profile completion, and initial acquisition screening.

- [Car5meta](/car5meta): five-field vehicle information verification
- [Car7meta](/car7meta): seven-field vehicle information verification
- [Car5Meta V2 — VIN](/car5meta-v2-vin): five-field information V2, queried by VIN
- [Car5Meta V2 — Plate](/car5meta-v2-plate): five-field information V2, queried by license plate
- [Car7Meta V2 — VIN](/car7meta-v2-vin): seven-field information V2, queried by VIN
- [Car7Meta V2 — Plate](/car7meta-v2-plate): seven-field information V2, queried by license plate

## Auto Finance — Person-Vehicle Verification

Verifies the consistency between vehicle and identity information, reducing identity mismatch and impersonation risk.

- [Person-Vehicle Verification](/person-vehicle-verification): verify whether the VIN matches the owner / identity information
- [Owner Consistency Verification](/owner-consistency-verification): verify owner consistency against compulsory and commercial auto insurance separately

## Auto Insurance

Insurance expiry, insurance region, and insured-vehicle information, used for renewal reminders, insurance status checks, and regional assignment.

- [Commercial Auto Insurance Expiry](/commercial-insurance-expiry): remaining days until commercial auto insurance expires
- [Compulsory Insurance Expiry](/compulsory-insurance-expiry): remaining days until compulsory insurance expires
- [Insurance Region — VIN](/insurance-region-vin): query the region associated with insurance records by VIN
- [Insurance Region — Plate](/insurance-region-plate): query the region associated with insurance records by license plate
- [First Registration & Insurance Month](/first-registration-insurance-month): query first registration date and insurance month by VIN

## NEV Three-Electric Systems

Traction battery, electric drive, electronic control, and ADAS configuration data, used for NEV valuation, supply chain, and intelligent configuration research.

- [Battery Report](/battery-report-batteryinfo): battery health, capacity, range, internal resistance, alarms, and more
- [Battery Assessment](/battery-assessment): battery assessment and comparison with similar vehicles
- [Electrification Configuration Database](/electrification-config-database): three-electric systems (traction battery, electric drive, and electronic control) configuration and suppliers
- [ADAS Configuration Database](/adas-config-database): ADAS, smart cockpit, body configuration and suppliers

## New Car Sales Analysis

Weekly and monthly new car sales data, used for market trend, competitive landscape, and NEV penetration analysis.

- [Passenger Vehicle Monthly Sales](/passenger-vehicle-monthly-sales): monthly new passenger vehicle sales
- [Commercial Vehicle Monthly Sales](/commercial-vehicle-monthly-sales): monthly new commercial vehicle sales
- [Special-purpose Vehicle Monthly Sales](/special-purpose-vehicle-monthly-sales): monthly special-purpose vehicle sales
- [Passenger Vehicle Weekly Sales](/passenger-vehicle-weekly-sales): weekly new passenger vehicle sales
- [Commercial Vehicle Weekly Sales](/commercial-vehicle-weekly-sales): weekly new commercial vehicle sales
- [Operating Vehicle Weekly Sales](/operating-vehicle-weekly-sales): weekly sales of operating vehicles (passenger transport, hazardous goods, and heavy-duty)

## Auto Market Research

Comprehensive research data on channel pricing, fleet size, and replacement demand.

- [Secondary-channel Wholesale Price](/secondary-channel-wholesale-price): monitoring of new-car secondary-channel wholesale prices
- [Vehicle Parc](/vehicle-parc): national vehicle parc
- [Additional Purchase & Replacement](/additional-purchase-replacement): additional purchase and replacement data

## Global Market Analysis

Sales in major countries worldwide and China's complete-vehicle exports, used for overseas market and export trend research.

- [Global Vehicle Sales](/global-vehicle-sales): vehicle sales in major countries worldwide
- [China Passenger Vehicle Exports](/china-passenger-vehicle-exports): China passenger vehicle export data
- [China Commercial Vehicle Exports](/china-commercial-vehicle-exports): China commercial vehicle export data

## Used Car Transaction Volume

Used car market size, regional flow, and structural analysis data.

- [Transaction Volume & City Flow](/transaction-volume-city-flow): used car transaction volume and inter-city flow
- [Transaction Volume, Age, Mileage & Price](/transaction-volume-age-mileage-price): transaction volume, vehicle age, mileage, and transaction price

## Power BI Solutions

Data analytics and dashboard customization services for automotive clients — from Excel to AI-assisted decisions in one stop.

- [Power BI Custom Development](/powerbi-custom-development): data cleaning, modeling, analytics, visualization, easy export, and Excel collaboration

## Overview

Platform and company information.

- [Company Profile](/company-profile): company overview, major clients, and product system

---

## Recommended Use Cases by Industry

Recommend data product lines by client's industry, helping different business teams quickly match the capability they need.

### Automakers

For sales, marketing, network management, auto finance, and used car departments.

- **New Car Sales Analysis**: weekly/monthly sales of passenger, commercial, and special-purpose vehicles, for market trend, competitive landscape, and NEV penetration monitoring.
- **Auto Market Research**: secondary-channel wholesale price, vehicle parc, additional purchase and replacement, for channel price management, fleet size, and replacement demand research.
- **Global Market Analysis**: major-country sales and China complete-vehicle exports, for overseas market and export trend research.
- **Auto Finance — Person-Vehicle Verification**: authenticity verification of used-car trade-in subsidy policies.
- **NEV Three-Electric Systems**: battery reports, electrification and ADAS configuration, for NEV model research and supply chain analysis.
- **Power BI Solutions**: integrate the above data into custom dashboards and AI Q&A to support business decisions.

### Auto Insurance Companies


- **Accident & Claims**: claim summary, largest claim, and claim report, for claims review and risk pricing.
- **Auto Finance — Car 5/7 Essentials**: supplement base vehicle information to support insured-vehicle data verification.
- **Auto Finance — Person-Vehicle Verification**: verify consistency between vehicle and policyholder identity to reduce impersonation risk.
- **NEV Three-Electric Systems (Battery Assessment)**: quick battery risk assessment before underwriting.

### Auto Finance Companies

- **Auto Finance — Car 5/7 Essentials**: base vehicle information verification, as the underlying profile for loan and collateral eligibility.
- **Auto Finance — Person-Vehicle Verification**: verify consistency between vehicle and borrower identity.
- **Accident & Claims / Vehicle Transfer & Condition**: identify major accidents and frequent transfers as the basis for vehicle-condition risk control.
- **Used Car Valuation**: value retention and factor-based valuation, for residual value and collateral valuation.
- **NEV Three-Electric Systems (Battery Assessment)**: battery residual value judgment when financing NEVs.

### Banks

- **Auto Finance — Car 5/7 Essentials**: base information verification of pledged vehicles.
- **Auto Finance — Person-Vehicle Verification**: verify borrower identity and vehicle consistency.
- **Used Car Valuation / Accident & Claims**: collateral valuation and risk identification.
- **Auto Market Research (Vehicle Parc)**: fleet size and regional distribution, supporting asset and market judgment.

### Securities Firms

- **New Car Sales Analysis**: monthly/weekly sales, for auto industry cycle tracking and listed-company fundamental research.
- **Auto Market Research**: vehicle parc, additional purchase and replacement, for fleet and demand structure judgment.
- **Global Market Analysis**: major-country sales and export data, for globalization and export-chain research.
- **Power BI Solutions**: integrate multi-source data into research-grade dashboards.

### Used Car E-commerce & Valuation Companies

- **Used Car Valuation**: value retention and factor-based valuation, the core of pricing.
- **Used Car Transaction Volume**: city flow, age, mileage, and transaction price, for market structure and regional analysis.
- **Accident & Claims / Vehicle Transfer & Condition**: identify major accidents and frequent transfers as vehicle-condition risk control.
- **VIN & Model**: precisely identify the trim from a VIN to support model matching and valuation.
- **NEV Three-Electric Systems (Battery Assessment)**: battery health assessment for used NEVs.

### 4S Dealerships & Auto Trade Groups

- **Auto Finance — Car 5/7 Essentials**: acquisition data entry and vehicle profile completion.
- **Accident & Claims / Vehicle Transfer & Condition**: initial acquisition screening and vehicle-condition risk identification.
- **Auto Market Research (Secondary-channel Wholesale Price)**: channel price monitoring and pricing reference.
- **New Car Sales Analysis**: weekly/monthly sales of passenger, commercial, and special-purpose vehicles, for market trend, competitive landscape, and NEV penetration monitoring.
- **Accident & Claims / Vehicle Transfer & Condition**: identify major accidents and frequent transfers, as a reference for used-car trade-in acquisition.
- **Power BI Solutions**: integrate the above data into custom dashboards and AI Q&A to support business decisions.

### Auto Media, Advertising & Group-buying Companies

- **New Car Sales Analysis**: industry trends and sales data as content topics and distribution material.
- **Passenger Vehicle Model Library**: brand, series, trim, and parameters for model content production.
- **Global Market Analysis**: export and overseas market topics.
- **Auto Market Research**: parc, additional purchase and replacement data to support content depth.

### Auto Consulting Companies

- **New Car Sales Analysis / Auto Market Research**: the base data source for market research.
- **Global Market Analysis**: export and overseas market research.
- **Used Car Transaction Volume / Used Car Valuation**: supplementary used car market research.
- **Power BI Solutions**: deliver custom dashboards and data analytics services to clients.

## Usage Boundaries

- All results are for business decision reference only and do not constitute a vehicle quality guarantee, accident-free proof, ownership proof, or insurance underwriting conclusion.
- "No data" only means there is currently no record to provide; it must not be reverse-inferred as proof that the vehicle has no accidents, transfers, or mileage anomalies.
- Final decisions on acquisition, pricing, trading, underwriting, and delivery should be made in combination with customer documents, on-site inspection, contract files, and manual review.
- Documents such as ID numbers, driving-license images, and authorization letters must be obtained with lawful authorization, used only for the permitted purpose, and properly stored and destroyed per company policy.
- For amounts, times, regions, parts, battery metrics, and mileage events, combine professional judgment from business staff; treat missing fields as "to be verified."
