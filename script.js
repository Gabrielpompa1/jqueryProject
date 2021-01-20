// TRIVIA 10 QUESTION API   https:opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple

$(document).ready(function () {
	var questions = $.ajax({
		dataType: 'json',
		url:
			'https:opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple',
	});
	let displayQuestions = () => {
		$('.question').append(questions.responseJSON.results[0].question);
	};

	let displayIncorrect = () => {
		questions.responseJSON.results[0].incorrect_answers.map((item) => {
			console.log(item);
			$('.choices').append('<p></p>').addClass('incorrect').append(item);
		});
	};
	let displayCorrect = () => {
		$('.choices').append('<p></p>').addClass('correct');
		$('.correct').append(questions.responseJSON.results[0].correct_answer);
	};

	$('.start-button').on('click', function () {
		$('.question-section').show();
		$(this).prop('disabled', true);
		displayQuestions();
		displayIncorrect();
		displayCorrect();
	});
});
