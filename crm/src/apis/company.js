import Cookies from 'js-cookie';
async function getLists(entity) {
  // Default options are marked with *
  let token = "5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE";
  let url = `http://localhost:8000/api/${entity}`;
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function getDetail(entity, id) {
  // Default options are marked with *
  let token = "5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE";
  let url = `http://localhost:8000/api/${entity}/${id}`;
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
  
    const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));
  
    if (xsrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
  }

async function add(entity, data) {
    const csrfToken = getCookie('CSRF-TOKEN');
  let token = "5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE";
  let url = `http://localhost:8000/api/${entity}`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'X-CSRFTOKEN': Cookies.get('csrftoken'),
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function update(entity, data, id) {
    let token = "5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE";
    let url = `http://localhost:8000/api/${entity}/${id}`;
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function del(entity, id) {
    let token = "5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE";
    let url = `http://localhost:8000/api/${entity}/${id}`;
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export  { getLists, getDetail, add, update, del };
