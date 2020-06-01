const { User, Tech } = require('../models');

class TechController {
  async index(request, response) {
    const { userId } = request.params;
    const user = await User.findByPk(userId, {
      include: {
        association: 'techs',
        through: {
          attributes: [],
        },
      },
    });

    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    return response.json(user);
  }

  async store(request, response) {
    const { userId } = request.params;
    const { name } = request.body;

    // Verify if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name },
    });

    await user.addTech(tech);

    return response.json(tech);
  }

  async delete(request, response) {
    const { userId } = request.params;
    const { name } = request.body;

    // Verify if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    const tech = await Tech.findOne({ where: { name } });
    await user.removeTech(tech);

    return response.status(204).send();
  }
}

module.exports = new TechController();
