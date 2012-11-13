/*jslint  browser: true, white: true, plusplus: true */
/*global $: true */

$(function () {
    'use strict';

    $.ajax({
        url: 'content/countries.txt',
        dataType: 'json'
    }).done(function (data) {
        var status = $('#selection'),
            countries = $.map(data, function (value, idx) {
                return { value: value, alts: [ idx.toString() ] };
            });

        $('#query').autocomplete({
            lookup: countries,
            partialMatch: true,
            onSelect: function (suggestion) {
                status.html('You selected: ' + suggestion);
            }
        });
    });
});