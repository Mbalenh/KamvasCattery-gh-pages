var booking1 = {
        check_in_day: 'Monday',
        duration: 3,
        cat_name : 'Snowy'
      };
 var booking2 = {
        check_in_day: 'Wednesday',
        duration: 3,
        cat_name : 'Snowy'
      };
  var booking3 ={
        check_in_day: 'Friday',
        duration: 3,
        cat_name : 'Snowy'
      };


describe("The booking_cost function", function(){
     it("should return R135 for the Monday booking", function(){
        assert.equal('135', bookingCost(booking1));
    });
    it("should return R101.25 for 'Wednesday' booking", function(){
        assert.equal('101.25' , bookingCost(booking2));
    });
    it("should return R114.75 for Friday booking", function(){
        assert.equal('114.75', bookingCost(booking3));
    });
});



  
