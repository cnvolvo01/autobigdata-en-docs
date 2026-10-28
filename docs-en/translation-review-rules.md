---
title: English Translation Review Rules
is_active: no
---

# English Translation Review Rules

## Source of truth

The Chinese page in `docs/` is the business and API semantic source of truth. English pages may improve readability for U.S. readers, but they must not change endpoint behavior, parameter constraints, response semantics, error codes, or usage boundaries.

## Priority levels

- **P1**: API contract, publication status, or data-semantics mismatch.
- **P2**: Automotive/data terminology, omitted constraint, residual Chinese prose, or broken link.
- **P3**: American-English grammar, punctuation, style, or readability issue found during human review.

## Review order

1. Confirm the Chinese/English mapping and active status.
2. Compare endpoint, request, response, examples, error codes, and limitations.
3. Apply `translation-glossary.yml` and record accepted exceptions there.
4. Edit for standard American English and sentence-case headings.
5. Have an automotive-data reviewer recheck insurance, used-car, finance, NEV, and sales-caliber terminology.
6. Run `pnpm check:en-translation`, `pnpm build:en`, and `git diff --check`.

## Contract preservation

Keep HTTP methods, endpoint paths, API field names, error codes, enum values, sample identifiers, and response shapes exactly as defined by the Chinese source. Chinese company, brand, city, and sample values may remain when they are data values or proper nouns; untranslated Chinese prose must be reported.

## Required review record

Each finding records priority, file, line, Chinese source or concept, current English, recommended English, reason, API-contract impact, and review status. The generated report presents these fields as hierarchical Chinese headings rather than a wide table so that each issue can be reviewed independently.
