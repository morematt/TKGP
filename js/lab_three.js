jQuery(document).ready(function($) {
var p = $('#content p');
	var massive =[[0,1,0,0,0],[1,0,1,1,1],[0,1,0,0,1],[0,1,0,0,1],[0,1,1,1,0]]; //матрица смежности
	var AmountVerticles = 5;// количество вершин
	var Distance = new Array(AmountVerticles);//массив для матрицы расстояний
	var Stack = new Array();// Очередь
	for(var Am=0;Am < AmountVerticles;Am++){ //Первая вершина
		Distance[Am] = new Array(AmountVerticles);
		
		function SearchDistance () {
					Stack.push(Am);//Lобавление первого элемента в очередь 
			for(var z=0; z < Distance.length;z++) {Distance[Am] [z] = 0;}//Первоначально длина всех расстояний равна 0
			for(var n=0; n < massive.length; n++){//Счётчик массива очереди
				var ElementOfStack = Stack[n];
				for (var i = 0;i < massive.length; i++){ //Счётчик элементов массива по горизонтали
					var smv = massive[ElementOfStack] [i];// smv - проверяемый элемент матрицы
					if(smv == 1){// если он равен 1, т.е. если смежен
						if (Stack.indexOf(i) === -1){//Если элемента нет в очереди
									Stack.push(i);// То добавить его в очередь
						Distance[Am] [i] = Distance[Am] [ElementOfStack] + 1;//  Расстояние до вершины.
						}					
					}
				}
			}
			Stack = [];
		}SearchDistance();	
	}
	var maxAmmount = []//Максимальный элемент матрицы
	for(var m=0;m<AmountVerticles;m++){
		var maxim = Math.max.apply(Math,Distance[m]);
		maxAmmount.push(maxim);
	}
	//Нахождение радиуса графа
	var radius = Math.min.apply(Math,maxAmmount);
	//Нахождение диаметра графа
	var diameter = Math.max.apply(Math,maxAmmount);
	//Центр графа
	var centerGraph = maxAmmount.indexOf(radius);
	var cnt = centerGraph+1
	p.text('Центр графа: вершина V'+ cnt);


	



	
	
});