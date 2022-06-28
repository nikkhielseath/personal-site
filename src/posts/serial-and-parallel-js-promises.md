---
slug: "/blog/serial-and-parallel-js-promises"
date: "2022-06-28"
title: "Serial and Parallel JS Promises"
subtitle: "Does Promise.all make operations be run in parallel?"
---

A week ago, I was looking at a bug. Some operations were being performed that
resulted in the change of state of the IndexedDB storage.

(I can't share all the details so please, bear with me)

For one of the operations, a piece of data was being calculated
again and this should not have been happening as this data was already
calculated as a part of another operation and any _following_ operations should
have referred to this pre-calculated data.

The way these operations were being performed was not exactly apparent and clear
as a list of these operations was basically being passed on to another method
which was using some deep-nested logic to execute them.

Turns out that `Promise.all` was being used to resolve the results from all the
operations in the list.

## Difference between Serial and Parallel

In my mind, I had formed a general model of the process: Operation 1 is
performed and then Operation 2 is performed and so on.
This model where operations happen in a sequence is called `Serial` and if I am
being honest, this is how I usually think that things are done.

Turns out that there is another model: Operation 1 is being performed and
simultaneously, Operation 2 is being performed. There is no exact order/relation
between the end of Operation 1 and start of Operation 2.
This model is called `Parallel` and this was one of the reasons behind the bug I
was looking into.

## What does Promise.all do?

```typescript
const bakeCake = (): Promise<CakeDetails> => {// something};
const eatCake = (): Promise<EatenCakeDetails> => {// something};


Promise.all([bakeCake(), eatCake()]).then((result) => {
	console.warn('Result', result);
});
```

In life, you first bake the cake and then eat it.

But, using the above code example you can bake and eat the cake simultaneously (assuming
that the eatCake fallbacks to baking a cake in case one doesn't already exists).

### What is it good for?

It is basically a way to perform **concurrent** operations in JS.

**It should only be used to perform independent asynchronous operations.**

Based on the above statement, the `cake` example is an incorrect usage of
Promise.all and a similar mistake was the reason behind the bug I was looking
at.

### Is it a way to perform operations parallelly?

No. It is not.
It may look like that the operations are being performed parallelly but, they
are not. Instead, the right term for this behavior is _Concurrent_.

The _thing_ responsible for executing a piece of JS is single-threaded and
therefore, only a single operation can occupy it at a time.

And in the case of `Promise.all`, this _thing_ is actually bouncing between
multiple operations by starting an operation, suspending it and then, starting
of another one, suspending it, resuming the previous one and so on.
Therefore, we can't call it `parallel` because, at a give time only single
operation is being _worked on_.

(NB: I am using simplified names to prevent confusion caused by terminology)

### Does it have a performance impact?

Is Promise.all faster then waiting for every promise to be resolved before
proceeding on to the next one?
I am not so sure. I am yet to find a definitive answer and I shall
share my thoughts on the same later.

## References

This post is based on what I have learnt after taking care of that bug and
reading other articles on the internet.

- [Javascript is single-threaded? You’re kidding
  me](https://codeburst.io/is-javascript-single-threaded-youre-kidding-me-80b11d74f4e5)
- [Parallel vs
  Concurrent](https://bytearcher.com/articles/parallel-vs-concurrent/)
- [Promise: race, all,
  allSettled](https://blog.logrocket.com/javascript-promises-race-all-allsettled-then/)
