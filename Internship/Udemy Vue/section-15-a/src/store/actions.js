export default {
  login(context) {
    console.log(context);
    context.commit("setAuth", { isAuth: true });
  },

  logout(context) {
    console.log(context);
    context.commit("setAuth", { isAuth: false });
  },
};
