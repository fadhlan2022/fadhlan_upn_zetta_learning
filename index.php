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
            <h4>Registration</h4>
            <br>
            <form method="POST" action="output.php">
              <div class="form-group">
                <label for="first-name"><span style="color: red;">*</span> First Name:</label>
                <input type="text" class="form-control" id="first-name" name="first-name" placeholder="First Name">
              </div>
              <div class="form-group">
                <label for="last-name"><span style="color: red;">*</span> Last Name:</label>
                <input type="text" class="form-control" id="last-name" name="last-name" placeholder="Last Name">
              </div>
              <div>
                <p><span style="color: red;">*</span> Biography:</p>
                <textarea id="biography" name="biography" rows="4" cols="50" placeholder="  Please Input Your Biography"></textarea>
                </textarea>
              </div>
              <div>
                <p><span style="color: red;">*</span> Gender:</p>
                    <input type="radio" id="html" name="gender" value="HTML">
                      <label for="html">Man</label><br>
                    <input type="radio" id="css" name="gender" value="CSS">
                      <label for="css">Woman</label><br>
              </div>
              <div class="form-group">
                <label for="email"><span style="color: red;">*</span> Email:</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="example@email.com">
              </div>
              <div class="form-group">
                <label for="phone"> <span style="color: red;">*</span> Phone Number:</label>
                <input type="text" class="form-control" id="phone" name="phone" placeholder="Please Input Your Phone Number">
              </div>
              <div class="form-group">
                <label for="age"> <span style="color: red;">*</span> Age:</label>
                <input type="text" class="form-control" id="age" name="age" placeholder="Your Age">
              </div>
              <div class="form-group">
                <label for="url"> <span style="color: red;">*</span> Website Url:</label>
                <input type="url" class="form-control" id="url" name="url" placeholder="Your Website Url">
              </div>
              <div class="form-group">
                <label for="nationality"> <span style="color: red;">*</span> Nationality:</label>
                <input type="text" class="form-control" id="nationality" name="nationality" placeholder="Your Nationality">
              </div>
              <button type="submit" class="btn btn-default" style="background-color: brown;">
                <span style="color: White;">Submit</span></button>
            </form>
          </div>
          <br>
          </body> 
          </html>
          
    </body>
</html>