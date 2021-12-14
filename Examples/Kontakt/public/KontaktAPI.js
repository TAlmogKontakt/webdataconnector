import { API } from "./Extras/fetchAPI.js";
(function () {
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
    // uncomment for test
    // test;
    $("#getbuildingsbutton").click(function () {

      tableau.connectionName = "Kontakt.io Data";
      tableau.submit();
    });

    // var getter = new API(ApiKey);

    // getter.test();
    // getter.basicGet("https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name").then(function (data) {
    //   console.log(data);
    // });

    // 2021-11-17T08:09:04.222Z	
    // 2021-11-17T08:14:04.222Z	
    // const millisecondsPerSecond = 1000, secondsPerMinute = 60, minutesPerHour = 60, hoursPerDay = 24 , daysToRead = 10;
    // var today=new Date();  
    // console.log(today);
    // today.setTime(today.getTime() - daysToRead * hoursPerDay * minutesPerHour * secondsPerMinute * millisecondsPerSecond);
    // console.log(today);


    // var url = "https://testapi.kontakt.io/manager/authenticate";
    // // var url = "https://apps-api.test.kontakt.io/manager/authenticate";

    

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url);

    // xhr.setRequestHeader("Accept", "application/vnd.com.kontakt+json;version=10");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    // // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    // // res.header("Access-Control-Allow-Origin", "*");

    // xhr.onreadystatechange = function () {
    //   // if (xhr.readyState === 4) {
    //     console.log(xhr.status);
    //     console.log(xhr.responseText);
    //   // }
    // };

    // var data = "email=pawel@kontakt.io&password=KiITB2020";

    // xhr.send(data);
  //   var xhr = $.ajax({
  //     url: `https://testapi.kontakt.io/manager/authenticate`,
  //     data: "email=pawel@kontakt.io&password=KiITB2020",
  //     method: "POST",
  //     dataType: 'jsonp',
  //     crossDomain :"True",
  //     headers: {
  //       "Accept": "application/vnd.com.kontakt+json;version=10",
  //       "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  //     },
  //     success: function (data) {

  //       console.log("Succses");
  //       console.log(data)
  //     },
  //     error: function (xhr, ajaxOptions, thrownError) {

  //       console.log("Error \n" + thrownError);
  //     },
  //   });


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
      // {
      //   id: "StartTime",
      //   dataType: tableau.dataTypeEnum.datetime,
      // },
      // {
      //   id: "EndTime",
      //   dataType: tableau.dataTypeEnum.datetime,
      // },
      {
        id: "Time",
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
    var getter = new API(ApiKey);
    if (table.tableInfo.id == "Buildings") {

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

    } else if (table.tableInfo.id == "Floors") {
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

    } else if (table.tableInfo.id == "Rooms") {
      getter.basicGet("https://apps-api.test.kontakt.io/v2/locations/rooms?page=0&size=10&sort=name").then(function (data) {
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


    } else if (table.tableInfo.id == "Occupancy") {
      var allRoomIds = [];
      await getter.getRoomIds().then((data) => {
        var x = data.content;
        x.forEach(element => {
          allRoomIds.push(element.id);
        });
      });
      // var sensorRoomIDs = [2542254, 2444734];
      var today = new Date();
      // console.log(today.toISOString());


      const endTime = today.toISOString();
      today.setTime(today.getTime() - daysToRead * hoursPerDay * minutesPerHour * secondsPerMinute * millisecondsPerSecond);
      const startTime = today.toISOString(); //changed to shorten dat fragments
      // sensorRoomIDs.forEach

      // console.log(getOccupancyFunctionList.dataType);

      // console.log(table.tableInfo.id);
      // console.log("Test")
      // console.log(sensorRoomIDs[0]);
      var roomPages = [];
      // await allRoomIds.forEach(element => {
      //   getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${element}`, (data) => {
      //     roomPages.push( data.page.totalPages);
      // })
      // });
      for (let index = 0; index < allRoomIds.length; index++) {
        await getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${allRoomIds[index]}`, (data) => {
          roomPages.push(data.page.totalPages);
        })
      }
      console.log(" x = " + roomPages);
      // var roomOnePages = 0, roomTwoPages = 0;
      // await getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${sensorRoomIDs[0]}`, (data) => {
      //   roomOnePages = data.page.totalPages;
      // })
      // await getAPIPages(`https://apps-api.test.kontakt.io/v3/occupancy?page=0&size=20&sort=roomId&startTime=${startTime}&endTime=${endTime}&roomId=${sensorRoomIDs[1]}`, (data) => {
      //   roomTwoPages = data.page.totalPages;
      // })
      // console.log(roomOnePages);
      // console.log(roomTwoPages);

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
      var getOccupancyFunctionList = [];
      getOccupancyFunctionList.push();


      // todo fix prefred
      // console.log("getOccupancyFunctionList:")
      // getOccupancyFunctionList.forEach((item) => {
      //   console.log(item.name);
      //   // item();
      // })
      for (let index = 0; index < allRoomIds.length; index++) {
        console.log("Room number = " + allRoomIds[index]);
        for (let jndex = 0; jndex < roomPages[index]; jndex++) {

          // var x = await xhr(allRoomIds[index], jndex);
          getOccupancyFunctionList.push(xhr(allRoomIds[index], jndex));
          // console.log( xhr(allRoomIds[index], jndex));
        }

      }
      await Promise.all(getOccupancyFunctionList);
      console.log("Finished occupancy");
      // console.log("Ahh:")
      // for (let index = 0; index < roomOnePages; index++) {

      //   await xhr(sensorRoomIDs[0], index);
      // }
      // console.log("Ahh2:")
      // for (let index = 0; index < roomTwoPages; index++) {

      //   await xhr(sensorRoomIDs[1], index);
      // }
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
