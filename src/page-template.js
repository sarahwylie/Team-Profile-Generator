


const createTeam = (team) => {
    const Manager = (manager) => {
        return `
            <div class="card col-12 col-md-6 mb-2 bg-secondary text-info p-3 flex-column font-weight-bold">
                <h3 class="card-header text-light"><i class="fas fa-user-tie"></i>${manager.getRole()}</h3>
                    <div class="card-body">
                    <h4 class="card-title">${manager.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.office}</li>
                        </div>
                    </div>
    `;
    }
    const Engineer = (engineer) => {
        return `
            <div class="card col-12 col-md-6 mb-2 bg-secondary text-info p-3 flex-column font-weight-bold">
                <h3 class="card-header text-light"><i class="fas fa-hard-hat"></i>${engineer.getRole()}</h3>
                    <div class="card-body">
                    <h4 class="card-title">${engineer.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                        </div>
                    </div>
    `;
    }
    const Intern = (intern) => {
        return `
            <div class="card col-12 col-md-6 mb-2 bg-secondary text-info p-3 flex-column font-weight-bold">
                <h3 class="card-header text-light"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h3>
                    <div class="card-body">
                    <h4 class="card-title">${intern.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                        </div>
                    </div>
    `;
    }
    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => Manager(manager)))
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => Engineer(engineer)).join(''))
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => Intern(intern)).join(''))
    return html.join('')
}


module.exports = pageHTML => {
    return `
                < !DOCTYPE html >
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <meta http-equiv="X-UA-Compatible" content="ie-edge">
                                        <title>Team Profile!</title>
                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                                            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                                                <link rel="stylesheet" href="style.css">
                                                </head>

                                                <body>
                                                    <header>
                                                        <div class="container flex-row justify-space-between align-center py-3">
                                                            <h1 class="page-title text-info bg-secondary font-weight-bold py-2 px-3">Team Profile</h1>
                                                        </div>
                                                    </header>
                                                    <main class="container my-5">
                                                        ${createTeam(pageHTML)}
                                                    </div>
                                                </section>
                                            </main>
                                            <footer class="container text-center py-3">
                                                <h5 class="text-dark"><sup>&copy</sup>; ${new Date().getFullYear()} by Sarah Wylie Productions</h5>
                                            </footer>
                                        </body>
                                    </html>
                                    `;
};