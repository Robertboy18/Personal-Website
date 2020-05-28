---
title: Contact Form
permalink: /contact/
layout: page
excerpt: 
comments: false
---
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Enquiry Type: <select name="role[]" multiple>
      <option value="About me">About me</option>
      <option value="Site">Website</option>
      <option value="Updates">Life Updates</option>
      <option value="General">General</option>
      <option value="Business">Business</option>
      <option value="Talk">Talk to me</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
