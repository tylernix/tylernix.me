import axios from 'axios'

const buttondownKey = process.env.BUTTONDOWN_API_KEY;
export default async function Signup(req, res) {
    let config = {
        headers: {
            'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`
        }
    }
    let data = {
        email: req.body.emailAddress,
        referrer_url: req.path
    }
    let response = await axios.post('https://api.buttondown.email/v1/subscribers', data, config);
    return res.status(200).json(response.data)
}



