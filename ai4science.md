---
title: AI4Science + Mathematics
permalink: /ai4science/
layout: page
excerpt: ai4science
---
<style>
  .centered-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .small-image {
    width: 50%;
    height: auto;
  }
</style>

<div style="display: flex;">
  <img src="https://www.robertj1.com/assets/img/operator.jpg" vspace="0"  hspace="0" style="flex: 1;" class="small-image">
  <img src="https://www.robertj1.com/assets/img/lean.jpg" vspace="0"  hspace="0" style="flex: 1;" class="small-image">
</div>

<html>
<head>
<style>
  .collapsible {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 12px;
    width: 100%;
    border: none;
    text-align: left;
    font-size: 16px;
    transition: background-color 0.1s;
    margin-top: 1em;
  }
  .active, .collapsible:hover {
    background-color: #ddd;
  }
  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f9f9f9;
    margin-bottom: 1em;
  }
</style>
</head>
<body>

<button class="collapsible">AI4Math</button>
<div class="content">
  <p>Our AI4Math initiative blends formal proof with large‐scale learning:</p>
  <ul>
    <li><strong>Lean Copilot</strong>: integrating LLMs to autocomplete tactics and suggest proof steps in Lean.</li>
    <li><strong>Lean Agent</strong>: a lifelong learning framework for theorem proving (Kumarappan et al., ICLR 2025).</li>
    <li><strong>Lean Dojo</strong>: interactive dashboards for visualizing proof search and tactic performance.</li>
    <li><strong>Lean Progress</strong>: first of a kind reward model that predicts how much progress you can make on a Lean proof.</li>
  </ul>
</div>

<button class="collapsible">AI4Science</button>
<div class="content">
  <p>Key neural operator projects from our group:</p>
  <ul>
    <li><strong>Neural Operator</strong>: learning mappings between function spaces (Kovachki et al., 2021).</li>
    <li><strong>Fourier Neural Operator</strong>: spectral methods for parametric PDEs (Li et al., 2020).</li>
    <li><strong>Physics‑informed NO</strong>: embedding physical constraints into operator learning (Li et al., 2021).</li>
    <li><strong>CoDA‑NO</strong>: Pretraining codomain attention neural operators for multiphysics PDEs (Rahman et al., NeurIPS 2024).</li>
  </ul>
</div>

<script>

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>

</body>
</html>
