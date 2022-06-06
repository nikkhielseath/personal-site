---
slug: "/blog/symbols-in-package-json"
date: "2022-06-06"
title: "Symbols in package.json"
subtitle: "What do ^ ~ < mean?"
---

Recently, I came across a dependency error. Basically, a package being used by a
project didn't have the correct version of a dependency listed as a peer.

```json
{
	// package that had the issue
	"peerDependencies": {
		"package-a": "^6.5.7"
	}
}

{
	// project that used the said package
	"dependencies": {
		"package-a": "~6.6.7"
	}
}
```

In this post I shall try to explain what symbols like `~ ^` and those numbers
mean?

## Talking about the numbers first

I intially found it a bit weird that there are two decimals in this version
string. But, now, I know better.
Each of those digits represents a change in the version. Depending upon the
position of the digit that was incremented, the change can be divided into:

- **Major** - A Breaking Change or a New feature
- **Minor** - A change that maintains backwards compatiblity
- **Patch** - A minor bug/error fix

Turns out that there is a whole set of rules defining what these digits are and
under what circumstances should and which digit be incremented. This rule set is
referred to as [Semantic Versioning](https://semver.org/).
So, for a package with version string `8.5.4`:

- 8 => Major Version
- 5 => Minor Version. Like: 5th revision of version 8
- 4 => Patch Version. Like: 4th revision of the 5th revision (of version 8)

And now if a typo was fixed then, the digit representing "patch" would be
incremented making the new version string `8.5.(4 + 1)` = `8.5.5`.

In a proper production level released package, the minimum "major" is 1 and
minor, patch range from 0 to 9. (The first release is usually `1.0.0`).

On the other hand, for a package that is released for development purposes,
usually has the "major" as 0 (and possibly no limit on range of major and
minor).

## Talking about the symbols

Before I jump on symbols, I shall like to give a brief on what package.json
stores.

### What exactly does package.json store?

A `package.json` file basically lists all the "pieces of code" (aka dependencies)
that the current project (which itself is a piece of code) may be dependent
upon.
Along with this, it stores what version of these "pieces of code" should
actually be used.

This version requirement can be:

- strict: _Only v1 of `package-a`_
- a little less strict: _Either v2.3 or v3.1 of `package-a`_
- flexible: _Anything after v3 of `package-a` will do fine_.

### How do symbols help?

Symbols like: `~, ^, <, ||` basically represents the above requirement in a
compact manner.

- `<` _aka_ less-than

  - Corresponds to **major, minor, patch**
  - `<4.3.0` means any major or minor or patch update less than `4.3.0`
    - `4.2.9` or `3.1.7` would work

- `>` _aka_ greater-than
  - Corresponds to **major, minor, patch**
  - `>4.3.0` means any major or minor or patch update greater than `4.3.0`
    - `5.1.6` would work but `4.2.9` won't

#### This is where it gets slightly tricky

The following symbols can allow updates to `major`, `minor` or `patch` depending upon which of them is defined.

`~4.3.5` means a totally different thing than `~4`
and `^7.8.6` is different from `^7.0.6`.

- `~` _aka_ tilde

  - Allows patch update if a minor version is defined or a minor
    update if no patch version is defined
  - For `~4.3.5`
    - Only patch updates would be allowed
    - Greater than or equal to `4.3.5` but, less than `4.4.0`
    - `~4.3.6` would work but, `~4.4.1` won't work
  - For `~4`
    - Only minor and patch updates would be allowed
    - Greater than or equal to `4.0.0` but, less than `5.0.0`
    - `4.4.2` would work but, `5.0.0` won't work

- `^` _aka_ carret
  - Allows updates less than the left most non-zero digit
  - If major is zero and minor is a non-zero number then, only patch updates would be allowed
  - If major is non zero and minor is zero then both minor and patch updates would be allowed
  - For `^0.3.5`
    - Greater than or equal to `0.3.5` but, less than `0.4.0`
    - `0.3.6` or `0.3.9` would work but, `0.4.x` won't work
  - For `^4.0.5`
    - Greater than or equal to `4.0.5` but, less than `5.0.0`
    - `4.1.5` would work but, `5.x.y` won't work

## Wrapping Up

This post obviously doesn't contain explanation for all the combantions possible
with all the relevant symbols. Instead, it is just an attempt to better explain
the concepts that confused me.

In a later post, I shall be sharing some actual examples using
[_node-semver_](https://github.com/npm/node-semver), which is **the tool that npm
uses** to parse these Semantic Versioning Complaint dependencies version.
