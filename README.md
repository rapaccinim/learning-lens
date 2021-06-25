# Learning functional programming Lens

![Lens picture](img/lens-learning-marco-rapaccini.jpg)

Image by [Gerd Altmann](https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=490806) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=490806).

## Introduction
### A bit of context
In one of the project I'm working on there's a massive use of Lens concepts.

I'm new to functional programming and Lenses, so I want to track the learning journey about them.

This repo probably will be populated with JS/TS examples and I will link other people's pages, articles, repos, etc.

### The basics
In functional programming the *optics* are a very useful tool.

A Lens is a first-class reference to a *subset* of data type/structure.

Lenses are based on [Twan van Laarhoven's polymorphic function references](https://www.twanvl.nl/blog/haskell/cps-functional-references), implemented initially in [Haskell](https://www.haskell.org/):
> *[...] functional references (also called lenses) are like a pointer into a field of some data structure. The value of this field can be extracted and modified*.

In JavaScript, Lens features are already in the [Ramda](https://ramdajs.com/) functional library.

## In a nutshell
Basically Lenses are functional:
* getters that retrieve values from a state object without worring about the object structure
* setters that do not mutate the state but its [shallow copy](https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c)

## Why use Lenses
Lenses are a better way to access values of simple and complex data structures.

For example, consider a use case with the following object:

```
const inputData = {
    name: "John",
    surname: "Wayne",
    address: {
        number: "12",
        street: "Farmers Street",
        postcode: "XYZ ZYX",
        town: "New York",

    },
    nationality: "American"
}
```
It's easy to get the `street`:

`const streetName = inputData.address.street`

But if we want to use the same data for a new variable changing just the `street` value, it becomes more complex: 

```
const newData = {
    ...inputData,
    address: {
        ...inputData.address,
        street: "Actors Street"
    }
}
```
It's clear that accessing the values becomes more complex with *deeper* data structures.

So, Lens can help us to:
* access a specific *subset* of data (e.g. `street` from `newData`)
* combine multiple Lens (*composition*) to *look* deeper in a data structure

Quoting Phil Rice:
> *The idea behind lenses is that they are 'focused' on a small part of a big object*

## Composition 
Considering that Lenses are just functions, they can be composed.

As stated by Eric Elliot in [this inspiring article](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea):

> *No matter how you write software, you should compose it well*

It means that composing functions is not just a cool feature that developers can use with Lens, but that understanding composition is fundamental for every developer.

A Lens composition starts with the less specific function on the left and ends with the most specific on the right.

## Examples
Example using Ramda library.


## Resources
Some useful links:
* [Lenses](https://medium.com/javascript-scene/lenses-b85976cb0534)
* [Introduction into Lenses in JS](https://medium.com/javascript-inside/an-introduction-into-lenses-in-javascript-e494948d1ea5)
* [Introduction to optics: lenses and prisms](https://medium.com/@gcanti/introduction-to-optics-lenses-and-prisms-3230e73bfcfe)
* [Functional lenses in JS](https://www.linkedin.com/pulse/functional-lenses-javascript-vladim%C3%ADr-gorej/)
* Phil Rice's [repo](https://github.com/phil-rice/ts-lens) about Lens
* Phil Rice's [npm lens](https://www.npmjs.com/package/@phil-rice/lens)