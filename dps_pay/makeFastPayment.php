<?php 
$key2='h&+iye[5GwmSPaD+#9Ca$A*bf&#vKnHS';
$key1='Kaf(U9}kNzYWM2A.t^r~qF1rh1dQcZ3h';
$order=rand(1000, 90000);
$sum=rand(5, 1000);
$MYKEY=md5($key2 . md5($key1 . "merchant=90053980&orderid=" . $order . "&currency=752&amount=" . $sum ));

?>
<html></head>
</head>
<body>
<form name="payform" action="https://payment.architrade.com/paymentweb/start.action" method="post" id="pay">
<input type="hidden" name="merchant" value="90053980" />
<input type="hidden" name="amount" value="<?php echo $sum; ?>" />
<input type="hidden" name="accepturl" value="ec2-79-125-39-238.eu-west-1.compute.amazonaws.com/test/makePayment.php"/>
<input type="hidden" name="orderid" value="<?php echo $order; ?>" />
<input type="hidden" name="currency" value="752" />
<input type="hidden" name="test" value="yes" />
<input type="hidden" name="lang" value="se" />
<input type="hidden" name="md5key" value="<?php echo $MYKEY; ?>" />
</form>
<script type="text/javascript">
    function myfunc () {
        var frm = document.getElementById("pay");
        frm.submit();
    }
    window.onload = myfunc;
</script>

</body> 
</html>
