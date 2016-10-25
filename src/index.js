import Page from '../framwork/Page'
export default new Page({
    id: 'indexPage',
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