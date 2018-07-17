import Layout from '../component/common/layout/Layout';
import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as sampleAction from '../core/actions/SampleApi';
import style from '../style/scss/Main.scss';

class reduxExample extends React.Component {

    async componentDidMount(){
        await console.log('componentDidMount');
        await this.props.sampleAction.asyncCall(2);
        await console.log(12);
    }

    successBtnClick(){
        const { sampleAction } = this.props;
        sampleAction.asyncCall(1);
    }

    failBtnClick(){
        const { sampleAction } = this.props;
        sampleAction.asyncCall('12/e212');
    }

    render() {
        const { count, title, body } = this.props;

        return(
        <Layout title='리덕스 페이지'>
            <div>
                <div>redux status is <span> {count}</span></div>
                <div>redux body is <span> {body}</span></div>
                <div>redux title is <span> {title}</span></div>
                <div>
                    <button className={style.tag} onClick={(e)=>{
                        this.successBtnClick()}}>apiSuccessCallButtons</button>
                    <button className={style.tag} onClick={(e)=>{
                        this.failBtnClick()}}>apiFailCallButton</button>
                </div>
            </div>
        </Layout>
        )
    }
}

export default
connect(
    (state) => ({
        count: state.ReduxSagaExampleReducer.count,
        body: state.ReduxSagaExampleReducer.body,
        title: state.ReduxSagaExampleReducer.title
    }),
    (dispatch) => ({
        sampleAction: bindActionCreators(sampleAction, dispatch),
    })
)(reduxExample);