'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
    title: String,
    primaryImageUrl: String
});

export default mongoose.model('Product', ProductSchema);