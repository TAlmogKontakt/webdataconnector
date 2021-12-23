import { API } from "./Extras/fetchAPI.js";
import { KontaktResponseObject as RespObjt  } from "./Extras/KontaktResponseObject.js";
(async function () {
  "use strict";
  // import HelloWorld from "./components/HelloWorld.vue";

  // VEyGCTqKcGlPdlelvtXZXQnwCBzZSegB



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
  const millisecondsPerSecond = 1000, secondsPerMinute = 60, minutesPerHour = 60, hoursPerDay = 24, daysToRead = 10;

  $(document).ready(function () {
  //  Start of ready code
    $("#getbuildingsbutton").click(async function () {

      tableau.connectionName = "Kontakt.io Data";
      tableau.submit();
    });

    var getter = new API(ApiKey);
    // getter.test().then( data => {
    //   var x  = new RespObjt(data);
      console.log( "Hello?")
    // });
    let data = await getter.basicGet("https://apps-api.test.kontakt.io/v3/occupancy/room-attributes/history?roomId=2444734");
    var x  = new RespObjt(data, ApiKey);
    //   // console.log("Mark 1");
    //   // x.getAllPageURLs();
     
    //   // console.log( x.links[0].href);
    //   // var y = [];
    //   // x.returnData(x.links[0].href,y );
      let y =  await x.getAllData();
      console.log(y);
    // fetch("https://apps-api.test.kontakt.io/v3/occupancy/room-attributes/history?roomId=2444734", {
    //   "method": "GET",
    //   "headers": {
    //     "Content-Type": "application/json",
    //     "Api-Key": ApiKey
    //   }
    // })
    // .then(response => {
    //   console.log(response.json().then(data => {
    //           console.log(data);
    //         }));
    // })
    // .catch(err => {
    //   console.error(err);
    // });
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
        id: "Time",
        dataType: tableau.dataTypeEnum.datetime,
      },
      {
        id: "Occupancy",
        dataType: tableau.dataTypeEnum.float,
      }
    ];

    var tableInfo = {
      id: "Occupancy",
      columns: cols,
    };

    schema.push(tableInfo);

    var cols = [
      {
        id: "RoomId",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Time",
        dataType: tableau.dataTypeEnum.datetime,
      },
      {
        id: "Occupancy",
        dataType: tableau.dataTypeEnum.float,
      }
    ];

    var tableInfo = {
      id: "Seats",
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

    cols = [
      {
        id: "Id",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Name",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "RoomId",
        dataType: tableau.dataTypeEnum.float,
      },
    ];

    var tableInfo = {
      id: "Spaces",
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
    // sets up time variables
    var today = new Date();
      const endTime = today.toISOString();
      today.setTime(today.getTime() - daysToRead * hoursPerDay * minutesPerHour * secondsPerMinute * millisecondsPerSecond);
      const startTime = today.toISOString(); 

    // var hasMoreData = false;

    // var accessToken = tableau.password;\
    // branch to table
    var getter = new API(ApiKey);
    if (table.tableInfo.id == "Buildings") { // Uses API endpoint to get building information directly
      getter.basicGet("https://apps-api.test.kontakt.io/v2/locations/buildings?page=0&size=50&sort=name").then(function (data) {
        const array = data.content;
        for (let index = 0; index < array.length; index++) {
          var venue = {
            Id: array[index].id,
            Address: array[index].address,
            Name: array[index].name,
          };
          dataToReturn.push(venue);
        }
        table.appendRows(dataToReturn);
        console.log(data);
        doneCallback();
      });

    } else if (table.tableInfo.id == "Floors") { // Uses API endpoint to get floor information directly
      getter.basicGet("https://apps-api.test.kontakt.io/v2/locations/floors?page=0&size=50&sort=name").then(function (data) {
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
      });

    } else if (table.tableInfo.id == "Rooms") { // Uses API endpoint to get room information directly
      getter.basicGet("https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=50&sort=name").then(function (data) {
        const array = data.content;
        for (let index = 0; index < array.length; index++) {
          var venue = {
            Id: array[index].id,
            FloorId: array[index].floor.id,
            Name: array[index].name,
            // Location: array[index].latLngGeojson,
          };
          dataToReturn.push(venue);
        }
        table.appendRows(dataToReturn);
        console.log(data);
        doneCallback();
      });



    } else if (table.tableInfo.id == "Spaces") { // Uses API endpoint to get building information directly

      getter.basicGet("https://apps-api.test.kontakt.io/v2/locations/spaces?sort=name&page=0").then(function (data) {
        const array = data.content;
        for (let index = 0; index < array.length; index++) {
          for (let jndex = 0; jndex < array[index].roomIds.length; jndex++) {
          var venue = {
            Id: array[index].id,
            RoomId: array[index].roomIds[jndex],
            Name: array[index].name,
          };
          dataToReturn.push(venue);
        }
        }
        table.appendRows(dataToReturn);
        console.log(data);
        doneCallback();
      });

    } else if (table.tableInfo.id == "Occupancy") { // Gets occupancy information
      // gets list of room ids
      var allRoomIds = [];
      await getter.getRoomIds().then((data) => {
        var x = data.content;
        x.forEach(element => {
          allRoomIds.push(element.id);
        });
      });

      

    //  gets total pages for each room
      var roomPages = [];
      for (let index = 0; index < allRoomIds.length; index++) {
        await getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${allRoomIds[index]}`, (data) => {
          roomPages.push(data.page.totalPages);
        })
      }
      console.log(" x = " + roomPages);

// API call to get data given room id and page number
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
            var max = 0;
            for (let index = 0; index < array.length; index++) {
              var startTime = new Date(array[index].startTime).getTime();
              var endTime = new Date(array[index].endTime).getTime();
              // console.log("trial1 = " + trial1);
              // console.log("trial2 = " + trial2);
              // for (let index =new Date("2021-11-17T08:09:04.222Z"); index < trial2; index++) {
              //   console.log(index);

              // }
              // var startTime = trial1.getTime(), endTime = trial2.getTime();
              for (let loopTime = startTime; loopTime < endTime; loopTime += 60000) {
                var loopMinute = new Date(loopTime);
                // console.log(loopMinute);
                var venue = {
                  RoomId: array[index].roomId,
                  Occupancy: array[index].occupancy,
                  Time: loopMinute,
                  // StartTime: array[index].startTime,

                  // EndTime: array[index].endTime,
                  // Location: array[index].latLngGeojson,

                };
                // console.log("roomID = " + roomID + " and pageNum = " + pageNum);
                dataToReturn.push(venue);
                // if (array[index].occupancy > max){
                //   max = array[index].occupancy;
                // }
              }


            }
            table.appendRows(dataToReturn);
            // console.log(data);
            // console.log("roomID = " + roomID + " and pageNum = " + pageNum + " Max occ = " + max);
            console.log("roomID = " + roomID + " and pageNum = " + pageNum);


          },
          error: function (xhr, ajaxOptions, thrownError) {
            // WDC should do more granular error checking here
            // or on the server side.  This is just a sample of new API.
            tableau.abortForAuth("Invalid Access Token");
          },
        });
      };


      // gets data for tableau
      var getOccupancyFunctionList = [];
      for (let index = 0; index < allRoomIds.length; index++) {
        // logs room number
        console.log("Room number = " + allRoomIds[index]);
        for (let jndex = 0; jndex < roomPages[index]; jndex++) {
          // gathers all async calls in one place
          getOccupancyFunctionList.push(xhr(allRoomIds[index], jndex));
        }

      }
      // waits until all async calls are finished
      await Promise.all(getOccupancyFunctionList);
      console.log("Finished occupancy");

      doneCallback();


    }else if (table.tableInfo.id == "Seats") {



    }



  };

  // Register the tableau connector, call this last
  tableau.registerConnector(myConnector);
})(); // end of anonymous function
