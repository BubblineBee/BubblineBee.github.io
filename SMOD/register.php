<!DOCTYPE html>
<html>
    <head>
        <title>Project: SMOD</title>
        <link rel="stylesheet" href="./byle.css">
    </head>
    <body>
        <h2>Register User.</h2>
        <form action="<?php echo htmlspecialchars("regcomp.php") ?>" method="post">
            Username: <input type="text" name="name"><br>
            Password: <input type="password" name="pass"><br>
            <input type="submit">
        </form>
    </body>
</html>