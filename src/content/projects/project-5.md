---
title: 'Wonder Trade Mod'
description: "Trading Pokemon across board game tables"
image:
    url: '/wonder trade/image.jpg'
    alt: 'icon'
video: '98wk6_kP8fo'
worksImage1:
    url: ''
    alt: ''
worksImage2:
    url: ''
    alt: ''
platform: Tabletop Simulator
stack: Lua, Python, Flask
website: https://steamcommunity.com/sharedfiles/filedetails/?id=3406185984
github: https://github.com/stevenharperja/LoS-Wonder-Trade
date: January 12th 2025
---
This is a mod for the game Tabletop Simulator, a video game which allows you to play board games online with friends.
It is an addon for an existing mod called Legends of Sinnoh, a Pokemon game on Tabletop Sim.

This mod implements "wonder trading" using a web server. Allowing users to randomly trade Pokémon with users at other tables.

I implemented it in Tabletop Simulator using two parts. One piece is a client that converts Tabletop Simulator game objects into json and sends them off to a web server. The web server then stores the json, and randomly selects a stored json file to send back. Then the client loads these in as game objects.

To use, a user places their Pokémon onto a panel and presses a button.
It gets sent off to the server in exchange for a Pokémon that someone else sent earlier.
