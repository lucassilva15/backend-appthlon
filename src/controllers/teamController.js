import api from '../services/api';
import convertJson from '../services/xmlToJson';

class teamController{

    async index(req, res){
        const { xml } = req.headers;

        const response = await api.get('team.php', {
            headers: {
                Cookie: `xml=${xml}`,
            }
        });

        console.log(response);

        const data = await convertJson(response.data);

        return res.json(data);
    }

}

export default new teamController();