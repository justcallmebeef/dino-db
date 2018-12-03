
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([   
        {
          title:"Demolitions Manager",
          description:"Please destroy things for us.",
          pay:"$50,000 per year",
          interested:["T-Rex"]
        },
        {
          title:"Tree Trimming Specialist",
          description:"Responsible for keeping trees and bushes well trimmed and away from structures. Must be able to dispose of trimmings.",
          pay:"$23.50 per hour",
          interested:["Utahraptor",""]
        },
        {
          title:"Dog Walker",
          description:"Looking for a dog lover to take our furry friends out three times a day.",
          pay:"$15 per hour",
          interested:["Dromiceiomimus"]
        },
        {
          title:"Philosopher",
          description:"An ink sees a colombia as a boxlike composition. We can assume that any instance of a currency can be construed as a charming macaroni. If this was somewhat unclear, barish lyrics show us how himalayans can be fathers. A statement can hardly be considered a backless denim without also being a feeling.",
          pay:"24% equity",
          interested:["T-Rex","Utahraptor"]
      }]
    );
  });
};
