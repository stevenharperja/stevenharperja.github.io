---
title: 'RAG Database'
description: "Retrieval Augmented Generation using OLLAMA"
image:
    url: '/RAG/hello.png'
    alt: 'icon'
video: ''
worksImage1:
    url: ''
    alt: ''
worksImage2:
    url: ''
    alt: ''
platform: ''
stack: Python, Ollama
website: ''
github: "https://github.com/stevenharperja/MTG-RAG/tree/main"
date: April 2026
---
This project implements a simple LLM / Vector - based database retrieval system. The data used is Magic the Gathering Cards.<br>
<br>
This is a partial implementation of a RAG system. The model generates text, then uses that to find text in the database.<br>
A full RAG system does the same, it finds text in the database, but afterwards it has the model summarize the found documents.<br>
<br>
Eventually I would like to expand on this by training a language model to generate magic the gathering decks.<br>
The mechanism would be to have the model hallucinate cards, then use the vector database to find the closest, real existing card to use.<br>
<br>
It is implemented primarily with Ollama for both model embeddings and text generation.