import Page from '../framwork/Page'
export default new Page({
    id: 'trainNumber',
    tpl: require('./tpl/trainNumber.html'),
    router: '/trainNumber',
    init(){
        console.log('trainNumber');
    },
    before(){

    },
    after(){
    }
});