const get_api_res_btn = document.getElementById('get_api_res_btn');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
get_api_res_btn.addEventListener('click', getAPI);


let endPoint = 'http://api.open-notify.org/iss-now.json';

    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        latitude.innerHTML=data.iss_position.latitude;
longitude.innerHTML=data.iss_position.longitude;
    });
}