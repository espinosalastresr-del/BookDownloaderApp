import SQLite from "react-native-sqlite-storage";


SQLite.enablePromise(true);


let database:any;



export async function getDatabase(){

    if(database){
        return database;
    }


    database =
        await SQLite.openDatabase({
            name:"books.db",
            location:"default"
        });



    await database.executeSql(`

        CREATE TABLE IF NOT EXISTS books (

            id TEXT PRIMARY KEY,

            md5 TEXT,

            title TEXT,

            author TEXT,

            cover TEXT,

            file_type TEXT,

            size TEXT,

            path TEXT,

            download_date INTEGER

        );

    `);



    return database;

}