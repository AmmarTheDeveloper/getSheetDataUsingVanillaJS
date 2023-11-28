function getSheetData ( { sheetId, sheetName, callback } ) {

    const sheetURL = `https://docs.google.com/spreadsheets/d/${ sheetId }/gviz/tq?tqx=out:csv&sheet=${ encodeURIComponent( sheetName ) }`

    fetch( sheetURL ).then( response => response.text() )

        .then( response => {

            let data = csvToJSObject( response )

            callback( data )

        } )
        .catch( ( error ) => {

            console.log( error )
            callback( { status: "error" } )

        } )

    function csvToJSObject ( text ) {

        const data = text.split( '\n' )

        const columns = data[ 0 ].split( "," )

        const colObj = columns.map( col => {

            return col.replaceAll( `"`, "" )

        } )

        const rows = []

        data.forEach( ( value, index ) => {

            if ( index > 0 ) {

                let col = value.split( ',' )

                let columns = col.map( ( val ) => {

                    return val.replaceAll( `"`, "" )

                } )

                let convertedData = new Object()

                columns.forEach( ( value, index ) => {

                    convertedData[ colObj[ index ] ] = value

                } )

                rows.push( convertedData )

            }
        } )

        return rows
    }


}

export default getSheetData