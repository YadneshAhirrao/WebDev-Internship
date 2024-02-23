export default {
  async contactCoach(context, payload) {
    const newRequest = {
      //   id: new Date().toISOString(),
      //   coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    const responce = await fetch(
      `https://vue-demo-340ca-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await responce.json();

    if (!responce.ok) {
      const error = new Error(responseData.message || "failed to send request");
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit("addRequest", newRequest);
  },

  async fetchRequest(context) {
    const coachId = context.rootGatter.userId;
    const responce = await fetch(
      `https://vue-demo-340ca-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await responce.json();

    if (!responce.ok) {
      const error = new Error(
        responseData.message || "failed to fetch requests"
      );
      throw error;
    }

    const request = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      request.push(request);
    }
    context.commit("setRequest", request);
  },
};
