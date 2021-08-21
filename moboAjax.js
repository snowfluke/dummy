         $(document).ready(function(){ 
 
              $('#Matherboard').keyup(function(){  
                   var query = $(this).val();  
                   if(query != '')  
                   {  
                        $.ajax({  
                             url:"ajax/ajaxrakitan/Matherboard.php",  
                             method:"POST",  
                             data:{query:query},  
                             success:function(data)  
                             {  
                                  $('#LMatherboard').fadeIn('fast');  
                                  $('#LMatherboard').html(data);  
                             },  
                             error: function(jqXHR, textStatus, errorThrown)
                             {
                                  total = total - parseInt($('#hMatherboard').val())
                             	   $('#hMatherboard').val(0);
                             	   $("#jmlttl").val(total);
                             }
                        });  
                   }  
              });  
              
              $(document).on('click', '.Matherboard', function(){  
                    $('#Matherboard').val($(this).children('#data-nama').text());
                    $('#hMatherboard').val($(this).children('#data-harga2').text());
                    
                    total = total + parseInt($(this).children('#data-harga').text());
                    
                    $("#jmlttl").val(total);
                    $('#LMatherboard').fadeOut('fast');
              }); 
              
              $(document).on('click', function(){
                   $('#LMatherboard').fadeOut('fast');  
              }); 
 
         }); 
