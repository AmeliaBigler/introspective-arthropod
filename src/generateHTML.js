const generateHTML = (data) => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
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
            <div class='col-4'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${data.getRole()}</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${data.id}</li>
                                <li class="list-group-item">email: ${data.email}</li>
                                <li class="list-group-item">office phone: ${data.officePhone}</li>
                            </ul>
                    </div>
                </div>
            </div>
`
}

module.exports = generateHTML;