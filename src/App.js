/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import HomePage from './Pages/HomePage';
import BotCommandsPage from './Pages/BotCommandsPage';
import ContributorsPage from './Pages/ContributorsPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsOfServicesPage from './Pages/TermsOfServicesPage';
import Error404Page from './Pages/Error404Page';
import Error500Page from './Pages/Error500Page';

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error500Page}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Redirect exact from="/home" to="/" />
                    <Route path="/contributors" component={ContributorsPage} />
                    <Route path="/bot-commands" component={BotCommandsPage} />
                    <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                    <Route path="/terms-of-service" component={TermsOfServicesPage} />
                    <Route path="/health">
                <h3>Hey There!!! The App is Healthy</h3>
            </Route>
                    <Route path="*" exact={true} component={Error404Page} />
                </Switch>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
