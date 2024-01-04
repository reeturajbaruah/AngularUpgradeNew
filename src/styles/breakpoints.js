module.exports = [
    {
        "alias": "xs",
        "mediaQuery": "screen and (min-width: 0px) and (max-width: 599.98px)",
        "priority": 1000,
        "suffix": "Xs",
        "overlapping": false
    },
    {
        "alias": "sm",
        "mediaQuery": "screen and (min-width: 600px) and (max-width: 959.98px)",
        "priority": 900,
        "suffix": "Sm",
        "overlapping": false
    },
    {
        "alias": "md",
        "mediaQuery": "screen and (min-width: 960px) and (max-width: 1279.98px)",
        "priority": 800,
        "suffix": "Md",
        "overlapping": false
    },
    {
        "alias": "lg",
        "mediaQuery": "screen and (min-width: 1280px) and (max-width: 1919.98px)",
        "priority": 700,
        "suffix": "Lg",
        "overlapping": false
    },
    {
        "alias": "xl",
        "mediaQuery": "screen and (min-width: 1920px) and (max-width: 4999.98px)",
        "priority": 600,
        "suffix": "Xl",
        "overlapping": false
    },
    {
        "alias": "lt-sm",
        "overlapping": true,
        "mediaQuery": "screen and (max-width: 599.98px)",
        "priority": 950,
        "suffix": "LtSm"
    },
    {
        "alias": "lt-md",
        "overlapping": true,
        "mediaQuery": "screen and (max-width: 959.98px)",
        "priority": 850,
        "suffix": "LtMd"
    },
    {
        "alias": "lt-lg",
        "overlapping": true,
        "mediaQuery": "screen and (max-width: 1279.98px)",
        "priority": 750,
        "suffix": "LtLg"
    },
    {
        "alias": "lt-xl",
        "overlapping": true,
        "priority": 650,
        "mediaQuery": "screen and (max-width: 1919.98px)",
        "suffix": "LtXl"
    },
    {
        "alias": "gt-xs",
        "overlapping": true,
        "mediaQuery": "screen and (min-width: 600px)",
        "priority": -950,
        "suffix": "GtXs"
    },
    {
        "alias": "gt-sm",
        "overlapping": true,
        "mediaQuery": "screen and (min-width: 960px)",
        "priority": -850,
        "suffix": "GtSm"
    },
    {
        "alias": "gt-md",
        "overlapping": true,
        "mediaQuery": "screen and (min-width: 1280px)",
        "priority": -750,
        "suffix": "GtMd"
    },
    {
        "alias": "gt-lg",
        "overlapping": true,
        "mediaQuery": "screen and (min-width: 1920px)",
        "priority": -650,
        "suffix": "GtLg"
    },
    {
        "alias": "lt-md2",
        "suffix": "lt-Md2",
        "mediaQuery": "screen and (max-width: 1119px)",
        "overlapping": true,
        "priority": 1001
    },
    {
        "alias": "md1",
        "suffix": "Md1",
        "mediaQuery": "screen and (min-width: 960px) and (max-width: 1119px)",
        "overlapping": true,
        "priority": 1001
    },
    {
        "alias": "md2",
        "suffix": "Md2",
        "mediaQuery": "screen and (min-width: 1120px) and (max-width: 1279px)",
        "overlapping": true,
        "priority": 1001
    },
    {
        "alias": "lt-micro",
        "suffix": "LtMicro",
        "mediaQuery": "screen and (max-width: 386.98px)",
        "overlapping": true,
        "priority": 1001
    },
    {
        "alias": "micro",
        "suffix": "Micro",
        "mediaQuery": "screen and (min-width: 387px) and (max-width: 599.98px)",
        "overlapping": true,
        "priority": 1001
    }
];
