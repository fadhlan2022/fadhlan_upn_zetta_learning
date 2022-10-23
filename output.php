<!DOCTYPE html>
<html>
    <head>
        <title>
            Store Kita
        </title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
            <br>
            <h4>Your Data</h4>
            <br>
            <form method="POST" action="output.php">
              <div class="form-group">
                <label for="first-name"><span style="color: red;">*</span> First Name:</label>
                <?php echo $_GET["first-name"]; ?>
              </div>
              <div class="form-group">
                <label for="last-name"><span style="color: red;">*</span> Last Name:</label>
                <?php echo $_GET["last-name"]; ?>
              </div>
              <div>
                <p><span style="color: red;">*</span> Biography:</p>
                <?php echo $_GET["biography"]; ?>
              </div>
              <div>
                <p><span style="color: red;">*</span> Gender:</p>
                <?php echo $_GET["gender"]; ?>
              </div>
              <div class="form-group">
                <label for="email"><span style="color: red;">*</span> Email:</label>
                <?php echo $_GET["email"]; ?>
              </div>
              <div class="form-group">
                <label for="phone"> <span style="color: red;">*</span> Phone Number:</label>
                <?php echo $_GET["phone"]; ?>
              </div>
              <div class="form-group">
                <label for="age"> <span style="color: red;">*</span> Age:</label>
                <?php echo $_GET["age"]; ?>
              </div>
              <div class="form-group">
                <label for="url"> <span style="color: red;">*</span> Website Url:</label>
                <?php echo $_GET["url"]; ?>
              </div>
              <div class="form-group">
                <label for="nationality"> <span style="color: red;">*</span> Nationality:</label>
                <?php echo $_GET["nationality"]; ?>
              <button type="submit" class="btn btn-default" style="background-color: brown;">
                <span style="color: White;">Submit</span></button>
            </form>
          </div>
          <br>
          </body> 
          </html>
          
    </body>
</html>