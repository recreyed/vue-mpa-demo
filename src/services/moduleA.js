// 统一请求管理
import request from './http'

export function s3Login(data) {
    return request({
        url: '/noauth/b2api/v2/b2_authorize_account',
        method: 'post',
        headers: {'Authorization': 'Basic ' + window.btoa('0046936908420cb0000000003:K004Em+D6SNqHt/Yz04T9vROvSMSomE')},
        data
    })
}

export function s3FileList(data) {
    return request({
        url: '/auth/b2api/v2/b2_list_file_names',
        method: 'post',
        headers: {'Authorization': '4_0046936908420cb0000000003_01a98bf4_6d5ed7_acct_pj4RdsHnllGABBzWQUXmEf1fvPo='},
        data
    })
}

export function s3FileInfo(data) {
    return request({
        url: '/auth/b2api/v2/b2_get_file_info',
        method: 'post',
        headers: {'Authorization': '4_0046936908420cb0000000003_01a98bf4_6d5ed7_acct_pj4RdsHnllGABBzWQUXmEf1fvPo='},
        data
    })
}