import api from '../services/api';
import xmlToJson from '../services/xmlToJson';

class LoginController {
  async index(req, res) {
    const { user, scode } = req.body;
    if (!user || !scode) {
      return res.json({ error: 'User or Code is null' });
    }
    const response = await api.get('login.php', {
      params: {
        user,
        scode,
      },
    });

    const dados = Object.values(response.headers);
    const str = dados[7];
    const string = str[0];
    const cookie = string.split(';');
    const key = cookie[0].split('=');

    const data = await xmlToJson(response.data);
    // eslint-disable-next-line prefer-destructuring
    data.xml = key[1];

    return res.json(data);
  }
}

export default new LoginController();
