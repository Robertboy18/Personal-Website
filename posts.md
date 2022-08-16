---
title: Archive
permalink: /posts/
layout: page
excerpt: All posts I've made.
comments: false
---

<div class="search-article">
  <label for="search-input" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(128,128,128,0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  </label>
  <input type="search" id="search-input" placeholder="Search here" aria-label="Search">
</div>

<ul id="search-results"></ul>

{% for post in site.posts%}
<article class="post-item">
  <span class="post-item-date">{{ post.date | date: "%b %d, %Y" }}</span>
  <h3 class="post-item-title">
    <a href="{{ post.url }}">{{ post.title | escape }}</a>
  </h3>
</article>
{% endfor %}
