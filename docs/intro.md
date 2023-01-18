---
sidebar_position: 1
sidebar_label: Introduction
---

# Introduction to Nestore


## What is this?

Nestore is state-management solution that uses event emitters and listeners to read from, write to
and listen to the store - a plain old javascript object - inside of the nestore object.

Much of the functionality and API is inspired, or *haunted*, by other similar state management solutions, like
`valtio`, `jotai`, `redux` and `zustand` - with `valtio` being the most similar. See the 
**[full comparison](/docs/api/comparison)** for more details.


## Why would you?

This project originally started as a simple key-value store that extended the base event emitter
to trigger UI updates within a Node.js CLI tool and centralize state logic. It quickly grew into 
a research experiment into the inner-workings of common state management solutions




## Should I use this?

The are many other state-management solutions that likely contain the features that will satisfy the 
requirements of any project - as well as being more mature, well-tested and backed by large communities
of developers and users. 

Check out the **[full comparison](/docs/api/comparison)** to see if this is the right choice for your project.