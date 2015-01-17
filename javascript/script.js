var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}



function newBoard(){
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for(var i = 0; i < memory_array.length; i++){
        output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}


function memoryFlipTile(tile,val){
    if(tile.innerHTML == "" && memory_values.length < 2)
	{
        tile.style.background = '#FE2E9A';
        tile.innerHTML = val;

        if(memory_values.length == 0)
	{
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        }
	 else if(memory_values.length == 1)
	{
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if(memory_values[0] == memory_values[1])
		{
                tiles_flipped += 2;
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if(tiles_flipped == memory_array.length)
			{
		var response = confirm('Are you sure you want to continue in this level?');
                  if(response== true)
			{ 
				document.getElementById('memory_board').innerHTML = "";
                    		newBoard();
			}
	else
                    
                   alert("Game Over THank You");

                	}
            } 
	else
	 {
                function flip2Back()
		{
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(images/5.gif) repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(images/5.gif) no-repeat';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}


var memory_array1 = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values1 = [];
var memory_tile_ids1 = [];
var tiles_flipped1 = 0;
Array.prototype.memory_tile_shuffle2 = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard1(){
    tiles_flipped1 = 0;
    var output1 = '';
    memory_array1.memory_tile_shuffle2();
    for(var i = 0; i < memory_array1.length; i++){
        output1 += '<div id="tile_'+i+'" onclick="memoryFlipTile1(this,\''+memory_array1[i]+'\')"></div>';
    }
    document.getElementById('memory_board1').innerHTML = output1;
}


function memoryFlipTile1(tile,val){
    if(tile.innerHTML == "" && memory_values1.length < 2){
        tile.style.background = '#FE2E9A';
        tile.innerHTML = val;
//tile.innerHTML = '<img src="' + val + '1.png"/>';
        if(memory_values1.length == 0){
            memory_values1.push(val);
            memory_tile_ids1.push(tile.id);
        } else if(memory_values1.length == 1){
            memory_values1.push(val);
            memory_tile_ids1.push(tile.id);
            if(memory_values1[0] == memory_values1[1]){
                tiles_flipped1 += 2;
                // Clear both arrays
                memory_values1 = [];
                memory_tile_ids1 = [];
                // Check to see if the whole board is cleared
                if(tiles_flipped1 == memory_array1.length){
                   var response = confirm('Are you sure you want to continue in this level?');
                  if(response== true)
			{ 
				document.getElementById('memory_board1').innerHTML = "";
                    		newBoard1();
			}
	else
                    
                   alert("Game Over THank You");

                }
            } else {
                function flip2Back(){
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids1[0]);
                    var tile_2 = document.getElementById(memory_tile_ids1[1]);
                    tile_1.style.background = 'url(images/5.gif) repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(images/5.gif) no-repeat';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values1 = [];
                    memory_tile_ids1 = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}
