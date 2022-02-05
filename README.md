# awesome-iter

Gives iterables & iterators a facelift by allowing you to manipulate them like an array or stream of values.

```bash
npm install @aloreljs/awesome-iter
```


[![CI](https://github.com/Alorel/awesome-iter-js/workflows/Core/badge.svg?branch=master)](https://github.com/Alorel/awesome-iter-js/actions?query=branch%3Amaster+)
[![Coverage Status](https://coveralls.io/repos/github/Alorel/awesome-iter-js/badge.svg?branch=master)](https://coveralls.io/github/Alorel/awesome-iter-js)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Alorel/awesome-iter-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Alorel/awesome-iter-js/context:javascript)

-----

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Motivation](#motivation)
- [Alternatives](#alternatives)
- [API](#api)
  - [AwesomeIter](#awesomeiter)
    - [constructor()](#constructor)
    - [pipe()](#pipe)
    - [consume()](#consume)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Motivation

Arrays have useful functions, iterables don't. While you could just transform an iterable into an array, that results
in multiple iterations:

```typescript
const someSet: Set<string> = getSomeSet();
const uppercased: Set<string> = new Set(
    [...someSet] // first full iteration
        .filter(str => str !== 'foo') // second full iteration
        .map(str => str.toUpperCase()) // third, partial iteration
); // fourth partial iteration to construct the Set
```

This library allows you to work with iterables directly:

```typescript
import {AwesomeIter} from '@aloreljs/awesome-iter';
import {concat, filter, map} from '@aloreljs/awesome-iter/pipes';
import {toSet} from '@aloreljs/awesome-iter/consumers';

const someSet: Set<string> = getSomeSet();
const someMap: Map<number, string> = getSomeMap();
const someArray: string[] = getSomeArray();

// Only 1 iteration over someSet, someMap & someArray
const uppercasedSet: Set<string> = new AwesomeIter(someSet)
    .pipe(
        concat(someMap.values(), someArray),
        filter(str => str !== 'foo'),
        map(str => str.toUpperCase()) // Only gets called `length - numberOfFoos` times
    )
    .collect(toSet()); // Set is populated as values get yielded
```

# Alternatives

- For any async data just use [Rxjs](https://www.npmjs.com/package/rxjs) - it's awesome & it has more functionality.
- I'm unaware of similar libraries for synchronous iterables & iterators. This one is very lean & tree-shakeable!

# API

## AwesomeIter

### constructor()

Just pass an `Iterable` or `Iterator` and `AwesomeIter` will be able to start managing it.

### pipe()

Pipes manipulate the source `Iterable` or `Iterator` in some way - filter results, map them to different values etc.
Each pipe has documentation & examples written for it in the
[projects/awesome-iter/pipes](https://github.com/Alorel/awesome-iter-js/tree/master/projects/awesome-iter/pipes)
directory and is imported from `@aloreljs/awesome-iter/pipes`, e.g.

```typescript
import {filter} from '@aloreljs/awesome-iter/pipes';
```

The current list of pipes is as follows:

- `chunk`
- `concat`
- `distinct`
- `filter`
- `map`
- `sequentiallyDistinct`
- `skip`
- `take`
- `tap`

### consume()

Consumers consume the source `Iterable` or `Iterator` & produce a single result - these include functions like those
in `Array.prototype` that don't necessarily return an array & functions for collecting the source into some JS
collection. Each consumer has documentation & examples written for it in the
[projects/awesome-iter/consumers](https://github.com/Alorel/awesome-iter-js/tree/master/projects/awesome-iter/consumers)
directory and is imported from `@aloreljs/awesome-iter/consumers`, e.g.

```typescript
import {some} from '@aloreljs/awesome-iter/consumers';
```

The current list of consumers is as follows:

- `count`
- `find`
- `first`
- `includes`
- `last`
- `reduce`
- `some`
- `split`
- `toArray`
- `toMap`
- `toObject`
- `toSet`
