// JavaScript Document
var form = $('#email-form');

form.submit(function(event) {
  event.preventDefault();
  var data = {
    name: $("#name").val(),
    email: $("#email").val(),
    msg: $("#msg").val()
  };
  var form_status = $('<div class="form_status"></div>');
  $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: data,
      beforeSend: function() {
        form.append(form_status.html('<p>Email is sending...</p>').fadeIn());
      }
    }).done(function(data) {
      form_status.html('<p>Thank you for contacting me. I will reach you very shortly.</p>').delay(3000).fadeOut();
      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#msg').val('');
    })
    .fail(function(data) {
      form_status.html('<p>Sorry, invalid input. Try again.</p>').delay(3000).fadeOut();
    });
});