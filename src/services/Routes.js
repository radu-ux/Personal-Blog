import { About } from '../components/about-page/About';
import { MainPage } from '../components/main-page/MainPage';
import { Projects } from '../components/projects-page/Projects';
import { Resume } from '../components/resume-page/Resume';
import { Switch, Route } from 'react-router-dom';

export function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/resume' component={Resume}/>
        </Switch>
    )
}