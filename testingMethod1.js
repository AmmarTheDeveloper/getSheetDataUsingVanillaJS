const sheetID = "Your Sheet Id"
const sheetName = "Your Sheet Name"

//there are some issues with this method

//method 1

import getSheetData from "./getSheetDataMethod1.js"

async function getData () {

    const data = await getSheetData( {
        sheetID: sheetID,
        sheetName: sheetName,
        query: "SELECT *",
        callback: renderData
    } )

}

function renderData ( response ) {

    console.log( "data fetched from method 1 :", response )

}

getData()

