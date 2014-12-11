jQuery(document).ready(function($) {
	
	//Задать два графа при помощи матрицы смежности(двумерные массивы)
	//Задать количество вершин в графах
	var AmountVerticles = 6; //Количество вершин
	var GraphA = [[0,0,0,1,0,0],[0,0,1,1,1,0],[0,1,0,0,1,0],[1,1,0,0,0,0],[0,1,1,0,0,1],[0,0,0,0,1,0]];//Граф А
	var GraphB = [[0,1,0,0,0,0],[1,0,0,0,1,1],[0,0,0,0,0,1],[0,0,0,0,1,0],[0,1,0,1,0,0],[0,1,1,0,0,0]];//Граф Б
 	var GraphJoin = new Array(AmountVerticles);//Граф для Объединения
 	var GraphPeresechenie = new Array(AmountVerticles);//Граф для Пересечения
	var GraphRadSum = new Array(AmountVerticles);//Граф для Кольцевой суммы

 function JoinGraph () {
 	for (var n=0; n < AmountVerticles; n++) {
 		GraphJoin[n] = new Array(AmountVerticles);
		for (var i=0; i < AmountVerticles; i++) {
					if (GraphA[n] [i] == GraphB[n] [i]) 
				GraphJoin[n] [i] = GraphA[n] [i];	
			 else
				GraphJoin[n] [i] = GraphA[n] [i]  + GraphB[n] [i];
		};
	};
	
 }

 function Peresechenie () {
 	for (var n=0; n < AmountVerticles; n++) {
 		GraphPeresechenie[n] = new Array(AmountVerticles);
		for (var i=0; i < AmountVerticles; i++) {	
				if (GraphA[n] [i] == GraphB[n] [i] && GraphA[n] [i] ==1)
					GraphPeresechenie[n] [i] = 1; 
				else
					GraphPeresechenie[n] [i] = 0;
				

		};
	};
 }
 
	function RadSum () {
		for (var n=0; n < AmountVerticles; n++) {
			GraphRadSum[n] = new Array(AmountVerticles);
			for (var i=0; i < AmountVerticles; i++) {
					if (GraphJoin[n] [i] == GraphPeresechenie[n] [i] && GraphJoin[n] [i] ==1)
						GraphRadSum [n] [i] = 0;
					else
						GraphRadSum [n] [i] = GraphJoin[n] [i];
			};
		};
	}
JoinGraph();
Peresechenie();
RadSum();
});