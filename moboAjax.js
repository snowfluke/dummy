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
                             }
                        });  
                   }  
              });  
              
              $(document).on('click', '.Matherboard', function(){  
                    $('#Matherboard').val($(this).children('#data-nama').text());
                    $('#hMatherboard').text($(this).children('#data-harga2').text());
                    
                    console.log('Atas==========================')
                    console.log('Nilai total sebelum di klik:', total)
                    
                    total = total + parseInt($(this).children('#data-harga').text());
                    
                    console.log('Nilai total setelah di klik:', total)
		      
                    let formattedTotal = total.toLocaleString('id')
                    $("#jmlttl").val(formattedTotal);
		      
                    $('#LMatherboard').fadeOut('fast');
              });
              
              // Event Baru
              $("#Matherboard").change(function(){
              		let curVal = this.value;  
              		if(curVal != '') return;
              		
              		console.log('Bawah==========================')
              		console.log('Nilai Total sebelum dihapus:', total)
              		console.log('Nilai mobo:', curVal)
  			
  			total = total - parseInt($('#hMatherboard').text())
                       $('#hMatherboard').text('');
		      
			//jadiin titik titik
		       let formattedTotal = total.toLocaleString('id')
                       $("#jmlttl").val(formattedTotal);
                       
                       console.log('Nilai Total setelah dihapus:', total)
		});  
              
              $(document).on('click', function(){
                   $('#LMatherboard').fadeOut('fast');  
              }); 
 
         }); 
