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

/**
 * 게시판상세보기
 * @param {} param 
 * @returns 
 */
export const BoardDetailLoad = (param) => {

    return api.get('/board/find', {
        params: param
    });
}

/**
 * 게시판추천하기
 * @param {}
 * @returns 
 */
export const BoardDetailgood = (obj) => {
    return api.post('/board/good', JSON.stringify(obj))
}

/**
 * 게시판등록하기
 * @param {}
 * @returns 
 */
export const BoardUserWrite = (obj) => {
    return api.post('/board/regist', JSON.stringify(obj))
}

/**
 * 게시판삭제하기
 * @param {}
 * @returns 
 */
export const BoardUserDelete = (obj) => {
    return api.post('/board/remove', JSON.stringify(obj))
}

/**
 * 게시판수정하기
 * @param {}
 * @returns 
 */
export const BoardUserUpdate = (obj) => {
    return api.post('/board/modify', JSON.stringify(obj))
}

