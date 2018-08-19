
/* 이미지 태그 markdown 용으로 컨버팅 */
export const convertImageToCodeImage = (imageUrl) => {
    return `${'\n'}![${imageUrl}](${imageUrl})${'\n'}`;
};