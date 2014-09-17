/*
jQuery.validator.addMethod('answercheck', function (value, element) {
    return this.optional(element) || /^\bcat\b$/.test(value);
}, "type the correct answer -_-");
*/

// Textarea Resize
$(function(){$('.animated').autosize();});
 
// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 2
            }
            /*
            answer: {
                required: true,
                answercheck: true
            }
            */
        },
        messages: {
            name: {
                required: "Enter your name friend",
                minlength: "2 character minimum at this bar!"
            },
            email: {
                required: "No email, No message"
            },
            message: {
                required: "Might be fun to add some words?",
                minlength: "Thats all? Really?"
            }
            /*
            answer: {
                required: "sorry, wrong answer!"
            }
            */
        },
        submitHandler: function(form) {
            $('.loader_block').addClass('loading');
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').find(':input').attr('disabled', 'disabled');
                    $('#contact').find('label').css('cursor','default');
                    $('#success').addClass('active');
                    $('.loader_block').addClass('remove_spinner');
                },
                error: function() {
                    $('#error').addClass('active');
                    $('.loader_block').addClass('remove_spinner');
                }
            });
        }
    });
});