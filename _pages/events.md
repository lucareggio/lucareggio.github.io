---
title: "Luca Reggio - Events"
layout: textlay
excerpt: "Events"
sitemap: false
permalink: /events
---

# Events

## Upcoming events

{% for event in site.data.eventlist %}
{% if event.upcoming == 1 %}

  <a href="{{ event.url }}">{{ event.title }}</a> ({{ event.place }}, {{ event.date }})

{% endif %}
{% endfor %}

## Past events

{% for event in site.data.eventlist %}
{% if event.upcoming == 0 %}

  <a href="{{ event.url }}">{{ event.title }}</a> ({{ event.place }}, {{ event.date }})
  
{% endif %}  
{% endfor %}

<br />

