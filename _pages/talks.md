---
title: "Luca Reggio - Talks"
layout: textlay
excerpt: "Talks"
sitemap: false
permalink: /talks
---

# Talks

## Upcoming talks

{% for talk in site.data.talklist %}
{% if talk.upcoming == 1 and talk.venueurlavailable == 1 %}

  1. <b>{{ talk.title }}</b>, {{ talk.note }} <a href="{{ talk.venueurl }}">{{ talk.venuedisplay }}</a>, {{ talk.place }}, {{ talk.date }}

{% endif %}

{% if talk.upcoming == 1 and talk.venueurlavailable == 0 %}

1. <b>{{ talk.title }}</b>, {{ talk.note }} {{ talk.venuedisplay }}, {{ talk.place }}, {{ talk.date }}

{% endif %}

{% endfor %} 

## Past talks

{% for talk in site.data.talklist %}
{% if talk.upcoming == 0 and talk.venueurlavailable == 1 %}

  1. <b>{{ talk.title }}</b>, {{ talk.note }} <a href="{{ talk.venueurl }}">{{ talk.venuedisplay }}</a>, {{ talk.place }}, {{ talk.date }}

{% endif %}

{% if talk.upcoming == 0 and talk.venueurlavailable == 0 %}

1. <b>{{ talk.title }}</b>, {{ talk.note }} {{ talk.venuedisplay }}, {{ talk.place }}, {{ talk.date }}

{% endif %}

{% endfor %} 

<br />
