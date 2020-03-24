# Corkboard

Launch a simple informational site in minutes and edit it with a plain text
editor on nearly any platform. Just unzip the files and host.

It was designed during the Coronavirus (COVID-19) Pandemic of 2020 in response
to people needing to communicate in various ways. In Utah we had an earthquake
during the pandemic which threatened basic infrastructure, such as power, water,
and internet.

Corkboard's data is stored in JSON format, a text format that can be edited
with a plain text editor.

This first version, the MVP, contains only hyperlinks to other resources.

A small community information system similar to Hacker News

## Goals

* A static site that can be hosted anywhere from GitHub to a laptop
* Maintainable with nothing but a text editor
* Compact size for slow connections
* Host without internet using just a WiFi router and any computer
* Installs itself or unzip and go

## Hosting on GitHub

You can easily host Corkboard as a static site on GitHub.

* Clone the project
* Set GitHub to host from the master branch

## Hosting with PHP

You can easily host Corkboard on a laptop by using PHP's built-in server.

* Find your IP address
* Switch to the directory containing Corkboard
* Run the PHP server `php -S {ip-address}:80`
