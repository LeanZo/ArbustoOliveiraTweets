var username = 'ArbustoOliveira';

$.ajax({
    url: 'https://api.twitter.com/2/users/by/username/' + username,
    type: 'GET',
    contentType: 'application/json',
    headers: {
       'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANoIHAEAAAAA%2B8PBnQ0VSD7ugB8zADhiopqFIAM%3DWqMQkqfuTSzv71LyPRBXldYJx7N6WImUmLMGZDOzbweLbvWlKa'
    },
    success: function (result) {
        console.log(result);
    },
    error: function (error) {
        console.log(error);
    }
 });