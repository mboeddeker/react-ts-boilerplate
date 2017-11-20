import * as React from 'react';
import * as style from './style.css';

interface HomeProps {
    name: string;
    age: number;
}

export default class App extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                <div className={style.myDiv}>
                    <p>Hallo {this.props.name}</p>
                </div>
            </div>
        );
    }
}