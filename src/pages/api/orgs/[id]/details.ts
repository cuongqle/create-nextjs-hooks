import orgs from '../organizations.json';

export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const {
        query: { id },
    } = req
    res.end(JSON.stringify(orgs.find(org => org.id === id)))
}
