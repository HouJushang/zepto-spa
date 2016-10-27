import './sass/main.sass'
import Page from '../framwork/Page'
export default new Page({
    id: 'index',
    tpl: require('./tpl/index.html'),
    router: '/index',
    init(){
        // console.log('init')
    },
    before(){
        // console.log('befor');
    },
    after(){
        // console.log('after');
    }
});