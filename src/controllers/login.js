import api from '../services/api';
import xmlToJson from '../services/xmlToJson';

class LoginController {

    async index(req, res) {
        const { user, code } = req.body;
        if (!user || !code) {
            return res.json({ error: 'User or Code is null' });
        }
        const response = await api.get(`login.php?user=${user}&scode=${code}`);

        const dados = Object.values(response.headers);
        const str = dados [7];
        const string = str[0];
        const cookie = string.split(';');
        const key = cookie[0].split('=');

        const data = await xmlToJson(response.data);
        data.xml = key[1];
        
        return res.json(data);
    }
}

export default new LoginController();