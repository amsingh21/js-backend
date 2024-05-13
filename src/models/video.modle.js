import mongoose , { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema(
    {
       videoFile:{
          type:String, //cloundinary url
          require:true,
          
       },
       thumbnail:{
        type:String, //cloundinary url
        require:true,
       },
       title:{
        type:String, 
        require:true,
       },
       description:{
        type:String, 
        require:true,
       },
       duration:{
        type:Number, //cloundinary url
        require:true,
       },
       views:{
        type:Number,
        default:0
       },
       isPublished:{
        type:Boolean,
        default:true
       },
       owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
       }


    } ,{
        timestamps:true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)

