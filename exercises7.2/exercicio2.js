const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

order.name = 'Luiz Silva';
order.payment.total = 50;

const orderModifier = (order) => {
  const novoPedido = `Olá ${order.name}, o total do seu pedido de muzzarella, calebresa e ${order.order.drinks.coke.type} é R$${order.payment.total}`
  return novoPedido;
}

console.log(orderModifier(order));