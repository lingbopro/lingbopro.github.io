import React from 'react';
import { withTranslation } from 'react-i18next';
import './css/NotFound.css';

class NotFound extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="NotFound">
                <div>
                    <div className="NotFound-header">{t('ui.notFound.header')}</div>
                    <div className="NotFound-content">{t('ui.notFound.content')}</div>
                    <a href="/">
                        <s-button>{t('ui.notFound.backToHomepage')}</s-button>
                    </a>
                </div>
            </div>
        );
    }
}

export default withTranslation()(NotFound);
