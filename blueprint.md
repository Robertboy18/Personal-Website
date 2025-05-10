---
title: Lean Blueprint
permalink: /blueprint/
layout: page
excerpt: Lean Projects Roadmap
comments: false
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/lean-styles.css">

<div class="lean-logo">
    <img src="{{ site.baseurl }}/assets/img/lean1.jpg" alt="Lean Logo">
</div>

<div class="view-toggle">
    <button id="btn-roadmap" class="active">Roadmap View</button>
    <button id="btn-library">Library View</button>
</div>

<div class="top-details" id="projectDetailsTop">
    <h2 id="projectTitleTop">Select a project to view details</h2>
    <div id="projectContentTop">
        <p>Click on any project in the roadmap or library to view its details, status, and progress.</p>
    </div>
    <div id="backButtonContainer" class="hidden">
        <button class="back-button" id="backButton">← Back to Overview</button>
    </div>
</div>

<div class="legend">
    <div class="legend-item">
        <div class="status-dot red"></div>
        <div>Not started</div>
    </div>
    <div class="legend-item">
        <div class="status-dot blue"></div>
        <div>In progress</div>
    </div>
    <div class="legend-item">
        <div class="status-dot green"></div>
        <div>Completed</div>
    </div>
</div>

<div id="roadmapView">
    <div class="roadmap-container">
        <div class="roadmap" id="roadmap">
            <!-- Projects will be inserted here by JavaScript -->
        </div>
    </div>
</div>

<div id="libraryView" class="hidden">
    <div class="library-view" id="library">
        <!-- Books will be inserted here by JavaScript -->
    </div>
</div>

<script src="{{ site.baseurl }}/assets/js/lean-projects.js"></script>