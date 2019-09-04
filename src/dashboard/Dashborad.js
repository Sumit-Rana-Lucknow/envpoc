import React, { Component } from 'react';
import SideNav from './SideNav'
import './dashboard.css';
import RedirectToLogin from './RedirectToLogin';

import SideShowList from './SideShowList';
class Dashboard extends Component {
    state = {
            accessPath : false,
            showSelected: ""
    };
    componentDidMount (props) {
        this.setState({accessPath: JSON.parse(sessionStorage.getItem('accessTookCorrectPath'))});
        
    }
    render() {
        
        return(
            <div>
                { this.state.accessPath ? 
                <div>
                    <div className="dashboardCSS">
                        
                    </div>
                    <div>
                            <SideNav />
                            <SideShowList />
                        </div>
                </div> : <RedirectToLogin />}
            </div>
        )
    }
}

export default Dashboard