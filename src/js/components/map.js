const findMyState = () => {
    const status = document.querySelector('.location');

    const success = (position) => {
        // console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log('latitude ' + latitude + ' longitude ' + longitude);

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude==${longitude}&localityLanguage=en`;

        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                status.textContent = data.principalSubdivision;
            })
    }

    const error = () => {
        status.textContent = "Odessa";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}
findMyState();
