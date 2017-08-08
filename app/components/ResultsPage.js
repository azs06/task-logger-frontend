import React from 'react';
import TaskCard from './TaskCard';

export default class ResultPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log( this.props.location );
    }
    componentDidUpdate(prevProps, prevState){
        console.log( this.props.location );
    }
    render(){
        return(
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <TaskCard />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}