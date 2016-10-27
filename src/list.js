import Page from '../framwork/Page'
export default new Page({
    id: 'list',
    tpl: require('./tpl/list.html'),
    router: '/list',
    init(){
        console.log('init');
    },
    before(){
        alert(1);
    },
    after(){
        // alert(1);
    },
    submit(){
        // alert(1);
    }
});