abstract class TakePhoto{

    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getReelTime(): number{
        //some complex execution
        return 8
    }
}



// const abh = new TakePhoto("camera", "filter")


class Instagram extends TakePhoto{
 constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
 ){
    super(cameraMode, filter)
 }

 getSepia(): void {
     console.log("Sepia")
 }
}


// const abhi = new Instagram("camera", "filter")
const abhi = new Instagram("camera", "filter", 8)