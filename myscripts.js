<script type="text/javascript">
var euler_1 = function(){
    var total = 0;

    for (var i = 0; i < 1000; i++)
      {
        if (i%3 === 0 || i%5 ===0)
          {
            total = total + i;
          }
      }

    alert(total);
};

var fib_seq = function (){

    var a = 1;
    var sum = 0;
    var total = 0;
    var prev_value = 0;
    
    do
    {
        if (a <= 2)
        {
            if(a%2 === 0)
            {
                total = total + a;//total value = 2
            }
        prev_value = a;//prev value = 2
        a++;//a = 3
        }
        else if (a > 2)
        {
            sum = a + prev_value;//a = 3, prev_value = 2, sum = 5
            if (sum%2 === 0)
            {
                total = total + sum;//total = 2
            }
            prev_value = a;
            a = sum;
        }
        
    }
    while (a < 4000000);
    
    alert(total);

};
</script>

