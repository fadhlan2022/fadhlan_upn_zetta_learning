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
                <?php
                $first = $_POST['first_name'];
                $last = $_POST['last_name'];
                $biography = $_POST['biography'];
                $gender = $_POST['gender'];
                $email = $_POST['email'];
                $phone = $_POST['phone'];
                $age = $_POST['age'];
                $url = $_POST['url'];
                $nationality = $_POST['nationality'];
                ?>
                <center>
                <table border="1">
                <tr>
                  <td><?php echo 'First Name'?></td>
                  <td><?php echo $first;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Last Name'?></td>
                  <td><?php echo $first;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Biography';?></td>
                  <td><?php echo $biography;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Gender';?></td>
                  <td><?php echo $gender;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Email';?></td>
                  <td><?php echo $email;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Phone';?></td>
                  <td><?php echo $phone;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Age';?></td>
                  <td><?php echo $age;?></td>
                </tr>
                <tr>
                  <td><?php echo 'Website URL';?></td>
                  <td><?php echo $url;?></td>
                </tr>
                </table>
                </center>
          </div>
          <br>
          </body> 
          </html>
          
    </body>
</html>