import './sass/main.sass'
import Page from '../framwork/Page'
export default new Page({
    id: 'index',
    tpl: require('./tpl/index.html'),
    router: '/index',
    before(){
        alert(1);
    },
    init(){
        this.submit();
    },
    after(){
        alert(1);
    },
    submit(){
        alert(1);
    }
});