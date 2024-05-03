# Reveal.js presentation written in emacs org-mode + org-reveal (Part 2)


<a id="org125c75d"></a>

## Description

Sample [Reveal.js](https://revealjs.com/) presentation written in emacs org-mode (with [org-reveal](https://github.com/yjwen/org-reveal/)) which tries to emulate common layouts from traditional presentation software.

-   [Live version](https://ssl-bio.github.io/Reveal.js-demo2)
-   [Description](https://ssl-blog.netlify.app/posts/reveal-js-demo2/)


<a id="orgc7a1831"></a>

## Updates


<a id="org752a25b"></a>

### 2024-05-03

-   The url for the cdn was changed to <https://cdn.jsdelivr.net/npm/reveal.js@5.1.0> which corresponds to the latest version of reveal.js.
    -   The above url was used in the following lines
        -   `#+REVEAL_ROOT:`
        -   `#+REVEAL_INIT_OPTIONS:`, more specifically, `themesPath:'https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/theme/'`
    -   The last line is necessary to change the themes using the menu plugin
-   When producing the html file using the cdn above I found that it:
    -   Includes the script tag which points to the file `pdf.css` which does not exist, `pdf.scss` is present instead
        
        ```html
        <!-- If the query includes 'print-pdf', include the PDF print sheet -->
        <script>
            if( window.location.search.match( /print-pdf/gi ) ) {
                var link = document.createElement( 'link' );
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/css/print/pdf.css';
                document.getElementsByTagName( 'head' )[0].appendChild( link );
            }
        </script>
        ```
    -   Misses some script tags for some plugins
    -   Includes an array, `dependencies` that is not necessary.

The result is that the presentation can not be rendered in the browser.

After trying different things, I found that when the line `#+REVEAL_ROOT:` is commented and the `html` is produced the above issues are corrected. Removing the comment and exporting again would produce a file that uses the cdn and is rendered correctly.
