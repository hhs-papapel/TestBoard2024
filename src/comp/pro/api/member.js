import api from '../ax/axiosSetting'

/**
 * 로그인  체크
 * @param {userId: 검사 아이디, userPw: 검사 패스워드} obj 
 * @returns 
 */
export const LoginCheck = (obj) => {
    return api.post('/member/login', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
