---
title: "Luca Reggio - Publications"
layout: gridlay
excerpt: "Luca Reggio -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

<!--## Highlights

(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=TqxYWZsAAAAJ), [ResearcherID](https://www.researcherid.com/rid/D-7763-2012))

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>
-->

## Submitted

{% for publi in site.data.publist %}
{% if publi.published == 0 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  Preprint available on <a href="{{ publi.link.preprinturl }}">{{ publi.link.preprintdisplay }}</a>

{% endif %}
{% endfor %}

## Published papers

{% for publi in site.data.publist %}
{% if publi.published == 1 and publi.preprintavailable == 1 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  <a href="{{ publi.link.publishedurl }}">{{ publi.link.publisheddisplay }}</a>
  Preprint available on <a href="{{ publi.link.preprinturl }}">{{ publi.link.preprintdisplay }}</a>
  
{% endif %}  

{% if publi.published == 1 and publi.preprinturl == 0 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  <a href="{{ publi.link.publishedurl }}">{{ publi.link.publisheddisplay }}</a>
  
{% endif %}
{% endfor %}

## Theses

{% for publi in site.data.publist %}
{% if publi.thesis == 1 %}

  <em>{{ publi.authors }}</em>, <b>{{ publi.title }}</b> <br />
  <a href="{{ publi.link.preprinturl }}">{{ publi.link.preprintdisplay }}</a>

{% endif %}
{% endfor %}

