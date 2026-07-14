import RNFS from "react-native-fs";


export async function fileExists(
    path:string
):Promise<boolean>{

    return await RNFS.exists(path);

}



export async function deleteFile(
    path:string
){

    const exists =
        await fileExists(path);


    if(exists){

        await RNFS.unlink(path);

    }

}