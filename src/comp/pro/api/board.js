import api from '../ax/axiosSetting'

/**
 * 게시판 리스트
 * @param {} param 
 * @returns 
 */
export const BoardListLoad = (param) => {

    return api.get('/board/list', {
        params: param
    });
}
