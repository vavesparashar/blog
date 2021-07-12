module.exports = {
    siteMetadata: {
        title: 'marketingbaba.in',
    },
    plugins: [
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/_posts`,
                name: 'markdown-pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/_talks`,
                name: 'markdown-pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/_pages`,
                name: 'markdown-pages',
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-google-marketing-platform',
            options: {
                dataLayer: {
                    gaPropertyId: 'UA-184977720-1',
                    gaOptimizeId: 'OPT-TKWT26N'
                },
                tagmanager: {
                    id: 'GTM-N2RLXVT',
                    params: {
                        gtm_cookies_win: 'x'
                    }
                },
                analytics: {
                    id: 'UA-184977720-1', //GA
                },
                optimize: {
                    id: 'OPT-TKWT26N',
                },
                includeInDevelopment: false,
            },
        }
    ],
};