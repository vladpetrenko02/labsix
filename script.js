async function download(){
    const image = document.getElementById('image');
    const name = document.getElementById('name');
    const country = document.getElementById('country');
    const postcode = document.getElementById('postcode');
    const phone = document.getElementById('phone');

    let url = 'https://randomuser.me/api/';
    let response = await fetch(url);

    let data = await response.json();

    let t = data.results[0].picture.large;
    let insert = `<img src=${t}>`;
    image.innerHTML = insert;

    t = data.results[0].name.title;
    let t1 = data.results[0].name.first;
    let t2 = data.results[0].name.last;
    insert = '<p class = "options"><b>Name: </b>' + t + ' ' + t1 + ' ' + t2 + '</p>';
    name.innerHTML = insert;

    t = data.results[0].location.country;
    insert = '<p class = "options"><b>Country: </b>' + t + '</p>';
    country.innerHTML = insert;

    t = data.results[0].location.postcode;
    insert = '<p class = "options"><b>Postcode: </b>' + t + '</p>';
    postcode.innerHTML = insert;

    t = data.results[0].phone;
    insert = '<p class = "options"><b>Phone number: </b>' + t + '</p>';
    phone.innerHTML = insert;
}


