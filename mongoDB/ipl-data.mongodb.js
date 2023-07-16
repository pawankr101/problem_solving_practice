/* global use, db */

use("ipl-data");

db.matches.aggregate(
  [
    {
      $lookup: {
        from: 'deliveries',
        localField: 'id',
        foreignField: 'match_id',
        as: 'deliveries'
      }
    }
  ]
);