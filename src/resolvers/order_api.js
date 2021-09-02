const orderResolver = {
  Query: {
    orderByIdUser: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.oderAPI.orderByIdUser(userId);
      else return null;
    },
  },
  Mutation: {
    createOrder: (_, { order }, { dataSources, userIdToken }) => {
      if (order.userIdOrigin == userIdToken)
        return dataSources.oderAPI.createOrder(order);
      else return null;
    },
  },
};

module.exports = orderResolver;
