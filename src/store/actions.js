export default {
    FETCH_NOTES_FROM_DB:({ commit })=>{
        let url = ""
     new Promise(function (resolve, reject) {
         if(stubData)
            {
                commit('NOTES', { 'data': stubData });
                resolve(stubData);
            }
            else
            {
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            var contentType = response && response.headers ? response.headers.get("content-type") : null;
            if(contentType && contentType.includes("application/json")) {
              return response.json().then(function (data) {
                response.data = data;
                return response;
              })
            } else {
              return response.text().then(function (data) {
                response.data = data;
                return response;
              })
            }
          })
          .then(function (response) {
            if(response && response.ok && response.data) {
              resolve(response.data);
            } else {
              var error = {response};
              throw(error);
            }
          })
          .catch(function (error) {
            reject(error);
          })
        }
        })
    }
}

var stubData = [
        {
            'keywords': 's9, phones, 64gb',
            'content': 'S9 one of the best mobile',
            'timestamp': 1551676413974
        },
        {
            'keywords': 's8, phones, 64gb',
            'content': 'S8 one of the best mobile',
            'timestamp': 1551676413874
        },
        {
            'keywords': 's10, phones, 64gb',
            'content': 'S10 one of the best mobile',
            'timestamp': 1551676413774
        },
    ]