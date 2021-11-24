 // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=trackingId&trackingId=79:9a:b4:bf:a6:24&startTime=2020-03-27T08:00:00.000000Z&endTime=2021-11-17T08:00:00.000000Z`,
      // url: `https://apps-api.test.kontakt.io/v2/entities/types?page=0&size=50&sort=name`, 
      // url: `https://apps-api.test.kontakt.io/v3/occupancy-history`, //room history
      // url: `https://apps.cloud.us.kontakt.io/v3/occupancy?page=0&size=2&sort=trackingId`,
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=trackingId&startTime=2020-03-27T08:00:00.000000Z&endTime=2021-11-17T08:00:00.000000Z`,
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId=25938`,
      // url: `https://apps-api.test.kontakt.io/v2/positions/history?page=0&size=20&sort=timestamp&startTime=2021-01-17T15:36:21.551975Z`,
      // url: `https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name`, //room list
      // url: `https://apps-api.test.kontakt.io/v3/occupancy-history?page=0&size=2&sort=roomId&roomId=2542254&floorId=2402058&buildingId=2402494`,
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId=2542254`, //Holy grail
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=50&sort=roomId&startTime=2021-10-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId=2542254`,
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId=2542254`,
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId=2542254`,
      // url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z&roomId=2542254`,

    //   async function xhr2() {
    //     return $.ajax({
    //       url: `https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${sensorRoomIDs.at(1)}`,
    //       dataType: "json",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Api-Key": ApiKey,
    //       },
    //       success: function (data) {

    //         const array = data.content;
    //         for (let index = 0; index < array.length; index++) {
    //           var venue = {
    //             RoomId: array[index].roomId,
    //             Occupancy: array[index].occupancy,
    //             StartTime: array[index].startTime,
    //             EndTime: array[index].endTime,
    //             // Location: array[index].latLngGeojson,

    //           };
    //           dataToReturn.push(venue);
    //         }
    //         table.appendRows(dataToReturn);
    //         console.log(data);
    //         console.log("XHR2");


    //       },
    //       error: function (xhr, ajaxOptions, thrownError) {
    //         // WDC should do more granular error checking here
    //         // or on the server side.  This is just a sample of new API.
    //         tableau.abortForAuth("Invalid Access Token");
    //       },
    //     });
    //   }
