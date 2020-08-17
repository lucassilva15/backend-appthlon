import api from '../services/api';
import convertJson from '../services/xmlToJson';

class HomeController {
  async index(req, res) {
    const { xml } = req.headers;

    const response = await api.get('team.php', {
      headers: {
        Cookie: `xml=${xml}`,
      },
    });

    const data = await convertJson(response.data);

    return res.json(data);
  }
}

export default new HomeController();
