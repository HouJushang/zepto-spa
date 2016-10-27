import Page from '../framwork/Page'
import $ from 'webpack-zepto'
import router from '../framwork/router'
export default new Page({
    id: 'trainNumber',
    tpl: require('./tpl/trainNumber.html'),
    router: '/trainNumber',
    init(){
        $(document).on('click', '.submitButton', function () {
            let trainNumber = $('.searchBox input').val();
            router.changePage('/trainNumberResult','right')
        })
    },
    before(){
    },
    after(){
        console.log('after');
    }
});