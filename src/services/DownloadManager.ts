export interface DownloadState {

md5:string;

progress:number;

status:
"downloading"
|"completed"
|"error";

}