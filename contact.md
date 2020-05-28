---
title: Contact Form
permalink: /contact/
layout: page
excerpt: 
comments: false
---
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Robert: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>robujsph2001@gmail.com: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
