$(document).ready(function () {
  $('#styles li a').click(function () {
    $('link').attr('href', $(this).attr('rel'));
    return false;
  });
});
