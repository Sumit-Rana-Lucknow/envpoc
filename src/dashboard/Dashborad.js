import React, { Component } from 'react';
import SideNav from './SideNav'
import './dashboard.css';
import RedirectToLogin from './RedirectToLogin';
class Dashboard extends Component {
    state = {
            accessPath : false
    };
    componentDidMount () {
        this.setState({accessPath: JSON.parse(sessionStorage.getItem('accessTookCorrectPath'))});
    }
    render() {
        
        return(
            <div>
                { this.state.accessPath ? 
                <div>
                    <div className="dashboardCSS">
                        <h2>This is our Dashboard page</h2>
                    </div>
                    <div>
                            <SideNav />
                        </div>
                </div> : <RedirectToLogin />}
            </div>
        )
    }
}

export default Dashboard