---
slug: "/blog/vim-plugins-using-pathogen"
date: "2022-04-10"
title: "Managing vim plugins using pathogen"
subtitle: "A way to keep record of plugins installed using pathogen"
canonicalURL: "https://dev.to/snikhill/managing-vim-plugins-using-pathogen-55g9"
---

I have been using [pathogen](https://github.com/tpope/vim-pathogen#pathogenvim) as a plugin manager for my `neovim`.
It is a very simple tool that requires no special commands to install a plugin.
Just clone the plugin repository to a specified folder (`bundle` by default) and pathogen will add the plugin to the runtime-path(\*) on next restart.

It works fine but, the thing is, what if you end up migrating your system or for some reason, you had to recover your vim config. There is no way to keep a record of the plugins you had installed previously.
_Zum Beispiel_:

- [vim-plug](https://github.com/junegunn/vim-plug) stores the plugins installed in the `vimrc` between `call plug#begin()` and `call plug#end()`.

I wanted something quick and similar to `vim-plug`'s solution.
So, I wrote a mini bash script.

It is just a combination of a [PLUGINS[]](https://github.com/SNikhill/dotfiles/blob/master/nvim/plugins.sh) meant to hold the url(s) for all the plugins used and a [for-loop](https://github.com/SNikhill/dotfiles/blob/master/nvim/plug_install.sh) that clones them to the `bundle` directory.

## Here is the code

- [plugins.sh](https://github.com/SNikhill/dotfiles/blob/master/nvim/plugins.sh)

```bash
#!/bin/bash
# I STORE THE plugins LIST IN A SEPARATE shell file
export plugins=(
"https://github.com/flazz/vim-colorschemes.git colorschemes"
# ...OtherPlugins
)
```

- [plug_install.sh](https://github.com/SNikhill/dotfiles/blob/master/nvim/plug_install.sh)

```bash
#!/bin/bash

# THE FILE THAT CONTAINS THE plugins LIST
source plugins.sh

cd ./bundle
for plugin in "${plugins[@]}"; do
	git clone -q $plugin
done
```

Sure, there may be some more sophisticated tools for the same out-there but, till now, this script works for me.

## Caveats

Yes, there are some caveats like:

- There is no check if a plugin already exists and this may be a problem for people who install new plugins frequently.

(NB: I may update the script to address these caveats)

## Custom Cloned Directory Name?

Yes, you can still specify a custom-directory name for the plugin so that it is registered under the runtime-path appropriately. And all you need to do is add the `directory name` after the git url.

`"https://SOME_GIT_URL.git CUSTOM_DIRECTORY_NAME"`

![custome_directory-name](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l33vlzcd4lzru7p460f1.png)

For example in the above image, I have specified `colorschemes` as the custom-directory-name and hence, git will clone the `vim-colorschemes` plugin to `colorschemes` directory and not `vim-colorschemes` directory.

## Using it

(I have presumed that you are using the same file/variable names as my dotfiles)

1. Add the new plugin's git repository url to `plugins` list specified in `plugins.sh`
2. Run the `plug_install.sh`
3. Start your `vim` instance and run `:CheckHealth` to see if the installed plugin is setup correctly

You can see this setup in action in my [dotfiles repository.](https://github.com/SNikhill/dotfiles/tree/master/nvim)

_NB: Let me know if you have any questions. :)_
