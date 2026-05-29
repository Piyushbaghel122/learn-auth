import mongoose from "mongoose";

const userSechema = new mongoose.Schema({
    name: String,
    email: {
        type: String ,
         required: true, 
         unique: true, 
         sparse: true
    },
    avater: String,
    googleId: String,
    appleId: String,
    provider: {
        type: String,
        enum: [ "google", " apple"],
    }, 
    isOnline:  {
        type: Boolean, 
        default: false
    },

}. { 
    timestamps: true
});

export default mongoose.model('user', userSechema);
