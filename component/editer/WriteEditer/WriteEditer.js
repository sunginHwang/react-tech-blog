import React from "react";
import style from './WriteEditer.scss';

export default class WriteEditer extends React.Component {

    componentDidMount() {
        this.createEventListener();
    }

    componentWillUnmount() {
        this.removeEventListener();
    }

    createEventListener() {
        const { dndImage, pasteImage } = this.props;
        //dnd Event
        if (window) {
            window.addEventListener('drop',dndImage);
        }

        // paste Event
        if (document && document.body) {
            document.body.addEventListener('paste', pasteImage);
        }
    }

    removeEventListener() {
        const { dndImage, pasteImage } = this.props;

        if (window) {
            window.removeEventListener('drop', dndImage);
        }
        if (document && document.body) {
            document.body.removeEventListener('paste', pasteImage);
        }
    }

    render() {
        const { changeContent, content } = this.props;
        return (
            <textarea className={style.markDownEditer}
                      onChange={(e) => {
                          changeContent(e.target.value);
                      }}
                      value={content}/>
        )
    }
}