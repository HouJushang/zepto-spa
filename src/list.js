import Page from '../framwork/Page'
export default new Page({
    id: 'list',
    tpl: require('./tpl/list.html'),
    router: '/list',
    before(){
        alert(1);
    },
    init(){

    },
    after(){
        alert(1);
    },
    submit(){
        alert(1);
    }
});