const { Op } = require('sequelize');
const { User } = require('../models');

class ReportController {
  async index(request, response) {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@rocketseat.com.br',
        },
      },
      include: [
        { association: 'addresses', where: { street: 'Some random street' } },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'react%',
            },
          },
        },
      ],
    });

    return response.json(users);
  }
}

module.exports = new ReportController();
