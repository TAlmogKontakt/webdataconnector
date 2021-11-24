(function () {
  // import HelloWorld from "./components/HelloWorld.vue";
  import * as get from "./Extras/fetchAPI.js"
  "use strict";


  // var test = $.ajax({
  //   url: `https://apps.cloud.us.kontakt.io/v2/locations/floors?page=0&size=50&sort=name`,
  //   dataType: "json",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Api-Key": "ilcGMcUsxAQEUWGHZPHiCTCqVafdMfFx",
  //   },
  //   success: function (data) {
  //     console.log("Succsess");
  //     console.log(data);
  //     const array = data.content;
  //     console.log(array);
  //     // for (let index = 0; index < array.length; index++) {
  //     //   var venue = {
  //     //     Id: array[index].id,
  //     //     Address: array[index].address,
  //     //     Name: array[index].name,
  //     //     Location: array[index].latLngGeojson,
  //     //   };
  //     //   console.log(venue);
  //     // }
  //   },
  //   error: function (xhr, ajaxOptions, thrownError) {
  //   },
  // });
  var config = {
    clientId: "OWMVRPSNUVEUDVLXJUUJEO0AWKVF3ELQPVWVSAMV5IDWZXC3",
    redirectUri: "http://localhost:3333/redirect",
    authUrl: "https://foursquare.com/",
    version: "20190102",
  };


  const ApiKey = "czxyAeSyhSBcCliKkhdaSIDBaidYIBff";

  var sensorRoomIDs = [2542254, 2444734];

  $(document).ready(function () {
    // uncomment for test
    // test;
    $("#getbuildingsbutton").click(function () {

      tableau.connectionName = "Kontakt.io Data";
      tableau.submit();
    });


    // const res = await fetch(
    //   "https://apps.cloud.us.kontakt.io/v2/organization/account/me",
    //   // https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=2&sort=roomId&startTime=2021-11-17T15:46:35.321Z&endTime=2021-11-17T15:49:55.321Z
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Api-Key": ApiKey,
    //     },
    //   }
    // );
    // const data = await res.json();
    // console.log(data);

    // getOcc();
    // getFloors();
    // getTest();
    get.test();

  });

  // todo
  // async function setSensorRoomIDs() {}

  async function getAPIPages(url, callBack) {
    return $.ajax({
      url: url,
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": ApiKey,
      },
      success: function (data) {
        callBack(data);
      }
    });
  }


  

  //------------- Tableau WDC code -------------//
  // Create tableau connector, should be called first
  var myConnector = tableau.makeConnector();

  // add this after tableau.makeConnector() function.

  // The myConnector.getSchema() goes here

  // Declare the data to Tableau that we are returning from Foursquare
  myConnector.getSchema = function (schemaCallback) {
    var schema = [];


    var cols = [
      {
        id: "Id",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Address",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Name",
        dataType: tableau.dataTypeEnum.string,
      },
      // {
      //   id: "Location",
      //   dataType: tableau.dataTypeEnum.geometry,
      // },
    ];

    var tableInfo = {
      id: "Buildings",
      columns: cols,
    };

    schema.push(tableInfo);

    cols = [
      {
        id: "Id",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "BuildingId",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Name",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Level",
        dataType: tableau.dataTypeEnum.float,
      },
    ];

    tableInfo = {
      id: "Floors",
      columns: cols,
    };

    schema.push(tableInfo);

    var cols = [
      {
        id: "RoomId",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "StartTime",
        dataType: tableau.dataTypeEnum.datetime,
      },
      {
        id: "EndTime",
        dataType: tableau.dataTypeEnum.datetime,
      },
      {
        id: "Occupancy",
        dataType: tableau.dataTypeEnum.float,
      },
    ];

    var tableInfo = {
      id: "Occupancy",
      columns: cols,
    };

    schema.push(tableInfo);

    cols = [
      {
        id: "Id",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "FloorId",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Name",
        dataType: tableau.dataTypeEnum.string,
      },
    ];

    var tableInfo = {
      id: "Rooms",
      columns: cols,
    };

    schema.push(tableInfo);

    schemaCallback(schema);
  };

  // This function actually make the foursquare API call and
  // parses the results and passes them back to Tableau
  myConnector.getData = async function (table, doneCallback) {
    // begining
    var dataToReturn = [];

    // var hasMoreData = false;

    // var accessToken = tableau.password;\
    // branch to table
    if (table.tableInfo.id == "Buildings") {
      var xhr = $.ajax({
        url: `https://apps-api.test.kontakt.io/v2/locations/buildings?page=0&size=50&sort=name`,
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": ApiKey,
        },
        success: function (data) {

          const array = data.content;
          for (let index = 0; index < array.length; index++) {
            var venue = {
              Id: array[index].id,
              Address: array[index].address,
              Name: array[index].name,
              // Location: array[index].latLngGeojson,
            };
            dataToReturn.push(venue);
          }
          table.appendRows(dataToReturn);
          console.log(data);


        },
        error: function (xhr, ajaxOptions, thrownError) {
          // WDC should do more granular error checking here
          // or on the server side.  This is just a sample of new API.
          tableau.abortForAuth("Invalid Access Token");
        },
      });
      $.when(xhr).done(function (data) {
        doneCallback();
      });

    } else if (table.tableInfo.id == "Floors") {
      var xhr = $.ajax({
        url: `https://apps-api.test.kontakt.io/v2/locations/floors?page=0&size=50&sort=name`,
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": ApiKey,
        },
        success: function (data) {

          const array = data.content;
          for (let index = 0; index < array.length; index++) {
            var venue = {
              Id: array[index].id,
              BuildingId: array[index].building.id,
              Name: array[index].name,
              Level: array[index].level,
            };
            dataToReturn.push(venue);
          }
          table.appendRows(dataToReturn);
          console.log(data);
          doneCallback();
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // WDC should do more granular error checking here
          // or on the server side.  This is just a sample of new API.
          tableau.abortForAuth("Invalid Access Token");
        },
      });
    } else if (table.tableInfo.id == "Rooms") {
      var xhr = $.ajax({
        url: `https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name`,
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": ApiKey,
        },
        success: function (data) {

          const array = data.content;
          for (let index = 0; index < array.length; index++) {
            var venue = {
              Id: array[index].id,
              FloorId: array[index].floor.id,
              Name: array[index].name,
            };
            dataToReturn.push(venue);
          }
          table.appendRows(dataToReturn);
          console.log(data);
          doneCallback();
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // WDC should do more granular error checking here
          // or on the server side.  This is just a sample of new API.
          tableau.abortForAuth("Invalid Access Token");
        },
      });

    } else if (table.tableInfo.id == "Occupancy") {
      var sensorRoomIDs = [2542254, 2444734];
      var allRoomIds = [];
      const startTime = "2021-11-17T08:00:00.000000Z";
      const endTime = "2021-11-17T20:00:00.000000Z";
      // sensorRoomIDs.forEach
      const getOccupancyFunctionList = [];
      // console.log(getOccupancyFunctionList.dataType);

      console.log(table.tableInfo.id);
      console.log("Test")
      console.log(sensorRoomIDs[0]);
      var roomOnePages = 0, roomTwoPages = 0;
      await getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${sensorRoomIDs[0]}`, (data) => {
        roomOnePages = data.page.totalPages;
      })
      await getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${sensorRoomIDs[1]}`, (data) => {
        roomTwoPages = data.page.totalPages;
      })
      console.log(roomOnePages);
      console.log(roomTwoPages);

      const xhr = async function (roomID, pageNum) {
        return $.ajax({
          url: `https://apps-api.test.kontakt.io/v3/occupancy?page=${pageNum}&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${roomID}`,
          dataType: "json",
          headers: {
            "Content-Type": "application/json",
            "Api-Key": ApiKey,
          },
          success: function (data) {

            const array = data.content;
            for (let index = 0; index < array.length; index++) {
              var venue = {
                RoomId: array[index].roomId,
                Occupancy: array[index].occupancy,
                StartTime: array[index].startTime,
                EndTime: array[index].endTime,
                // Location: array[index].latLngGeojson,

              };
              // console.log("XHR = " + index);
              dataToReturn.push(venue);
            }
            table.appendRows(dataToReturn);
            console.log(data);
            console.log("XHR1");


          },
          error: function (xhr, ajaxOptions, thrownError) {
            // WDC should do more granular error checking here
            // or on the server side.  This is just a sample of new API.
            tableau.abortForAuth("Invalid Access Token");
          },
        });
      };
      getOccupancyFunctionList.push(xhr);


      // todo fix prefred
      // console.log("getOccupancyFunctionList:")
      // getOccupancyFunctionList.forEach((item) => {
      //   console.log(item.name);
      //   // item();
      // })
      console.log("Ahh:")
      for (let index = 0; index < roomOnePages; index++) {

        await xhr(sensorRoomIDs[0], index);
      }
      console.log("Ahh2:")
      for (let index = 0; index < roomTwoPages; index++) {

        await xhr(sensorRoomIDs[1], index);
      }
      doneCallback();

      // $.when(getOccupancyFunctionList, xhr2()).done(function () {
      //   doneCallback();
      // });
      // Promise.all().then(() => {
      //   doneCallback();
      // }).catch(() => {
      //   // all requests finished but one or more failed
      // })

      // $.when(...getOccupancyFunctionList, xhr2()).done(function () {
      //   doneCallback();
      // });

    }



  };

  // Register the tableau connector, call this last
  tableau.registerConnector(myConnector);
})(); // end of anonymous function
