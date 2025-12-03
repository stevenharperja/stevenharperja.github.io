---
title: 'Parallax Shader'
description: "Optical illusion for images inside of 3d models"
image:
    url: '/shaders/ball.png'
    alt: 'icon'
video: '2UFp2tf4NpM'
worksImage1:
    url: ''
    alt: ''
worksImage2:
    url: ''
    alt: ''
platform: Unity, Tabletop Simulator
stack: HLSL, Unity
website: https://steamcommunity.com/sharedfiles/filedetails/?id=3616865970
github: https://github.com/stevenharperja/Twilight-Imperium-3d-Hex/blob/master/Assets/Sinnoh%20Ball/Shaders/BasicParallax.shader
date: December 2nd 2025
---
A shader which implements Parallax depth using multiple images.

This technique is similar to but different from a stencil shader technique, where objects are rendered invisible unless viewed through a window of a mesh, like a magic magnifying glass.

Instead It creates the illusion that there are images inside of a 3d model, without having to render those images as actual objects in the game.
This allows for increased performance on the graphics engine, as well as increased ease of use for swapping and editing the properties of the images.

