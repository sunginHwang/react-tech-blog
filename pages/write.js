import React from "react";
import Layout from '../component/mainTemplate/Layout/Layout';
import * as FileApi from '../core/apis/FileApi';
import WriteView from '../component/post/write/WriteView/WriteView';
import { CATEGORIES } from '../core/util/DummyData';

class write extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedCategory: null,
            content: '```js\n' +
            'wefwef\n' +
            '```'
        }
    }


    onChangeContent = (content) => {
        this.setState({content: content});
    };

    onChangeCategories = (selectedCategory) => {
        this.setState({selectedCategory : selectedCategory});
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

    render() {
        const { dndImage, pasteImage, onChangeContent, onClickUploadImage, onChangeCategories } = this;
        const { content, selectedCategory } = this.state;
        return (
            <Layout title='게시글 작성'>
                <WriteView
                    dndImage={dndImage}
                    pasteImage={pasteImage}
                    changeContent={onChangeContent}
                    categories={CATEGORIES}
                    selectedCategory={selectedCategory}
                    changeCategory={onChangeCategories}
                    clickUploadImage={onClickUploadImage}
                    content={content}
                />
            </Layout>
        )
    }
}

export default write;