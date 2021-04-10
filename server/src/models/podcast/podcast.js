const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;



const podcastSchema = new mongoose.Schema({

    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    thumbnailImageURL: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    durationInSeconds: {
      type: Number,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  });

  



  
