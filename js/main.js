var listComentarios = [];

function setList (listComentarios) {
    var listaComentarios = document.getElementById("lista-comentarios");
    var comentarios = '<ul>';
    for(var key in listComentarios){
        comentarios += '<li><p class="comentario"><strong>' + listComentarios[key].autor + ': ' + '</strong>' + listComentarios[key].comentario +
        '</p><button type="button" onclick="removeComentario('+key+')">Remover</button></li>';
    }
    saveListStorage(listComentarios);
    comentarios += '</ul>';
    document.getElementById("lista-comentarios").innerHTML = comentarios;
}

function addComentario(){

  if (!validacao()){
    return;
  }

  var autor = document.getElementById("input-autor").value;
  var comentario = document.getElementById("input-comentario").value;
  listComentarios.unshift({"autor":autor , "comentario":comentario });
  setList(listComentarios);
}

function validacao(){
  var autor = document.getElementById("input-autor").value;
  var comentario = document.getElementById("input-comentario").value;


	if (autor === ""){
		alert('Digite o nome do autor!');
    return false;
	}
	if (comentario === ""){
		alert('Digite seu comentário!');
    return false;
	}
  return true;
}


function removeComentario(e){
    if (confirm("Deletar comentario?")){
      listComentarios.splice(e, 1);
    }
    setList(listComentarios);
}

function saveListStorage(listComentarios){
	var jsonStr = JSON.stringify(listComentarios);

	localStorage.setItem("listComentarios",jsonStr);
}

function initListStorage(){
	var testList = localStorage.getItem("listComentarios");

	if (testList) {
		listComentarios = JSON.parse(testList);
	}

	setList(listComentarios);
}

initListStorage();
