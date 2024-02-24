export default {
  login() {},
  async signup(context, payload) {
    const responce = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoWa6_WLxvIiud21zdLGzB952kmTLSpyU",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responceData = await responce.json();
    console.log(responceData);
    if (!responce.ok) {
      const error = new Error(responceData.message || "authentication failed");
      throw error;
    }
    context.commit("setUser", {
      token: responceData.idToken,
      userId: responceData.localId,
      tokenExpiration: responceData.expiresIn,
    });
  },
};
