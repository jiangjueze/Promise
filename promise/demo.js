class Promise2 {
    
    resolve(){
        console.log('resolve')
    }

    reject(){
        console.log('reject')
    }

    constructor(fn){
        fn(this.resolve,this.reject)
    }
}

const getWeather = city => new Promise2((resolve,reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET','http://rap2api.taobao.org/app/mock/287976/getWeather?city='+city,true)
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText))
        }else {
            reject(`获取${city}天气失败`)
        }
    }
    xhr.send()
})

getWeather('北京')