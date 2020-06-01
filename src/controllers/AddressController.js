const { Address, User } = require('../models');

class AddressController {
  async index(request, response) {
    const { userId } = request.params;

    // Verify if user exists
    const user = await User.findByPk(userId, {
      include: { association: 'addresses' },
    });

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(user);
  }

  async store(request, response) {
    const { userId } = request.params;
    const { zipcode, street, number } = request.body;

    // Verify if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id: userId,
    });

    return response.json(address);
  }
}

module.exports = new AddressController();
