export function getUrlParam(param) {
	var result = null,
       tmp = [];
	var items = window.location.search.substr(1).split("&");
	for (var index = 0; index < items.length; index++) {
		tmp = items[index].split("=");
		if (tmp[0] === param) result = decodeURIComponent(tmp[1]);
	}
	return result;
}

export function getApiURL(app, query) {
	var base = 'https://www.msaironline.com/qa1/api/';
	return base+app+query;
}

export function putInCart(prodID, qty, e){
	if(qty == null) {
		qty=1
	}
	var url = getApiURL('cart.php', '?id='+prodID+'&qty='+qty);
	fetch(url, {
		method: 'PUT',
		credentials: 'include'
	}).then(results => {
      return results.json();
    }).then((data) => {
    })
}


export const restRequest = (url, method, content, body) => (
  fetch(url, {
    method: method,
    headers: new Headers({
      'Content-Type': content,
      'Access-Control-Request-Method': method,
      // 'Authorization': localStorage.getItem(ACCESS_TOKEN)
    }),
    body
  })
  .then(response => Promise.all([response.status, response.json()])
  .then(([code, body]) => ({ code, body }))
  .catch(function(err) {
    console.log('Fetch Error :-S', err)
  })
));
