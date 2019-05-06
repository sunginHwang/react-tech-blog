import apiCall from '../lib/apiCall';
import { IMAGE_API, BLOG_API } from '../../core/lib/constants';

export const saveImageAndGetImageUrl = async (imageFile) => {
    let data = await new FormData();
    await data.append("imageFile", imageFile);

    try{
        const result = await apiCall.post(`${BLOG_API}/file/upload/image`,data);

        if(result.status === 200 && result.data.code === 'SUCCESS'){
            return await `${IMAGE_API}/${result.data.data.originFileName}`;
        }else{
            return alert('이미지 업로드에 실패하였습니다.');
        }
    }catch (e){
        return alert('이미지 업로드에 실패하였습니다.');
    }

};
