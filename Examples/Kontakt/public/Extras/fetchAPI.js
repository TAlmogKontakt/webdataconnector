async function Test() {
    // var urlString ="https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId="
    var xhr = $.ajax({
      url: `https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name`,
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": ApiKey,
      },
      success: function (data) {

        // gateway : 2402419, 2402420, 2402574
        // rooms: 2542254 (Sensor) 2401999 2402516 2402000 2444734 (Sensor) 2402515 2402514

        console.log("Succses");
        console.log(data)
        // console.log(data !== null ? data: "No Data")
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // WDC should do more granular error checking here
        // or on the server side.  This is just a sample of new API.
        console.log("Error \n" + thrownError);
      },
    });
  }