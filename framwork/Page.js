/**
 * Created by hou on 2016/10/25.
 */
import $ from 'webpack-zepto'
import Handlebars from 'handlebars'
import router from './router'


export default class Page {
    constructor(obj) {
        var self = this;
        Object.assign(self, obj);
        router.add(obj.id, {
            url: obj.router,
            ctrl(){
                console.log(obj.router + '路由切换成功');
                self.changePage(Page.initHtml(obj.tpl, {b: '', a: '222'}), 'right');
            }
        })
    }
    changePage(html, type) {
        var appDom = $(`.app`);
        if (type) {
            let type2 = type == 'left' ? 'right' : 'left';
            $(`<div id="app" class="app_${type}"></div>`).html(html).appendTo('.container');
            var typeDom = $(`.app_${type}`);
            setTimeout(()=> {
                appDom.removeClass('app').addClass(`app_${type2}`);
                typeDom.removeClass(`app_${type}`).addClass('app');
                setTimeout(()=> {
                    appDom.remove();
                }, 300)
            }, 1)
        } else {
            $('.app').html(html);
        }

    }

    static initHtml(tpl, data) {
        let template = Handlebars.compile(tpl);
        let html = template(data);
        return html;
    }

    static changePage() {
        alert(1);
    }
}

