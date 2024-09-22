import React from 'react';
import { withTranslation } from 'react-i18next';
import 'sober';
import RegistryIcon from './RegistryIcon';
import './css/HomePage.css';
import socials from './../socials.json';

class HomePage extends React.Component {
    render() {
        const { t } = this.props;
        let socialButtons = [];
        for (const key in socials) {
            const value = socials[key];
            socialButtons.push(
                <a href={value.url} target="_blank" rel="noreferrer" key={key}>
                    <s-tooltip>
                        <s-fab size="small" style={{ backgroundColor: value.color }} slot="trigger">
                            <RegistryIcon type={value.icon} />
                        </s-fab>
                        {t('text.socials.' + key)}
                    </s-tooltip>
                </a>
            );
        }
        return (
            <div className="HomePage">
                <div className="HomePage-top">
                    <div className="HomePage-title">{t('ui.homePage.title')}</div>
                    <div className="HomePage-subtitle">{t('ui.homePage.subtitle')}</div>
                    <div className="HomePage-socials">{socialButtons}</div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(HomePage);
