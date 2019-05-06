import React, {Component} from "react";
import Nano from 'nanobar';
import cn from './NanoBarLoading.scss';

class NanoBarLoading extends Component {

    constructor(props) {
        super(props);
        this.state = {nanoBarLoading: null};
    }

    async componentDidMount() {
        await this.setState({
            nanoBarLoading: new Nano({
                classname: cn.nanoBarLoading,
                id: cn.nanoBarLoading,
            })
        });

        window.nanoBarLoading = await this.state.nanoBarLoading;
    }

    componentWillUnmount() {
        window.nanoBarLoading = null;
        this.setState({nanoBarLoading: null});
    }

    render() {
        return null;
    }
}

export default NanoBarLoading;


