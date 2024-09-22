import React from 'react';
import { withTranslation } from 'react-i18next';
import './css/Header.css';
import socials from './../socials.json';

class Header extends React.Component {
    render() {
        const { t } = this.props;
        const navButtons = (
            <>
                <a href="#/">
                    <s-button type="text">{t('ui.header.links.homepage')}</s-button>
                </a>
                <a href={socials.github.url} target="_blank" rel="noreferrer">
                    <s-button type="text">{t('ui.header.links.github')}</s-button>
                </a>
            </>
        );
        return (
            <header className="App-header">
                {/* <img src="logo" className="App-logo" alt="logo" /> */}
                <div className="left">
                    <div className="App-title">{t('ui.header.title')}</div>
                </div>
                <div className="right">
                    <div className="navButtons navButtons-desktop">{navButtons}</div>
                </div>
            </header>
        );
    }
}

export default withTranslation()(Header);
