import { parseString } from 'xml2js';

export default async function parseXml(xml) {
    const data =  new Promise((resolve, reject) => {
        parseString(xml, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(Object.values(result));
            }
        });
    });

    const json = await Promise.resolve(data).then(function (value) {
        return value[0];
    })
    return json;
}