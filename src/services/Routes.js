import { About } from '../components/About';
import { MainPage } from '../components/MainPage';
import { Projects } from '../components/Projects';
import { Resume } from '../components/Resume';
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