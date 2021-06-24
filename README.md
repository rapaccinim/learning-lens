# Learning functional programming Lens

## Introduction
In one of the project I'm working on there's a massive use of Lens concepts.
I'm new to functional programming and Lenses, so I want to track the learning journey about them.
This repo probably will be populated with JS/TS examples and I will link other people's pages, articles, repos, etc.

## Getting started
Some useful links:
* [Introduction into Lenses in JS](https://medium.com/javascript-inside/an-introduction-into-lenses-in-javascript-e494948d1ea5)
* [Introduction to optics: lenses and prisms](https://medium.com/@gcanti/introduction-to-optics-lenses-and-prisms-3230e73bfcfe)
* [Functional lenses in JS](https://www.linkedin.com/pulse/functional-lenses-javascript-vladim%C3%ADr-gorej/)
* Phil Rice's [repo](https://github.com/phil-rice/ts-lens) about Lens
* Phil Rice's [npm lens](https://www.npmjs.com/package/@phil-rice/lens)

## Basics
Lensese are based on [Twan van Laarhoven's polymorphic function references](https://www.twanvl.nl/blog/haskell/cps-functional-references), implemented mainly in [Haskell](https://www.haskell.org/) programming language:
> [...] functional references (also called lenses) are like a pointer into a field of some data structure. The value of this field can be extracted and modified.

In JavaScript, Lens features are already in the [Ramda](https://ramdajs.com/) functional library.

## In a nutshell
Basically Lenses are functional:
* getters that retrieve values from a state object without worring about the object structure
* setters that do not mutate the state but its [shallow copy](https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c)

## Composition 
Considering that Lenses are just functions, they can be composed.
A Lens composition starts with the most specific function on the left and ends with the less specific on the right.

