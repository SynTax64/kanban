$(function () {
    $('ul#list-group-content').sortable({
        connectWith: ['ul#list-group-tagging', 'ul#list-group-review', 'ul#list-group-publish'],
        opacity: 0.7,
        placeholder: 'dragging-border'
    });

    $('ul#list-group-tagging').sortable({
        connectWith: ['ul#list-group-content', 'ul#list-group-review', 'ul#list-group-publish'],
        opacity: 0.7,
        placeholder: 'dragging-border'
    });

    $('ul#list-group-review').sortable({
        connectWith: ['ul#list-group-content', 'ul#list-group-tagging', 'ul#list-group-publish'],
        opacity: 0.7,
        placeholder: 'dragging-border'
    });

    $('ul#list-group-publish').sortable({
        connectWith: ['ul#list-group-content', 'ul#list-group-tagging', 'ul#list-group-review'],
        opacity: 0.7,
        placeholder: 'dragging-border'
    });
});