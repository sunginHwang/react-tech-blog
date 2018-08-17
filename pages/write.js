import React from "react";
import * as FileApi from '../core/apis/FileApi';
import WriteView from '../component/post/write/WriteView/WriteView';
import * as blogAction from "../core/actions/BlogAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import OriginPreview from '../component/post/write/OriginPreview/OriginPreview';

class write extends React.Component {

    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        this.handlerDetectError();
    }

    handlerDetectError = () =>{
        if(this.props.error){
            console.log(this.props.errorMsg);
            alert(this.props.errorMsg);
            this.props.blogAction.toggleError(false);
        }
    };


    onChangeContent = (content) => {
        const {blogAction} = this.props;
        blogAction.setContent(content);
    };

    onChangeTitle = (title) => {
        const {blogAction} = this.props;
        blogAction.setTitle(title);
    };

    onChangeCategories = (selectedCategory) => {
        const {blogAction} = this.props;
        blogAction.setCategory(selectedCategory);
    };

    upsertPost = async () => {
        const {title, content, category, postNo, blogAction} = this.props;
        const {validateUpsertPost} = this;

        if (validateUpsertPost(title, content, category)) {

            const upsertData = {
                postNo: postNo,
                title: title,
                contents: content,
                categoryNo: category.value
            };

            await blogAction.upsertPost(upsertData);
        }
    };

    validateUpsertPost = (title, content, category) => {

        if (title.length < 1 || title.length > 20) {
            alert('제목은 1~20글자 사이로 입력하세요.');
            return false;
        }

        if (content === '') {
            alert('게시글 내용을 작성해 주세요.');
            return false;
        }

        if (category === null) {
            alert('카테고리를 선택해주세요.');
            return false;
        }

        if (parseInt(category.value, 10) < 0) {
            alert('카테고리 선택이 잘못되었습니다. 다시 선택해주세요.');
            return false;
        }

        return true;
    };

    /*이미지 드래그 삽입 ( 복수 드래그 가능 )*/
    dndImage = (e) => {
        e.preventDefault();
        const {files} = e.dataTransfer;

        for (let i = 0; i < files.length; i++) {
            this.uploadImage(files[i]);
        }
    };

    /*키보드 cv 복사로 이미지 삽입*/
    pasteImage = (e) => {
        const {items} = e.clipboardData || e.originalEvent.clipboardData;
        if (items.length !== 2) return;
        if (items[1].kind !== 'file') return;
        const file = items[1].getAsFile();
        this.uploadImage(file);

        e.preventDefault();

    };

    /*이미지 버튼 삽입*/
    onClickUploadImage = async () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e) => {
            if (!fileInput.files) return;
            this.uploadImage(fileInput.files[0]);
        };
        fileInput.click();
    };

    /*이미지 업로딩*/
    uploadImage = async (file) => {
        FileApi.saveImageAndGetImageUrl(file)
            .then(async (imgUrl) => {
                if (imgUrl === '') return;
                await this.onChangeContent(this.state.content + this.convertImageToCodeImage(imgUrl));
            });
    };

    /* 이미지 태그 markdown 용으로 컨버팅 */
    convertImageToCodeImage(imageUrl) {
        return `${'\n'}![${imageUrl}](${imageUrl})${'\n'}`;
    }

    onClickShowOriginPreview = () => {
        console.log(12);
        this.setState({visible: !this.state.visible});
    };

    render() {
        const {dndImage, pasteImage, onChangeContent, onChangeTitle, onClickUploadImage, onChangeCategories, upsertPost, onClickShowOriginPreview} = this;
        const {title, content, category, categories} = this.props;

        return (
            <div>
                <WriteView
                    dndImage={dndImage}
                    pasteImage={pasteImage}
                    categories={categories}
                    selectedCategory={category}
                    changeContent={onChangeContent}
                    changeTitle={onChangeTitle}
                    savePost={upsertPost}
                    changeCategory={onChangeCategories}
                    clickUploadImage={onClickUploadImage}
                    clickShowOriginPreview={onClickShowOriginPreview}
                    content={content}
                    title={title}
                />
                <OriginPreview
                    content={content}
                    clickCloseVisible={onClickShowOriginPreview}
                    visible={this.state.visible}
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        postNo: state.PostWriteReducer.postNo,
        title: state.PostWriteReducer.title,
        content: state.PostWriteReducer.content,
        category: state.PostWriteReducer.category,
        categories: state.CategoryReducer.categories,
        error: state.PostWriteReducer.error,
        errorMsg: state.PostWriteReducer.errorMsg
    }),
    (dispatch) => ({
        blogAction: bindActionCreators(blogAction, dispatch)
    })
)(write);