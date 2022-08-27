---
slug: "/blog/project-level-git-config"
date: "2022-04-03"
title: "Project level git config"
subtitle: "Setup multiple git configs"
canonicalURL: "https://dev.to/snikhill/project-level-git-config-5cam"
seoImage: "https://www.datocms-assets.com/48735/1648228417-carbon.png"
---

Last week, I completely shifted my system to Arch Linux and during this process, I lost some config(s), settings, etc.

git config was one of them. I used to have a separate config like username, email, ssh key to use based on which project I was working on.
For example, my work projects require a different set of credentials (username, email, ssh-key) than the credentials I use on my personal projects.

I have done this before too but, after a while, I just tend to forget how to do it. This time, I am writing it in a post so that I can refer to it when required.

## Steps

1. Go to the directory where you store the projects and create a `.project.gitconfig` with the desired credentials:

```gitconfig
[user]
    name = work-username
    email = username@work-domain.com
```

2. Edit the user level `.gitconfig` present under `$HOME/.gitconfig` to include the following condition:

```gitconfig
[includeIf "gitdir:ABSOLUTE_PROJECT_DIRECTORY_PATH"]
	path = "ABSOLUTE_PROJECT_DIRECTORY_PATH/.project.gitconfig"
```

Basically, we are telling `git`:

> "If you find a `.git` directory nested under this path then, use these set of credentials."

## Verify

Now, go to a project inside the work/project-root directory and verify that the correct credentials is being used:

```bash
git config --list | grep -P "user|email"
```

## Note (or Gotcha)

Keep in mind that this config will only be used by `git` if it finds `.git` directory at that path or a parent `.git` directory.
For example:

```
work/
|- .work.gitconfig
|- project-a/
   |- .git/
|- project-b/
   |- .git/
```

Now, my `.work.gitconfig` will be used when I am inside `project-a` or `project-b` but, not inside `work`.
