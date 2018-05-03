import React, { Component } from 'react';


import {addLocaleData, IntlProvider} from 'react-intl';

import en from './locales/en'
import ru from './locales/ru'

import enLocale from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';

import Login from "./Login";

// засовываем наши языки в переменную
const locales = {en, ru};

//подтягивает из самой библиотеки конкретные языки и правила
addLocaleData([...enLocale, ...ruLocale]);

//функция позволяет обращаться к вложенным объектам.
export const flattenMessages = ((nestedMessages, prefix = '') => {
    if (nestedMessages === null) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value       = nestedMessages[key]
        const prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value })
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
})



export class Root extends Component {
    //язык по умолчанию
    state = {locale: 'ru'};
    //функция для изменения локали
    setLocale = (locale) => {
        this.setState({locale});
    };
    render() {
        const {locale} = this.state;
        return(
            //заворачивает все приложение в интернационализацию. Если есть роутинг, то должен быть выше роутинга.
            <IntlProvider locale={locale} messages={flattenMessages(locales[locale])}>
                <Login changeLocale={this.setLocale}/>
            </IntlProvider>
        )
    }
}