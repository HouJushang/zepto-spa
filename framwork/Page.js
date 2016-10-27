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
                self.before();
                self.changePage(Page.initHtml(obj.tpl, {b: '', a: '222'}), 'right');
            }
        })
        self.init();
    }
    changePage(html, type) {
        var appDom = $(`.app`);
        if (type) {
            let typeClass = `app_${type}`;
            let type2Class = type == 'left' ? `app_right` : 'app_left';

            $(`<div class='${typeClass}'></div>`).html(html).appendTo('.container');
            var typeDom = $(`.${typeClass}`);

            setTimeout(()=> {
                appDom.removeClass('app').addClass(type2Class);
                typeDom.removeClass(typeClass).addClass('app');
                setTimeout(()=> {
                    appDom.remove();
                    this.after();
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

