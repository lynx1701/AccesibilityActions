# A11Y Standard Accessibility Github Action

A github action that runs a pa11y test for missing DOM attributes, and generates a lighthouse CI report.
Supports single links, multi links seperated by comma and sitemap links.

Currently triggered as is.

## TODOs

- check the workflow on large sitemap

## Bugs to fix

- lighthouse ci is not giving stable results on the same, working links.

## Issues to resolve

- Large sitemaps could result in lighthouse CI running very long times and consuming CPU.
