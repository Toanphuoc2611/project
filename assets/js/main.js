const header__menu = document.getElementById('Menu--mb');
function closeMenu() {
    header__menu.classList.remove('showMenu');
}

    // An hien Menu cua mobile
function showMenuMobile() {
    header__menu.classList.toggle('showMenu');
};

function hideMenuMobile() {
    header__menu.classList.remove('showMenu');
};

// Show msBox
function showMessage(message,type){
    const messageBox= document.getElementById('message');

    messageBox.className=type;
    messageBox.innerText=message;
}
function animate(id){
            document.getElementById(id).classList.remove('headShake');
            document.getElementById(id).offsetWidth;
            document.getElementById(id).classList.add('headShake');
              
    }
function animate_success(id){
            document.getElementById(id).classList.remove('pulse');
            document.getElementById(id).classList.remove('headShake');
            document.getElementById(id).offsetWidth;
            document.getElementById(id).classList.add('pulse');
              
    }
     
    // Kiểm tra mật khẩu nhập lại

function register() {
    event.preventDefault();
    const username = document.getElementById('validationDefault01').value;
    const password = document.getElementById('validationDefault02').value;
    const comfirmPassword = document.getElementById('validationDefault03').value;

    if (username.indexOf(' ') != -1) {
             animate('account-container-register');
           showMessage("Vui lòng nhập tên người dùng không có khoảng trắng",'text-warning');
           return;
    };
    
    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) == username) {
             animate('account-container-register');
            showMessage("Tên người dùng đã tồn tại",'text-warning');
            return;
        }
    }
    if (password == comfirmPassword) {
        let user = {
            username: username,
            password: password,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(username, json);
        animate_success('account-container-register');
        showMessage("Đăng ký thành công",'text-success');
        setTimeout(()=>{
            // window.location.href= "logIn.html"
        },2000);
  
    } else {
         animate('account-container-register');
         showMessage("Mật khẩu nhập lại không giống",'text-warning');
    }   
};  



    // Đăng nhập tài khoản
 function redirect(){
    setTimeout(()=>{
         window.location.href = ("index.html");
     },1000);
}

function countDown() {
    console.log('abc');
     document.getElementById('redict-status').style.display="block";
    let count =3;
    document.getElementById('second').innerText=count;
    const Interval= setInterval(()=>{
        count--;
         document.getElementById('second').innerText=count;
          if(count==0){
            clearInterval(Interval);
            redirect();
    }
    },1000);
   
}


function logIn() {
    event.preventDefault();
    const username = document.getElementById('validationDefault01').value;
    const password = document.getElementById('validationDefault02').value;

    if (username.indexOf(' ') != -1) {
          animate('account-container');
        showMessage("Vui lòng nhập tên người dùng không có khoảng trắng",'text-warning');
        return;
    };

    let user = {
        username: username,
        password: password,
    };
    let json = JSON.stringify(user);
    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) == username) {
            if (json == localStorage.getItem(username)) {
                localStorage.removeItem(username);
                animate_success('account-container');
                showMessage("Đăng nhập thành công",'text-success');
                 countDown();
                return;
            } else {
                animate('account-container');
                 showMessage("Sai mật khẩu vui lòng nhập lại",'text-danger');
                
                 return;
            }
        }
    }
      animate('account-container');
      showMessage("Tên người dùng không tồn tại",'text-warning');
     return;
}
    // fruit__menu
show('trai-cay-mien-tay');

function clear(){
    let btns =document.getElementsByClassName('menu-btn');

    for(var i = 0, length = btns.length; i < length; i++){
        btns[i].className=btns[i].className.replace(" actived","");
    }
}
function clearItems(){
    let items=document.getElementsByClassName("items-container");
    for(var i = 0, length1 = items.length; i < length1; i++){
        items[i].style.display="none";
    }
}
function show(name){
    clear();
    clearItems();
    document.getElementById(name).style.display="flex";
    let btn= document.getElementById(name+'-btn');
    btn.classList.add('actived');

}