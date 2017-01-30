'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
      itemId: Number,
      title: String,
      primaryImageUrl: String,
      secondaryImageUrls: [String],
      price: {
          currencyCode: String,
          displayValue: String,
          value: Number,
          qualifier: String
      },
      availableOnline: Boolean,
      availableInStore: Boolean
});

export default mongoose.model('Product', ProductSchema);