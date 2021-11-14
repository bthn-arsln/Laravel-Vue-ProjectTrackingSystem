export default (to, from, next) => {
    let auth = JSON.parse(localStorage.getItem("user"));
    if (auth.user.role.name == "Proje Yöneticisi") {
        next();
    } else if (auth.user.role.name == "Geliştirici") {
        next("/");
        location.reload();
    }
};
