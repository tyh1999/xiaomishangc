//Storage封装
const STORANG_KEY = 'mall';
export default{
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }
        else{
            let val = this.gitStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORANG_KEY,JSON.stringify(val));
        }    
    },
    //获取某个模块下的属性,例user下的userName
    getItem(key,module_name){
        if (module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.gitStorage()[key];
    },
    //获取缓存
    gitStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORANG_KEY) || '{};')
    },
    clear(key,module_name){
        let val = this.gitStorage();
        if(module_name){
            if(!val[module_name])return;
            delete val[module_name][key];
        }
        else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORANG_KEY,JSON.stringify(val));
    }
}