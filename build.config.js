import path from 'path';
import { URL } from 'url';

import {
    AnomalyClassBar,
    FooterNav,
    ACSAnimation,
    Info,
    AdvancedInformationMethodology,
    CurrentDateProvider,
    i18n,
    todo,
} from '@scp-wiki-article-builder/components';

/**
 * The current directory name from which we all
 * the other paths will be resolved.
 */
const __dirname = new URL('.', import.meta.url).pathname;

/**
 * This is the project config that will be read by the tool.
 */
export default {
    /**
     * The main file of the project.
     */
    entry: path.resolve(__dirname, 'src/article.handlebars'),

    /**
     * The directory where all the partials files
     * (page fragments, in other words) are located into.
     */
    partialsDir: path.resolve(__dirname, 'src/partials'),

    /**
     * The directory where the JSON files that contains the
     * localized strings are located.
     *
     * Example of resulting path for english strings:
     * {stringsDir}/en.json
     */
    stringsDir: path.resolve(__dirname, 'src/strings'),

    output: {
        /**
         * The directory where the outputted file(s)
         * will be written into.
         *
         * This string is treated as a template so
         * this config is available in the variable
         * '@config'. Passed data are also available.
         */
        dir: path.resolve(__dirname, 'dist/scp-{{ itemNumber }}/'),

        /**
         * The name of the outputted file.
         *
         * Specifying the locale is recommanded so that
         * outputted files with different locales can
         * coexist.
         *
         * This string is treated as a template so
         * this config is available in the variable
         * '@config'. Passed data are also available.
         */
        filename: 'article.{{ @config.locale }}.txt'
    },

    /**
     * The components that are used in the article.
     */
    components: {
        AnomalyClassBar,
        FooterNav,
        ACSAnimation,
        Info,
        AdvancedInformationMethodology,
        CurrentDateProvider,
        i18n,
        todo,
    },

    /**
     * The locale used to generate the article.
     */
    locale: 'en',

    /**
     * Arbitrary data to be passed to the templates.
     */
    data: {
        itemNumber: 9999,
        articleTitle: 'Test Article',
        articleAuthor: 'TestAuthor',

        site: 'Site-19',
        siteDirector: 'Dr Tilda D. Moose',
        siteHead: 'Dr John Doe',
        itemMtf: 'N/A',
    }
};
