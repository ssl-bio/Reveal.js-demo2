# Reveal.js presentation written in emacs org-mode + org-reveal (Part 2)


## Description

Sample [Reveal.js](https://revealjs.com/) presentation written in emacs org-mode (with [org-reveal](https://github.com/yjwen/org-reveal/)) which tries to emulate common layouts from traditional presentation software.

-   [Live version](https://ssl-bio.github.io/Reveal.js-demo2)
-   [Description](https://ssl-blog.netlify.app/posts/reveal-js-demo2/)


## Updates


### <span class="timestamp-wrapper"><span class="timestamp">[2024-11-06 Wed] </span></span> Using third-party plugins

The cause for the third-party plugins not being loaded in the output file was related to the use of the `#+REVEAL_ROOT:` option.

-   To enable the plugins, the option needs to be commented before exporting for the first time (or the first time since opening Emacs); then, for all subsequent exports, the option can be enabled in order to use a reveal.js copy from a CDN.
-   The way plugins are specified in the org-file was changed back to the use of the `#+REVEAL_PLUGINS:` option since this is not the cause of the problem and simplifies the input/output.


### <span class="timestamp-wrapper"><span class="timestamp">[2024-08-20 Tue] </span></span> Using third party plugins

To use third-party plugins the following modifications need to be done

-   ~~Include the list of third-party plugins inside the `#+REVEAL_INIT_OPTIONS:` and remove the `#+REVEAL_PLUGINS:` line.~~
-   Include the url to the plugins using the `#+REVEAL_EXTRA_SCRIPT_BEFORE_SRC:` rather than the `#+REVEAL_EXTERNAL_PLUGINS:`. In the example below the previous way to specify the third-party plugins is commented.
    
    ```org
    # #+REVEAL_EXTERNAL_PLUGINS: (RevealMenu . "./plugin_extra/menu/menu.js")
    #+REVEAL_EXTRA_SCRIPT_BEFORE_SRC: ./plugin_extra/menu/menu.js 
    ```
