const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('locationKey', '<REQUIRED>');

const options = {
  method: 'POST',
  url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'a12a030438msh1badaae85621a90p162105jsn9125aeb8a4f2',
    'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
