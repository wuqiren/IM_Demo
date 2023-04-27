; ((document,localStorage) => {
    const oUserName =  document.querySelector('#username')
    const oEnterBrn = document.querySelector('#enter')
    
    function bindEvent() {
        oEnterBrn.addEventListener('click',handleEnterBtnClick,false)
    }
    function handleEnterBtnClick() {
        const username = oUserName.ariaValueMax.trim()
        if (username.length < 6) {
            alert('用户名不小于6位')
            return;
        }
        localStorage.setItem('username',username)
    }
})(document,localStorage)