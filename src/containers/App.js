import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import {setSearchField,requestRobots} from '../action';


const mapStateToProps = state=>{
    return{
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch)=>{
   return {
       onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
       onRequestRobots:()=>dispatch(requestRobots())

}

}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[]
        }
    }
    componentDidMount(){
       this.props.onRequestRobots();
    }

    render(){
        console.log(this.props.store.getState());
        const {robots}=this.state;
        const {searchField,onSearchChange,robots,isPending} = this.props
        console.log('robots',robots);
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return(
            isPending?<h1 className='tc'>Loading...</h1>:
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App)