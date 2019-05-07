$(document).ready(function() {

	var estudo = $('#estudo').text();
	var tarefa = $('#tarefa').text();

	console.log(estudo);
	console.log(tarefa);

	if (estudo == 'false') {

		switch (tarefa) {

			case '1': 
			$('#migalha').find('.ec0.t1').addClass('btn-danger').removeClass('disabled');
			break;

			case '2':
			$('#migalha').find('.ec0.t1').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t2').addClass('btn-danger').removeClass('disabled');
			break;

			case '3':
			$('#migalha').find('.ec0.t1').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t2').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t3').addClass('btn-danger').removeClass('disabled');
			break;

			case 'sus':
			$('#migalha').find('.ec0.t1').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t2').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t3').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.sus').addClass('btn-danger').removeClass('disabled');
			break;

			case 'relatorio':
			$('#migalha').find('.ec0.t1').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t2').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.t3').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.sus').addClass('btn-success').removeClass('disabled');
			$('#migalha').find('.ec0.relatorio').addClass('btn-danger').removeClass('disabled');
			break;
		}
	
	} else {

		$('#migalha').find('.ec0').addClass('btn-success').removeClass('disabled');

		switch (tarefa) {

			case '1': 
			$('#migalha').find('.ec1.t1').addClass('btn-danger').removeClass('disabled');
			break;

			case '2':
			$('#migalha').find('.ec1.t1').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t2').addClass('btn-danger').removeClass('disabled');
			break;

			case '3':
			$('#migalha').find('.ec1.t1').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t2').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t3').addClass('btn-danger').removeClass('disabled');
			break;

			case 'sus':
			$('#migalha').find('.ec1.t1').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t2').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t3').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.sus').addClass('btn-danger').removeClass('disabled');
			break;

			case 'relatorio':
			$('#migalha').find('.ec1.t1').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t2').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.t3').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.sus').addClass('btn-info').removeClass('disabled');
			$('#migalha').find('.ec1.relatorio').addClass('btn-danger').removeClass('disabled');
			break;
		}
	}
})