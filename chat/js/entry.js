; ((document,localStorage,location) => {
    const oUserName =  document.querySelector('#username')
    const oEnterBrn = document.querySelector('#enter')
    const init = () => {
        bindEvent()
    }
    function bindEvent() {
        oEnterBrn.addEventListener('click',handleEnterBtnClick,false)
    }
    function handleEnterBtnClick() {
        const username = oUserName.value.trim()
        if (username.length < 6) {
            alert('用户名不小于6位')
            return;
        }
        localStorage.setItem('username', username)
        location.href='index.html'
    }
    init()
})(document, localStorage,location)


// 计算两个日期之间的天数