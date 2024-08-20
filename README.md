# Reveal.js presentation written in emacs org-mode + org-reveal (Part 2)


## Description

Sample [Reveal.js](https://revealjs.com/) presentation written in emacs org-mode (with [org-reveal](https://github.com/yjwen/org-reveal/)) which tries to emulate common layouts from traditional presentation software.

-   [Live version](https://ssl-bio.github.io/Reveal.js-demo2)
-   [Description](https://ssl-blog.netlify.app/posts/reveal-js-demo2/)


## Updates


### <span class="timestamp-wrapper"><span class="timestamp">[2024-08-20 Tue] </span></span> Using third party plugins

To use third-party plugins the following modifications need to be done

-   Include the list of third-party plugins inside the `#+REVEAL_INIT_OPTIONS:` and remove the `#+REVEAL_PLUGINS:` line. In the example below all the other options were replaced with `<previous-options>` to emphasize the changes; similarly, the previous way to list all the plugins is commented
    
    ```org
    #+REVEAL_INIT_OPTIONS: <previous-options>, plugins: [ RevealMenu, RevealCustomControls, RevealPointer, RevealDrawer ]
    # #+REVEAL_PLUGINS: (notes zoom highlight RevealMenu RevealCustomControls RevealPointer RevealDrawe
    ```
-   Include the url to the plugins using the `#+REVEAL_EXTRA_SCRIPT_BEFORE_SRC:` rather than the `#+REVEAL_EXTERNAL_PLUGINS:`. In the example below the previous way to specify the third-party plugins is commented.
    
    ```org
    # #+REVEAL_EXTERNAL_PLUGINS: (RevealMenu . "./plugin_extra/menu/menu.js")
    #+REVEAL_EXTRA_SCRIPT_BEFORE_SRC: ./plugin_extra/menu/menu.js 
    ```
