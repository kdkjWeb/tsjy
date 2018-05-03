/**
 * Created by kdkjPC on 2018/4/27.
 */
const Interface = {};

/**
 * login
 */
Interface.login = 'login';
Interface.logout = 'logout';
/**
 * user
 */
Interface.userAdd = "user/add";  //注册
Interface.userUpdate = "user/update"; //忘记密码
Interface.userInformation = "user/selectOption" ; //个人用户信息
/**
 * upload
 */
Interface.uploadFile = 'uploadFile';     //上传单个图片，换取地址
Interface.uploadImgFiles = 'uploadImgFiles'; //上传多个图片，换取地址
Interface.uploadUnionFile = 'uploadUnionFile'; //上传视频文件，或者音乐文件，换取地址
/**
 * 所有以及页面查询信息
 */
Interface.newsQuery = 'news/query';  //所有一级页面查询接口
Interface.findOneById = 'news/findOneById';  //所有一级页面详情
Interface.newAdd = 'news/add';

/**
 * 网红页面查询信息
 */
Interface.memeQuery = 'meme/query'; //网红个人展示
Interface.memeQueryImgs = 'meme/queryImgs'; //网红个人图集
Interface.memefindOneById = 'meme/findOneById'; //网红个人展示 详情
Interface.findImgsById = 'meme/findImgsById'; //网红个人图集 详情


export default Interface;
