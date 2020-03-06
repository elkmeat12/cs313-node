/***********************************************
 * CALCULATE RATE
 * Calculate the postal rate based off of weight
 * and mail type:
 * https://pe.usps.com/text/dmm300/Notice123.htm#_c037
 **********************************************/
function calculateRate(res, wt, mt) {
   mt = mt.toLowerCase();

   let rate = 0;

   switch (mt) {
      case "letters (stamped)":
         if (wt < 1)
         rate = 0.55;
         else if (wt >= 1 && wt < 2)
         rate = 0.70;
         else if (wt >= 2 && wt < 3)
         rate = 0.85;
         else if (wt >= 3 && wt < 3.5)
         rate = 1.00;
         break;
      case "letters (metered)":
         if (wt < 1)
         rate = 0.50;
         else if (wt >= 1 && wt < 2)
         rate = 0.65;
         else if (wt >= 2 && wt < 3)
         rate = 0.80;
         else if (wt >= 3 && wt < 3.5)
         rate = 0.95;
         break;
      case "large envelopes (flats)":
         if (wt < 1)
         rate = 1.00;
         else if (wt >= 1 && wt < 2)
         rate = 1.20;
         else if (wt >= 2 && wt < 3)
         rate = 1.40;
         else if (wt >= 3 && wt < 4)
         rate = 1.60;
         else if (wt >= 4 && wt < 5)
         rate = 1.80;
         else if (wt >= 5 && wt < 6)
         rate = 2.00;
         else if (wt >= 6 && wt < 7)
         rate = 2.20;
         else if (wt >= 7 && wt < 8)
         rate = 2.40;
         else if (wt >= 8 && wt < 9)
         rate = 2.60;
         else if (wt >= 9 && wt < 10)
         rate = 2.80;
         else if (wt >= 10 && wt < 11)
         rate = 3.00;
         else if (wt >= 11 && wt < 12)
         rate = 3.20;
         else if (wt >= 12 && wt < 13)
         rate = 3.40;
         break;
      case "first-class package service - retail":
         if (wt < 4)
         rate = 3.80;
         else if (wt >= 4 && wt < 8)
         rate = 4.60;
         else if (wt >= 8 && wt < 12)
         rate = 5.30;
         else if (wt >= 12 && wt < 13)
         rate = 5.90;
         break;
      default:
         break;
   } 
   // print out 2 decimal places
   rate = rate.toFixed(2);

   if (rate == 0)
      console.log("User entered to much weight");

   console.log("$" + rate);
   const params = {weight: wt, mailType: mt, rate: rate};
   res.render('rate', params);
   console.log("Sent data to ejs page");
}
/****************************************************
 * HANDLE RATE
 * Gets the user input and calculate the postal rate
 ****************************************************/
function handleRate(req, res) {
   const weight = Number(req.query.weight);
   console.log(weight);

   const mailType = req.query.mailType;
   console.log(mailType);

   calculateRate(res, weight, mailType);
}

// export our function to use in other file
module.exports = {handleRate: handleRate};