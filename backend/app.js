const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

app.get('/', (req, res) => res.send('Hello from Node.js'));

app.use(cors());

app.get('/weather', function(req, res, next) {
	const url = 'https://samples.openweathermap.org/data/2.5/forecast?id=2643743&appid=b6907d289e10d714a6e88b30761fae22';
	request.get(url, (error, response, body) => {
		let json = JSON.parse(body);
		res
			.status(200)
			.json(json)
			.end();
	});
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} http://localhost:${port}`));
