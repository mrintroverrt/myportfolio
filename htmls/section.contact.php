<?php if(true): ?>
<section class="contact" id="contact">
    <h2 class="heading">Contact<span>Me</span></h2>
    <link rel="stylesheet" href="/JS/mail.js">
    <form class="colorful-form" method="post">
        <div class="form-group">
            <label class="form-label" for="name">Name:</label>
            <input required="" placeholder="Enter your name" class="form-input" type="text">
        </div>
        <div class="form-group">
            <label class="form-label" for="email">Email:</label>
            <input required="" placeholder="Enter your email" class="form-input" name="email" id="email" type="email">
        </div>
        <div class="form-group">
            <label class="form-label" for="message">Message:</label>
            <textarea required="" placeholder="Enter your message" class="form-input" name="message"
                id="message"></textarea>
        </div>
        <button type="submit" class="form-button">
<span></span>
<span></span>
<span></span>
<span></span>SUMIT
</button>
    </form>
</section>
<?php endif;?>