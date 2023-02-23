const appendHTML = (data) => {
    if (data.school) {
        return `            <div class='col-sm-6 col-md-4 col-lg-3'>
                <div class="card h-100 mt-2">
                    <div class="card-body">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${data.getRole()}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">email: <a href=mailto:"${data.email}">${data.email}</a></li>
                            <li class="list-group-item">School: ${data.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
`
    } else if (data.github) {
        return `            <div class='col-sm-6 col-md-4 col-lg-3'>
                <div class="card h-100 mt-2">
                    <div class="card-body">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${data.getRole()}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">email: <a href=mailto:"${data.email}">${data.email}</a></li>
                            <li class="list-group-item">github: <a target="_blank" rel="noopener noreferrer" href="http://github.com/${data.github}">${data.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
`
    } else if (data === 'end') {
        return `        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</body>
</html>`
    }
    
}

module.exports = appendHTML;