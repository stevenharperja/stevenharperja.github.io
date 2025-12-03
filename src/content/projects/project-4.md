---
title: 'Stencil Shader'
description: "Hiding 3d models behind other 3d models"
image:
    url: '/shaders/mecatol.png'
    alt: 'icon'
video: 'XF3SeLb4Gbw'
worksImage1:
    url: ''
    alt: ''
worksImage2:
    url: ''
    alt: ''
platform: Unity, Tabletop Simulator
stack: HLSL, Unity
website: N/A
github: https://github.com/stevenharperja/Twilight-Imperium-3d-Hex/tree/master/Assets/TI%20Tiles/mecatol%20Stencil/Materials
---
A shader which hides objects by writing to the stencil buffer. It creates the illusion that there are objects "inside" of another object. In actuality what it is doing is making those objects invisible unless they are viewed through the object they are hiding inside. So the object is a bit like a window, but only one side of the object is a window.

This technique is similar to but different from a parallax depth shader technique. In parallax, textures are rendered on an object, but with some fancy view-angle math to make them look like they are inside the object. 

This technique can be better than the parallax technique in cases where you want to render full 3d objects while appling lighting to them.
