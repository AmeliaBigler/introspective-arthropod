const generateHTML = (data) => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
    </nav>

    <div class='container'>
        <div class='row'>
            <div class='col-sm-6 col-md-4 col-lg-3'>
                <div class="card h-100 mt-2">
                    <div class="card-body">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${data.getRole()}</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${data.id}</li>
                                <li class="list-group-item">email: <a href=mailto:"${data.email}">${data.email}</a></li>
                                <li class="list-group-item">office phone: ${data.officeNumber}</li>
                            </ul>
                    </div>
                </div>
            </div>
`
}

module.exports = generateHTML;