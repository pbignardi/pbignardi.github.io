---
layout: basicpage
title: Conferences and workshops
---

{% assign grouped_confs = site.data.conferences | group_by: "year" %}
{% for confgroup in grouped_confs %}
  #### {{ confgroup.name }}
  <ol>
    {% for conf in confgroup.items %}
      <li>
        <a href="{{ conf.link }}" target="_blank">{{ conf.name }}</a>,
        {{ conf.city }},
        {{ conf.startdate | date: "%d %b" }} ⇒ {{ conf.enddate | date: "%d %b" }},
        {{ conf.year }}
        {% if conf.extra != "" %}
          <br>
          {{ conf.extra }}
        {% endif %}
      </li>
    {% endfor %}
  </ol>
{% endfor %}
