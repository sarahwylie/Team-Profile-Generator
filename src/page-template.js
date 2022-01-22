


const createTeam = (team) => {
    const Manager = (manager) => {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
        <div class="card" style="width: 18rem;">
        <h3 class="card-title text-light"><i class="fas fa-user-graduate"></i>${manager.getRole()}</h3>
    </div>
        `
    }
    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => Manager(manager)))
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => Engineer(engineer)).join(''))
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => Intern(intern)).join(''))
    return html.join('')
}


const getIcon = () => {
    if (getRole() === Engineer) {
        return `
    <i class="fas fa-hard-hat"></i>
    `} else if (getRole() === Intern) {
        return `
        <i class="fas fa-user-graduate"></i>
`    } else if (getRole() === Manager) {
        return `
    <i class="fas fa-user-graduate"></i>
`
    }
}

`
        <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
            <div class="card" style="width: 18rem;">
            <h3 class="card-title text-light">${getIcon} ${getRole}</h3>
            <h5 class="portfolio-languages">
            </h5>
            <p>generate portfolios!</p>
            <a href="sarahwylie.github.io/portfolio-generator" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
`


module.exports = pageHTML => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie-edge">
                            <title>Portfolio Demo</title>
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
                                        <section class="my-3" id="card">
                                        <div class="flex-row justify-space-between">
                                        ${createTeam(pageHTML)}
                                        </div>
                                        </section>
                                        </main>
                                        <footer class="container text-center py-3">
                                            <h3 class="text-dark"><sup>&copy</sup>; ${new Date().getFullYear()} by Sarah Wylie Productions</h3>
                                        </footer>
                                    </body>
                                </html>
                                `;
};