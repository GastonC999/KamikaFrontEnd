

function conectar(){
    $.ajax({
        url:"https://www.google.com",
        type:"GET",
        dataType:"json",
        error: function(){
            alert("no nos pudimos conectar");
        },
        success: function(){
            alert("conectados");
        }
    });
}