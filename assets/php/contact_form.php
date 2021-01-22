<div id="contact" class="section scrollspy">
    <form action="" method="post" name="Contact_Form" id="contact_form">
        <table>
            <tr>
                <h3 id="headline">Contact Me</h3>
            </tr>
            <tr>
                <td>
                    <h6 id="description_first_name">First Name</h6>
                </td>
                <td>
                    <h6 id="description_last_name">Last Name</h6>
                </td>
            </tr>
            <tr>
                <td>
                    <input name="first_name" type="text" class="Input" required>
                </td>
                <td>
                    <input name="last_name" type="text" class="Input" required>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h6 id="description_email">Email</h6>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input name="email" type="email" class="Input" required>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h6 id="description_subject">Subject</h6>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input name="subject" id="subject" type="text" class="Input" required>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h5 id="description_message">Message</h5>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" class="materialize-textarea" required></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <input class="g-recaptcha waves-effect waves-light btn" type="submit" data-sitekey="6Ld9QSYaAAAAANgmfvUZkMD8PameSDCr_x3VFa6x" data-callback='onSubmit' data-action='submit'>
                </td>
                <td>
                    <p><?php if (isset($msg)){
                        echo $msg;
                        } ?></p>
                </td>
            </tr>
        </table>
        <script>
            function onClick(e) {
                e.preventDefault();
                grecaptcha.ready(function() {
                    grecaptcha.execute('6Ld9QSYaAAAAANgmfvUZkMD8PameSDCr_x3VFa6x', {action: 'submit'}).then(function(token) {
                        // Add your logic to submit to your backend server here.
                    });
                });
            }
        </script>
    </form>
</div>