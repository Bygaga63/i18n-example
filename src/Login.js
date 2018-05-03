import React from 'react';

import {injectIntl, FormattedMessage} from 'react-intl';

class Login extends React.Component{

    //Если надо воткнуть в placeholder текст, нужно вызывать this.props.intl.formatMessage({id: название поля})
    //Если просто текст воткунть, то он должен быть обернут в <FormattedMessage>, если нужно что-то вставить в текст, то надо добавить атрибут values,
    // откуда берется value смотреть в en.js и ru.js
    render() {
        return (
            <form action="#">
                <input type="text" placeholder={this.props.intl.formatMessage({id: 'welcome.hello'})}/> <br/>
                <input type="password" placeholder={this.props.intl.formatMessage({id: 'password'})}/><br/>
                <button type={"submit"} onClick={() => this.props.changeLocale("en")}>
                    <FormattedMessage id="submit" values={{value: "en"}}/>
                </button>
                <button type={"submit"} onClick={() => this.props.changeLocale("ru")}>
                    <FormattedMessage id="submit" values={{value: "ru"}}/>
                </button>
            </form>
        )
    }

}

//оборачиваю компонент в функцию injectIntl мы получаем в пропсах объект intl и можем его использовать.
export default injectIntl(Login);