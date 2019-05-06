import React, { Component } from "react";
import * as FileApi from '../core/apis/FileApi';
import WriteView from '../component/post/write/WriteView/WriteView';
import * as postUpsertAction from "../core/actions/Post/PostUpsertAction";
import * as LayoutAction from '../core/actions/LayoutAction';

import WithHeader from '../hoc/WithHeader';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import OriginPreview from '../component/post/write/OriginPreview/OriginPreview';
import { convertImageToCodeImage } from '../core/util/ImageUtil';

class postEdit extends Component {

    componentDidMount() {
        this.props.withSetHeaderTitle('게시글 작성');
    }

    componentDidUpdate(prevProps, prevState) {
        this.onDetectError();
    }

    onDetectError = () =>{
        if(this.props.error){
            alert(this.props.errorMsg);
            this.props.postUpsertAction.toggleError(false);
        }
    };

    // 본문내용 변경 작성
    onChangeContent = (content) => {
        const { postUpsertAction } = this.props;
        postUpsertAction.setContent(content);
    };

    // 제목 변경
    onChangeTitle = (title) => {
        const { postUpsertAction } = this.props;
        postUpsertAction.setTitle(title);
    };

    // 카테고리 변경 시
    onChangeCategories = (selectedCategory) => {
        const { postUpsertAction } = this.props;
        postUpsertAction.setCategory(selectedCategory);
    };

    // 글 생성 or 업데이트
    upsertPost = () => {
        const { title, content, category, postNo, postUpsertAction } = this.props;
        const { validateUpsertPost } = this;

        if (validateUpsertPost(title, content, category)) {

            const upsertData = {
                id: postNo,
                title: title,
                contents: content,
                categoryNo: category.value
            };
            postUpsertAction.upsertPost(upsertData);
        }
    };

    // 글 작성 유효성 검사
    validateUpsertPost = (title, content, category) => {

        if(this.props.authInfo.no === 0 ){
            alert('로그인이 필요해요 ㅠㅠ.');
            return false;
        }

        if (title.length < 1 || title.length > 30) {
            alert('제목은 1~30글자 사이로 입력하세요.');
            return false;
        }

        if (content === '') {
            alert('게시글 내용을 작성해 주세요.');
            return false;
        }

        if (content.length < 5) {
            alert('게시글 내용이 너무 적습니다.');
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
    onDndImage = (e) => {
        e.preventDefault();
        const {files} = e.dataTransfer;

        for (let i = 0; i < files.length; i++) {
            this.uploadImage(files[i]);
        }
    };

    /*키보드 cv 복사로 이미지 삽입*/
    onPasteImage = (e) => {
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

    // 이미지 업로드
    uploadImage = async (file) => {
        await this.props.LayoutAction.togglePageLoading(true);

        await FileApi.saveImageAndGetImageUrl(file)
            .then(async (imgUrl) => {
                if (imgUrl === '') return;
                await this.onChangeContent(this.props.content + convertImageToCodeImage(imgUrl));
            });
        await this.props.LayoutAction.togglePageLoading(false);

    };


    // 프리뷰 클릭
    onClickShowOriginPreview = () => {
        const { postUpsertAction, previewModal } = this.props;
        postUpsertAction.toggleOriginPreview(!previewModal);
    };

    render() {
        const { onDndImage, onPasteImage, onChangeContent, onChangeTitle, onClickUploadImage, onChangeCategories, upsertPost, onClickShowOriginPreview} = this;
        const { title, content, category, categories, previewModal, authInfo } = this.props;

        return (
            <div>
                <WriteView
                    title={title}
                    content={content}
                    categories={categories}
                    authInfo={authInfo}
                    selectedCategory={category}
                    upsertPost={upsertPost}
                    onClickUploadImage={onClickUploadImage}
                    onClickShowOriginPreview={onClickShowOriginPreview}
                    onChangeContent={onChangeContent}
                    onChangeTitle={onChangeTitle}
                    onChangeCategories={onChangeCategories}
                    onDndImage={onDndImage}
                    onPasteImage={onPasteImage}

                />
                <OriginPreview
                    content={content}
                    onToggleView={onClickShowOriginPreview}
                    visible={previewModal}
                />
            </div>
        )
    }
}

export default WithHeader(connect(
    (state) => ({
        authInfo: state.AuthReducer.authInfo,
        postNo: state.PostWriteReducer.postNo,
        title: state.PostWriteReducer.title,
        content: state.PostWriteReducer.content,
        category: state.PostWriteReducer.category,
        categories: state.CategoryReducer.categories,
        error: state.PostWriteReducer.error,
        errorMsg: state.PostWriteReducer.errorMsg,
        previewModal: state.PostWriteReducer.previewModal
    }),
    (dispatch) => ({
        postUpsertAction: bindActionCreators(postUpsertAction, dispatch),
        LayoutAction: bindActionCreators(LayoutAction, dispatch)
    })
)(postEdit));
