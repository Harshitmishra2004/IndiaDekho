function showTab(tab) {
    const loginTab = document.getElementById('login');
    const registerTab = document.getElementById('register');
    const loginButton = document.querySelector('.tab-button:nth-child(1)');
    const registerButton = document.querySelector('.tab-button:nth-child(2)');

    if (tab === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginButton.classList.add('active');
        registerButton.classList.remove('active');
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        loginButton.classList.remove('active');
        registerButton.classList.add('active');
    }
}
