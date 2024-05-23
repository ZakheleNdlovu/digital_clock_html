let date = document.getElementById('date')
let time = document.getElementById('time')
let bt = document.getElementById('bt')

function tim(){
    let today = new Date
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let am_pm = h >= 12? 'pm' : 'am';
    
    m = m<10 ? '0' + m : m
    s = s<10 ? '0' + s : s
     
    h = (h % 12) || 12;
    h = h<10 ? '0' + h : h
    time.innerHTML = h + ':' + m + ':' + s + ' ' + am_pm

}

tim()
setInterval(tim,1000)



