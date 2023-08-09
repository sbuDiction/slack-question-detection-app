const messageListenerCallback = async ({ message }) => {
  try {
    const { user } = message;
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { messageListenerCallback };
