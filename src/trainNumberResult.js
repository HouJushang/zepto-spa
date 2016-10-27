import Page from '../framwork/Page'
import $ from 'webpack-zepto'
import router from '../framwork/router'
export default new Page({
    id: 'trainNumberResult',
    tpl: require('./tpl/trainNumberResult.html'),
    router: '/trainNumberResult',
    init(){
        $(document).on('click','#trainNumberResult header .back',function(){
            router.changePage('/trainNumber','left')
        })
    },
    before(){

    },
    after(){
    }
});