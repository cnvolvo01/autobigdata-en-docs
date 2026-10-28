---
title: Car7Meta V2 (License Plate)
category: Auto Finance — Car 5 Essentials
order: 1022
docType: interface
is_active: yes
description: "Supplement model, engine, and first registration date via VIN or license plate to simplify data entry for auto loans and owner loans."
---
# Car7Meta V2 (License Plate) Query

## Use Cases


- **Finance vehicle profiling**: supplement model, engine, and first registration date via VIN or license plate to simplify data entry for auto pledge loans and owner loans.
- **Auto loan and financial lease risk control**: verify the base data of pledged vehicles to assist credit and asset management.
- **Insurance and after-sales service**: provide model basis for quoting, underwriting, repair, and parts matching.
- **Used car transaction verification**: quickly complete vehicle data during acquisition, replacement, and delivery.

## Endpoint

`POST /api/v1/car7MetaByPlateNumV2`

See the cooperation email notification for the endpoint.

Request headers: `Authorization: Bearer <ACCESS_TOKEN>`, `Content-Type: application/json`.

## Request Parameters

### Request

```json
{"plateNum":"京A00000","plateType":"02"}
```

`plateNum` is a complete mainland China vehicle plate; the service normalizes common separators and uppercases. `plateType` is required and is a 1-to-32-character plate-type code; ordinary plates usually pass `02` per business convention.

```bash
curl -X POST \
  "https://<API_HOST>/api/v1/car7MetaByPlateNumV2" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"plateNum":"京A00000","plateType":"02"}'
```

## Response Fields

### Common Response Fields

| Field | Type | Meaning |
| --- | --- | --- |
| code | string | Business status code; `0000` success, `0001` no data, `4001` parameter error, `5001` service failure, `5002` supplier token failure. |
| message | string | Business processing result description. |
| data | object/null | Car5Meta or Car7Meta vehicle profile; null on no-data or failure. |
| request_id | string | Request trace ID. |

### `data` Fields

| Field | Car5Meta | Car7Meta | Meaning |
| --- | --- | --- | --- |
| vin | Yes | Yes | Vehicle identification number (VIN). |
| engineNum | Yes | Yes | Engine number; may be null when no data. |
| engineModel | Yes | Yes | Engine model; may be null when no data. |
| vehicleModel | Yes | Yes | Vehicle model; may be null when no data. |
| brand | Yes | Yes | Vehicle brand; may be null when no data. |
| firstRegistrationDate | Yes | Yes | First registration date; format subject to the actual value, may be null. |
| carUsage | No | Yes | Vehicle usage type; e.g., "非营运" (non-operational), "非营业个人" (non-business individual); passed through from the supplier, non-closed enum, may be null. |

V1 and V2 share the same response field structure; Car5Meta returns the first six fields, and Car7Meta additionally returns `carUsage`.

## Examples

### Success Response

```json
{"code":"0000","message":"成功","data":{"vin":"1HGBH41JXMN00****","engineNum":"EN123456","engineModel":"EA211","vehicleModel":"SVW71512","brand":"大众","firstRegistrationDate":"2020-01-01","carUsage":"非营运"},"request_id":"request-id"}
```

Car7Meta additionally returns `carUsage` (vehicle usage type) on top of the Car5Meta fields. Fields other than VIN may be `null`.
