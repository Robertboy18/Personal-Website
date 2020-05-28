---
title: Contact Form
permalink: /contact/
layout: page
excerpt: 
comments: false
---
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <style>
      form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1.5em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: 120px;
  text-align: justify;
}

input, 
textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 400px;
  box-sizing: border-box;
  padding: 10px 15px;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus, 
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;

  /* Provide space to type some text */
  height: 5em;
  width: 25em;
}

.button {
  /* Align buttons with the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: 13em;
}
    </style>
  </head>
  <body>
<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </body>
  </html>
