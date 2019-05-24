exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  console.log(user.email);
  console.log("identity yourself", context.clientContext.identity);

  const validateUser = email => {
    if (email.split("@")[1] === "netlify.com") {
      return ["editor"];
    } else {
      return ["visitor"];
    }
  };

  const roles = validateUser(user.email);

  const responseBody = {
    app_metadata: {
      roles,
      my_user_info: "this is user info that the user can't change from the UI"
    },
    user_metadata: {
      ...user.user_metadata,
      custom_data_from_function: "hurray this is some extra metadata"
    }
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};
