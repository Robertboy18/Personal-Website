---
title: Tags
permalink: /tags/
layout: page
excerpt: Sorted article by tags.
---
<!--
<script async src="https://cse.google.com/cse.js?cx=015769198441636655101:7inx-o2uuzy"></script>
<div class="gcse-search"></div>
-->
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-b13063fd-194b-41ac-a7f5-7c5932cf93f7"></div>


{% for tag in site.tags %} {% capture name %}{{ tag | first }}{% endcapture %}
<h4 class="post-header" id="{{ name | downcase | slugify }}">
  {{ name }}
</h4>
{% for post in site.tags[name] %}
<article class="posts">
  <span class="posts-date">{{ post.date | date: "%b %d" }}</span>
  <header class="posts-header">
    <h4 class="posts-title">
      <a href="{{ post.url }}">{{ post.title | escape }}</a>
    </h4>
  </header>
</article>
{% endfor %}
{% endfor %}
