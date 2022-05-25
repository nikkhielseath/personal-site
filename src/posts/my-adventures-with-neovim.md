---
slug: "/blog/my-adventures-with-neovim"
date: "2022-05-26"
title: "My Adventures with NeoVim"
subtitle: "Sharing how my neovim config came to be"
---

I have been using neovim for a while now. The best part I like about
anything related to linux is the amount of freedom you get in configuring
something. Like, I can change anything I want to; from my kernel to the way my
desktop looks when I boot in the OS.
This same freedom of configuration is true for neovim and due to this freedom,
there are literally thousands of way to achieve the same thing and thousands of
ways to customise neovim to your own liking.

In this post, I shall write down how my neovim config looks like and how it came
to be.

## How it started

I got into vim and found this book called learn vim script the hard way. I
started to read the same and soon drifted off.

Then, I just dived right in and made neovim my default text editor.
The very first thing I noticed was how dull the syntax looked. Everything was a
simple color and I was spolied by the syntax highlighting that WebStorm and
VSCode had.
After this, I found a need for auto-completion and linting and "...so began the
story called **_my adventures with neovim_**".

## My Config

My current neovim config is a combination of both external plugins as well as
some internal features that neovim provides.

[I use pathogen as my plugin manager](https://snikhill.tech/blog/vim-plugins-using-pathogen/) as I really like how I just need to clone
a plugin repository and this plugin manager will load the plugin into neovim's
"global context" and make it work.

### Basic Visual Stuff

Plugins that give some visual completeness to my neovim.

- [NERDTree](https://github.com/preservim/nerdtree) as file/directory/tree
  explorer
- [vim-airline](https://github.com/vim-airline/vim-airline) as the thing in the
  bottom that shows details related to cursor position, file name, extension
- [vim-colorschemes](https://github.com/flazz/vim-colorschemes.git) for having
  a limited (but, good) set of colorscheme options for my neovim

### Code Assistance

Plugins that assist me to code faster and possibly better.

- [deoplete.nvim](https://github.com/flazz/vim-colorschemes.git) for having a
  "dark powered" code-completion abilities
- [Asynchronous Lint Enginer](https://github.com/dense-analysis/ale.git) for
  adding linting capabilities
- [tcomment](https://github.com/tomtom/tcomment_vim) for toggling comments in a
  file
- [vim-gitgutter](https://github.com/airblade/vim-gitgutter) is a really useful
  plugin if you are a fan of atomic commits like me. I can easily stage a "hunk"
  or navigate through the changes I made in a version controlled file
- [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) for gazing
  into the "unknowns" of a codebase. I use its regex search to find pieces of
  code a lot

Some of these plugins work out of the box and for some I had to experiment
around and find the correct config and if a config gets too complex then that
is a signal for me to look for a better solution.

My current config is available [here](https://github.com/SNikhill/dotfiles/blob/master/nvim/init.vim).
