const sheetID = "Your Sheet Id"
const sheetName = "Your Sheet Name"

// method 2

import getSheetData from "./getSheetDataMethod2.js";

async function getData () {

    await getSheetData( {
        sheetId: sheetID,
        sheetName: sheetName,
        callback: renderData
    } )

    function renderData ( data ) {
        console.log( "data fetched from method 2 :", data )
    }

}

getData()
