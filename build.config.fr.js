import baseConfig from './build.config.js';

/**
 * This config extends the base config to generate
 * an article with the 'fr' locale instead of 'en'.
 */
export default {
    /**
     * Unwrap the base configuration.
     */
    ...baseConfig,

    /**
     * The locale used to generate the translated article.
     */
    locale: 'fr',

    data: {
        /**
         * Original data.
         */
        ...baseConfig.data,

        /**
         * New data and translated data.
         */
        originalTitle: baseConfig.data.articleTitle,
        originalAuthor: baseConfig.data.articleAuthor,
        articleTitle: 'Article De Test',
        articleAuthor: 'TestAuthorFR',
    }
};
