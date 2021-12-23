import { API } from "./fetchAPI.js";

export class KontaktResponseObject {
    constructor(JSONResponse, APIKey) {
        this.content = JSONResponse.content;
        this.links = JSONResponse.links;
        this.page = JSONResponse.page;
        this.getter = new API(APIKey);
    };

    getAllPageURLs() {
        var allPageURLs = [];
        const currntURL = this.links[0].href;
        for (let index = 0; index < this.page.totalPages ; index++) {
            const pageSpecificURL = currntURL.replace("page=0","page=" +index );
            allPageURLs.push(pageSpecificURL)
            
        }
        return allPageURLs;
    }

    async getAllData(){
        var allPageURLs =  this.getAllPageURLs();
        // console.log(allPageURLs);
        var fetchfunctions = [], dataStorage = [];
        allPageURLs.forEach(element => {
            fetchfunctions.push(this.returnData(element,dataStorage))
        });
        await Promise.all(fetchfunctions);
    //   console.log("Finished occupancy");\
    return dataStorage;

    }
    // async getPageData(){

    // }
    async returnData(pageURL, dataArray){
        const data = await this.getter.basicGet(pageURL);
        dataArray.push(data.content);
    }
}