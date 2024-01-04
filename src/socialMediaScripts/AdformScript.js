export function adform(pagename) {
    window._adftrack = Array.isArray(window._adftrack) ? window._adftrack
        : (window._adftrack ? [window._adftrack] : []);
    window._adftrack.push({
        HttpHost: 'a2.adform.net',
        pm: 3028764,
        divider: encodeURIComponent('|'),
        pagename: encodeURIComponent(pagename)
    });
    (function () {
        var s = document.createElement('script'); s.type =
            'text/javascript'; s.async = true; s.src =
                'https://s2.adform.net/banners/scripts/st/trackpoint-async.js'; var x =
                    document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s,
                        x);
    })();
}
