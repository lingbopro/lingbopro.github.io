import React from 'react';
import { withTranslation } from 'react-i18next';
import Header from './Header';
import HomePage from './HomePage';
import NotFound from './NotFound';
// import logo from './../logo.svg';
import 'sober/style/scroll-view.css';
import './css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null,
        };
        window.navigateTo = this.navigateTo.bind(this);
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.navigateToByHash();
        });
        this.navigateToByHash();
    }
    navigateToByHash() {
        let hash = App.parsePath(window.location.hash);
        if (hash === this.state.path) {
            return;
        }
        this.navigateTo(window.location.hash);
    }
    /**
     * 处理路径
     * @param {string} path 待处理路径
     * @returns {string}
     */
    static parsePath(path) {
        let parsedPath = path;
        if (parsedPath.startsWith('#')) {
            parsedPath = parsedPath.substring(1);
        }
        if (!parsedPath.startsWith('/')) {
            parsedPath = '/' + parsedPath;
        }
        return parsedPath;
    }
    /**
     * 转到路径
     * @param {string} path
     */
    navigateTo(path) {
        let state = this.state;
        state.path = App.parsePath(path);
        this.setState(state);
        window.location.hash = state.path;
    }
    /**
     * 路由注册表
     * @type {Object.<string, React.JSX.Element>}
     */
    static routers = {
        '/': <HomePage />,
    };
    /**
     * 404 路由
     * @type {React.JSX.Element}
     */
    static notFoundRouter = (<NotFound />);
    render() {
        // const { t } = this.props;
        let { path } = this.state;
        let is404 = false;
        if (!App.routers[path]) {
            is404 = true;
        }
        let router = App.routers[path] || App.notFoundRouter;
        return (
            <s-page class="App" theme="auto">
                {!is404 ? <Header /> : <></>}
                {router}
            </s-page>
        );
    }
}

export default withTranslation()(App);
