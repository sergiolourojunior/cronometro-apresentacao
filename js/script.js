function formatatempo(segs) {
	min = 0;
	hr = 0;

	while(segs>=60)
	{
		if (segs >=60)
		{
			segs = segs-60;
			min = min+1;
		}
	}

	while(min>=60) {
		if (min >=60) {
			min = min-60;
			hr = hr+1;
		}
	}

	if (hr < 10) {hr = "0"+hr}
		if (min < 10) {min = "0"+min}
			if (segs < 10) {segs = "0"+segs}
				fin = hr+":"+min+":"+segs;

			function alerta()
			{
				if(segs%2!=0)
				{
					$('#counter').css({'background-color':'#EF6464', 'color':'#FFF'});
				}
				else
				{
					$('#counter').css({'background-color': '', 'color': '#000'});
				}
			}



			var l_horas = $('#limite_horas').val();
			var l_minutos = $('#limite_minutos').val();



			if(l_horas!='' && l_minutos!='')
			{
				if(l_horas>0)
				{
					if(l_minutos>0)
					{
						if(l_minutos-1==min && l_horas==hr)
						{
							alerta();
						}
					}
					if(l_minutos==00)
					{
						if(min==59 && l_horas-1==hr)
						{
							alerta();
						}
					}
				}
				else
				{
					if(l_minutos>0)
					{
						if(l_minutos-1==min)
						{
							alerta();
						}
					}
				}
			}

			return fin;

}
var segundos = 0;

$(document).ready(function(){
	$('#zerar').hide();
});

function conta() {
	segundos++;
	document.getElementById("counter").innerHTML = formatatempo(segundos);
}

function inicia(){
	interval = setInterval("conta();",1000);
	$('#iniciar').hide();
	$('#zerar').show();
}

function zera(){
	clearInterval(interval);
	segundos = 0;
	document.getElementById("counter").innerHTML = formatatempo(segundos);
	$('#iniciar').show();
	$('#zerar').hide();
	$('#counter').css({'background-color': '', 'color': '#000'});
}