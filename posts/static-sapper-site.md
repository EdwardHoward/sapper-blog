---
title: Building a static website with Sapper [WIP]
subtitle: How I made this blog
date: 2019-09-28T07:53:46.173+00:00
tags:
- sapper
- svelte
- forestry.io
- s3
- lambda

---
## Sapper + Svelte

* generate project

`npx degit "sveltejs/sapper-template#webpack" blog`

* server
  * polka
  * express
* client
* template
* routes
  * blog
  * posts
  * markdown
  * code highlighting
* static export

## S3 + Cloudfront

* create s3 bucket
  * allow static hosting
  * index.html, 404.html
* domain name
* ssl certificate
* cloudfront
  * need full s3 url with region
* serving from non-root path
    
## Forestry

* static admin
* s3 image hosting

## Generate Thumbnails
* s3 event
* lambda function
	* sharp

## GitHub actions

* node
* s3 sync
* cloudfront invalidation