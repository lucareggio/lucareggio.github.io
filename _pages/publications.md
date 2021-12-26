---
title: "Luca Reggio - Publications"
layout: gridlay
excerpt: "Luca Reggio - Publications."
sitemap: false
permalink: /publications/
---


# Publications


## Preprints

{% for publi in site.data.publist %}
{% if publi.published == 0 and publi.submitted == 0 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  Extended version of our ICALP'21 paper. Preprint available on <a href="{{ publi.preprinturl }}">{{ publi.preprintdisplay }}</a>

{% endif %}
{% endfor %}


## Submitted

{% for publi in site.data.publist %}
{% if publi.published == 0 and publi.submitted == 1 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  Preprint available on <a href="{{ publi.preprinturl }}">{{ publi.preprintdisplay }}</a>

{% endif %}
{% endfor %}

## Published papers

{% for publi in site.data.publist %}
{% if publi.published == 1 and publi.preprintavailable == 1 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  <a href="{{ publi.publishedurl }}">{{ publi.publisheddisplay }}</a> <br />
  Preprint available on <a href="{{ publi.preprinturl }}">{{ publi.preprintdisplay }}</a>
  
{% endif %}  

{% if publi.published == 1 and publi.preprintavailable == 0 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  <a href="{{ publi.publishedurl }}">{{ publi.publisheddisplay }}</a>
  
{% endif %}
{% endfor %}

## Theses

<em>Luca Reggio</em>, <b>Quantifiers and duality</b> <br />
  PhD thesis, Sorbonne Paris Cité, 2018, available on [HAL](https://hal.archives-ouvertes.fr/tel-02459132/) (a local copy is hosted [here]({{ site.baseurl }}/downloads/Quantifiers-and-duality.pdf))<br />
  
  <em>Luca Reggio</em>, <b>Stone duality above dimension zero</b> <br />
  Master's thesis, Università degli Studi di Milano, 2015, available at [this link]({{ site.baseurl }}/downloads/Stone-duality-above-dimension-zero.pdf) <br /><br />