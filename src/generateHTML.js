const generateHTML = (data) => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
</head>
<body>
    <div class='container'>
        <div class='row'>
            <div class='col'>
                <h1>Employees</h1>
            </div>
        </div>
    </div>

    <div class='container'>
        <div class='row'>
            <div class='col'>
                <h2>Team ${data.getRole()}: ${data.name}</h2>
            </div>
        </div>
    </div>
    
</body>
</html>
`
}

module.exports = generateHTML;