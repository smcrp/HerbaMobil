(function($){	

	var self = $.mobile.HerbaMobil  = {
			transition : 'none',
			checkTransition : function (){
				$.mobile.defaultPageTransition = self.transition;
			},

			init : function(){
				self.checkTransition();
				
				self.crearProductos();
				self.cargarProductos(0);
				
				$(document).bind('pageinit',function(){
					console.log('pageinit');
					$('#transition').change(function(){
						self.transition = $(this).val();
						self.checkTransition();
					});
					$("#categoria").change(function() { 
						valor = valor = $("#categoria option:selected").val();
						self.cargarProductos(valor);
					});
				});
								
				$('#productos').live('pageshow',function(){

				});		
				
				$('#ver').live('pageshow',function(){
					
				});	
				
			},
			connection : null,
			openDatabase : function(){
				self.connection = window.openDatabase("HerbaMobil", "1.0", "Productos HerbaLife", 200000);				
			},
			
			crearProductos: function(){
				self.transaction(function(tx){
					tx.executeSql('DROP TABLE IF EXISTS Productos');
				    tx.executeSql('CREATE TABLE IF NOT EXISTS Productos (id INTEGER PRIMARY KEY ASC, nombre VARCHAR(50), categoria TEXT, descripcion TEXT, sabores VARCHAR(60), beneficios VARCHAR(60), foto TEXT)');			     
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["Mezcla para Preparar Bebida Nutricional", "1", "El batido nutricional de Herbalife contiene proteina de soya (9gr. por porcion), fibra y 12 vitaminas y minerales para una nutricion completa.", "Vainilla, chocolate, fresa, frutas tropicales, galletas con crema.", "Nutritivo y saludable, buena fuente de vitaminas y minerales, contiene fibra.", "./imagenes/mezclaParaBebida.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["Formula 2 Multivitamin Complex", "1", "Formula exclusiva que provee 23 vitaminas y minerales esenciales.", "N/A", "Vitaminas A, B, C y D, practica manera de compensar las necesidades diarias de nutrientes, buena fuente de minerales y antioxidantes esenciales.", "./imagenes/multivitaminico.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["Formula 3 Mezcla en Polvo a Base de Proteinas", "1", "N/A", "N/A", "Combinacion de proteina de soya y proteina de suero de leche, ayuda a fortalecer la masa muscular magra, es ideal para mezclar con su batido comida favorita.", "./imagenes/proteina.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "1", "N/A", "N/A", "N/A", "./imagenes/te.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "1", "N/A", "N/A", "N/A", "./imagenes/VE-CellULoss.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "1", "N/A", "N/A", "N/A", "./imagenes/total_control.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "1", "N/A", "N/A", "N/A", "./imagenes/cel_activator.jpg"]);

				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["Producto 2", "2", "Descripcion 2, casa", "Sabor 2", "N/A", "./imagenes/aloe.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/herbalifeline.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/xtracal.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/thermojetics.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/schizandra.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/factor1000.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/tangkueiplus.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/rosex.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "2", "N/A", "N/A", "N/A", "./imagenes/fibraactiva.jpg"]);

				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["Producto 3", "3", "Descripcion 3", "Sabor 3", "Beneficio 3", "./imagenes/nrg.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "3", "N/A", "N/A", "N/A", "./imagenes/CI-liftoff-naranja.jpg"]);

					tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/sa_cremanoche.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/sa_locion_rostro.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/sa_cuello.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/sa_labios.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_limpiador_oily.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_limpiador_dry.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_tonificador_oily.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_tonificador_dry.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_humectante_oily.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_humectante_dry.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_aclarante.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_eyegel.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_exfoliante.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_mascara.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/nf_eyecream.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/ha_manosycuerpo.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/ha_cremamanos.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/radiantc_exfoliante.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/radiantc_locion.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/radiantc_quencher.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/VE-man-400px.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/VE-perfumewoman-400px.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/crema_modeladora.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/crema_exfoliante.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["N/A", "4", "N/A", "N/A", "N/A", "./imagenes/ha_gel.jpg"]);
				    tx.executeSql('INSERT INTO Productos (nombre, categoria, descripcion, sabores, beneficios, foto) VALUES (?,?,?,?,?,?)',["Producto 4", "4", "Descripcion 4", "Sabor 4", "Beneficio 4", "./imagenes/nf_cremanoche.jpg"],

				     	function(tx){
				    	 
				     }, function(tx,err){
				    	 self.error(tx,err);
				     });				     
					
				})
				
			},

			cargarProductos: function(categoria){
				self.transaction(function(tx){
					consulta = 'SELECT * FROM Productos ';
					if (categoria != 0) {
						consulta = 'SELECT * FROM Productos where categoria == ' + categoria + ' ';
					};
					tx.executeSql(consulta,[],function(tx,rs){
						if(rs.rows.length >0){
							var lista = $('<ul/>');
							for(var i=0; i<rs.rows.length;i++){
								var item = rs.rows.item(i);
								lista.append(
									$('<li/>').append(
										$('<a/>').data('item',item).bind('vclick',function(){
											self.verProducto($(this).data('item'));
										}).attr('href','javascript:void(0)').append(
											$('<h2/>').text(item.nombre)
										)
										.append(
												$('<img/>').attr('src', item.foto).attr('style', 'height:100px; width:100px')
										)
										.append(
												$('<p/>').text(item.nombre)
										)
									).attr('class', item.categoria)
								);								
							}
							
							$('#listado-productos').empty().append(lista.children()).listview('refresh');
						}
						
					},self.err);
				},self.err);
			},

			transaction : function(fn,err,suc){
				if(self.connection==null){
					self.openDatabase();
				}
				
				self.connection.transaction(fn);				
			},

			verProducto : function(item){	
				$('#nombre-val').text(item.nombre);
				$('#descripcion-val').text(item.descripcion);
				$('#foto-val').css('background-image','url('+item.foto+')');
				$("#sabores-val").text(item.sabores);
				$("#beneficios-val").text(item.beneficios);
				$.mobile.changePage('#detalles');
			}
	};
	
	self.init();
	
//	self.crearCategorias();
	
	
})(jQuery);
