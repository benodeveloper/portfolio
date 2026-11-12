---
title = "Building a portfolio with Leptos and Axum"
excerpt = "Notes from shipping a server-rendered Rust app with hydration, Tailwind v4, and a small design system."
date = "2026-11-11"
tag = "Rust"
status = "Published"
---

This site is a small experiment in keeping the whole stack in Rust. Leptos renders the page on the server, Axum serves it, and the same component tree hydrates in the browser.

## Server first, hydrate second

The first request should already contain useful HTML. That means the page works before the WebAssembly bundle has finished downloading, and it stays readable if JavaScript fails entirely.

Hydration then takes over the same markup instead of replacing it. The important part is keeping the server and client trees identical, especially around browser-only state and SVG definitions.

## A small design system

The visual language lives in one Tailwind entry file. A handful of custom classes cover the parts that repeat: cards, chips, post rows, form fields, and the ink-style buttons.

Keeping those primitives small makes new pages cheap to build. The projects, blog, and contact pages all reuse the same pieces instead of inventing a new layout for every route.

## What I would do next

The next step is treating content as data: markdown files for writing, a small parser for frontmatter, and routes that render the parsed HTML. That keeps the authoring flow simple while the site stays a single Rust application.
