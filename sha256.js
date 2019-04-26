<!-- TimeOne TagLead -->
<script type="text/javascript">
    const text = '{{email}}';

    function hexString(buffer) {
      const byteArray = new Uint8Array(buffer);

      const hexCodes = [...byteArray].map(value => {
        const hexCode = value.toString(16);
        const paddedHexCode = hexCode.padStart(2, '0');
        return paddedHexCode;
      });

      return hexCodes.join('');
    }


    function digestMessage(message) {
      const encoder = new TextEncoder();
      const data = encoder.encode(message);
      return window.crypto.subtle.digest('SHA-256', data);
    }


    var tip = tip || [];

    digestMessage(text).then(digestValue => {
      console.log('digestMessage', hexString(digestValue));
    
      tip.push(["_setLead","6868","1323376","6b6a88a6539377d64c527ee3f7e3fef6", hexString(digestValue), 'ADDITIONAL DATA']);
      (function(e){
        console.log('DEBUG',e);
        function t(){
          var e=document.createElement("script");
          e.type="text/javascript";
          e.async=true;e.src=(document.location.protocol=="https:"?"https":"http")+"://tracking.publicidees.com/p/tip/";
            var t=document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e,t)}
            if(document.readyState=="complete"){
              console.log('publicidees');
              t()
            }else{
          if(e.addEventListener){
            e.addEventListener("load",t,false)
          }else if(e.attachEvent){
            e.attachEvent("onload",t)
          }
        }
      })(window);

    });



</script>

