let baseURL;
switch (process.env.NODE_ENV){
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'text':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://pre-mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-mall-pre.springboot.cn/api';
        break;
}

export default{
    baseURL
}