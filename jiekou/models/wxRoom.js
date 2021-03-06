const mongoose = require('mongoose')

//实例化数据模板
const wxRoomSchema = mongoose.Schema({
  room_sn:{
    type:String,
    required:true,
  },
  status: {
    type: Number,
    default: 0, //0未使用，1已使用
  },
  hotel_id:{
    type:String,
    required:true
  },
  room_type_id:{
    type: mongoose.Types.ObjectId, //ObjectId类型
    required:true,
    ref:'wxRoomType'
  },
  floor:{
    type:String,
  },
  is_window:{
    type:String
  }
})

module.exports = wxRoom = mongoose.model('wxRoom', wxRoomSchema)