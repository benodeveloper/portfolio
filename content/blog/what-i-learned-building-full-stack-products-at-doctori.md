---
title = "What I learned building full-stack products at Doctori"
excerpt = "Practical lessons on APIs, data modeling, and keeping UI state honest as a product grows."
date = "2026-10-22"
tag = "Product"
status = "Published"
---

Most of the hard parts of a product are not in the first version. They show up when the data model has to support a second workflow, or when a screen needs to reflect a state that did not exist during the prototype.

## Keep the API boring

A predictable API is easier to debug than a clever one. Consistent naming, explicit validation, and responses that match the UI's needs save time on both sides of the request.

## Model states before screens

It is tempting to start with the screen and add state as the UI needs it. A better order is to list the states first: empty, loading, success, partial failure, and permission denied. The screens become simpler once those cases have names.

## Ship the feedback loop

Small deployments, clear logs, and a short path from report to reproduction are worth more than a large release process. The faster a team can see what happened, the faster it can fix it.

## Leave room for the next person

Code is read more often than it is written. Clear names, short functions, and documentation for the non-obvious decisions make the next change less expensive.
