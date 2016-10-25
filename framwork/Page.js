/**
 * Created by hou on 2016/10/25.
 */
export default class Page{
    constructor(obj){
        Object.assign(this,obj)
    }
    static changePage(){
        alert(1);
    }
}
