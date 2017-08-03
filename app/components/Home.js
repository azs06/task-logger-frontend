import React from 'react';
import HeaderBlock from './HeaderBlock';
import TaskInput from './TaskInput';
import TaskCard from './TaskCard';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <main>
                    <section className="section">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                <TaskInput />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <TaskCard />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

module.exports = Home;