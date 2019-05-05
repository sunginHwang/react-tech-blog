import React, {Component} from "react";
import Nano from 'nanobar';
import cn from './NanoBar.scss';

class NanoBar extends Component {

    constructor(props) {
        super(props);
        this.state = {nanoBar: 12};
    }

    async componentDidMount() {
        await this.setState({
            nanoBar: new Nano({
                classname: cn.nanoBar,
                id: cn.nanoBar,
            })
        });
        window.nanoBar = await this.state.nanoBar;
    }

    componentWillUnmount() {
        window.nanobar = null;
        this.setState({nanoBar: null})
    }

    render() {
        return null;
    }
}

export default NanoBar;


