var fs = require('fs');
var casper = require('casper').create();

var times = 0;
var questions = [];

casper.start('http://ask.fm/MukiWu', function () {
    this.echo(this.getTitle());
});

casper.repeat(60, function () {
    this.echo('repeat');
    this.echo(++times);

    this.fill('form#more-container', {}, true);
    this.wait(2000, function () {
        // this.echo('I\'ve waited for 1 second.');
    });
});

casper.then(function () {
    questions = this.evaluate(getQuestions);
});

casper.then(function () {
    fs.write('data.ask.json', JSON.stringify(questions, null, 2), 'w');
});

casper.wait(2000, function () {
    this.echo('wait for save json.');
});

casper.run();

function getQuestions() {
    var _qs = document.querySelectorAll('.questionBox');
    return Array.prototype.map.call(_qs, function (q) {
        return {
            question: q.querySelector('.question span span').innerHTML.replace(/^\s*|\s*$/g, ''),
            answer: q.querySelector('.answer').innerHTML.replace(/^\s*|\s*$/g, ''),
            link: q.querySelector('.time a').getAttribute('href')
        };
    });
}
