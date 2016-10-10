$(function() {
    return;

    var TemplateEngine = {
        render: function (template, data) {
            template = template.replace('{{data}}', data);
            return template;
        }
    };

    var template = $('#my-template').html();

    $('body').append(TemplateEngine.render(template, [
        'one',
        'two',
        'three'
    ]));
});