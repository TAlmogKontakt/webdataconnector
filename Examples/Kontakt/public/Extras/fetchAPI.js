
export class API {
  constructor(ApiKey) {
    this.ApiKey = ApiKey;
  };
  async test() {

    const response = await fetch("https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name", {
      "method": "GET",
      dataType: "json",
      "headers": {
        "Content-Type": "application/json",
        "Api-Key": this.ApiKey
      }
    });
    return response.json();

  };
  async basicGet(url) {
    const response = await fetch(url, {
      "method": "GET",
      dataType: "json",
      "headers": {
        "Content-Type": "application/json",
        "Api-Key": this.ApiKey
      }
    });
    return response.json();
  }
  // async seatsGet(roomId) {
  //   // var urlString ="https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId="
  //   return $.ajax({
  //     url: `https://apps.cloud.us.kontakt.io/v3/occupancy/room-attributes/history&roomId=${roomId}`,
  //     dataType: "json",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Api-Key": this.ApiKey,
  //     },
  //     success: function (data) {

  //       // gateway : 2402419, 2402420, 2402574
  //       // rooms: 2542254 (Sensor) 2401999 2402516 2402000 2444734 (Sensor) 2402515 2402514

  //       return data;
  //       // console.log(data !== null ? data: "No Data")
  //     },
  //     error: function (xhr, ajaxOptions, thrownError) {
  //       // WDC should do more granular error checking here
  //       // or on the server side.  This is just a sample of new API.
  //       console.log("Error \n" + thrownError);
  //     },
  //   });
  // }
  async getRoomIds() {
    return $.ajax({
      url: `https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name`,
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": this.ApiKey,
      },
      success: function (data) {

        // gateway : 2402419, 2402420, 2402574
        // rooms: 2542254 (Sensor) 2401999 2402516 2402000 2444734 (Sensor) 2402515 2402514

        return data;
        // console.log(data !== null ? data: "No Data")
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // WDC should do more granular error checking here
        // or on the server side.  This is just a sample of new API.
        console.log("Error \n" + thrownError);
      },
    });
  }
  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json'
        "Accept": "application/vnd.com.kontakt+json;version=10",
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }
}
// https://apps.cloud.us.kontakt.io/v3/occupancy/room-attributes/history