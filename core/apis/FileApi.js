import axios from 'axios';

const tempPhotoServerUrl = 'http://www.woolta.com:81';

export const saveImageAndGetImageUrl = async (imageFile) => {
    let data = new FormData();
    data.append("file", imageFile);

    try{
        const result = await axios.post(`${tempPhotoServerUrl}/api/board/insert_image`,data, {
            withCredentials: false,
            onUploadProgress: (e) => {
                if (window.nanobar) {
                    window.nanobar.go(e.loaded / e.total * 100);
                }}
        });
        const { state, img_url } = await result.data;

        if(state !== 'success'){
            return await '12';
        }else{
            return await `${tempPhotoServerUrl}/uploads/${img_url}`;
        }
    }catch (e){
        return await '34';
    }

};