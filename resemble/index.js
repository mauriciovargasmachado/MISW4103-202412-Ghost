const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const readline = require('readline');

const { scenarios, options } = config;

async function executeTest() {

    // Useful variables.
    let resultInfo = []
    let datetime = new Date().toISOString().replace(/:/g, ".");
    // Print menu.
    printMenu(scenarios);

    // Waiting for user to select a scenario.
    const ans = await askQuestion("Escribe el # del escenario deseado para el VTR:  ");

    // Trying to match user input with avaliable scenarios.
    var selectedScenario = null;
    scenarios.forEach(scenario => {
        if (scenario.id == ans) {
            selectedScenario = scenario
        }
    });

    if (selectedScenario == null) {
        console.log("ERROR: Has ingresado un escenario inválido, vuelve a ejecutar el script.");
        return;
    }

    // Validating that the folders exists
    if (!fs.existsSync(selectedScenario.new_version_path)) {
        console.error(`\nERROR: El folder con los screenshots de la versión actual de Ghost para el escenario no existe.`)
        console.error(`ERROR: Deberá ejecutar el test desde Kraken para que el folder sea creado.`)
        return;
    }

    if (!fs.existsSync(selectedScenario.old_version_path)) {
        console.error(`\nERROR: El folder con los screenshots de la versión antigua de Ghost para el escenario no existe.`)
        console.error(`ERROR: Deberá ejecutar el test desde Kraken para que el folder sea creado.`)
        return;
    }

    // Validating that there are images to compare in each folder.
    if (isDirEmpty(selectedScenario.new_version_path)) {
        console.error(`\nERROR: El folder con los screenshots de la versión actual de Ghost está vacio.`)
        console.error(`ERROR: Deberá ejecutar el test desde Kraken para que los screenshots sean creados.`)
        return;
    }

    if (isDirEmpty(selectedScenario.old_version_path)) {
        console.error(`\nERROR: El folder con los screenshots de la versión antigua de Ghost está vacio.`)
        console.error(`ERROR: Deberá ejecutar el test desde Kraken para que los screenshots sean creados.`)
        return;
    }


    // Here starts the process.
    let files = fs.readdirSync(selectedScenario.new_version_path);

    inner: for (let file of files) {
        console.log(`INFO: Empezando a comparar imagen... ${file}`);
        console.log(`INFO: Buscando su contraparte...`);

        if (fs.existsSync(`${selectedScenario.old_version_path}${file}`)) {
            console.log(`INFO: Contraparte encontrada!`);
        } else {
            console.log(`WARN: No se encontró la contraparte.`);
            continue inner;
        }

        // Comparing images
        console.log(`INFO: Comparando...`);
        const data = await compareImages(
            fs.readFileSync(`${selectedScenario.new_version_path}${file}`),
            fs.readFileSync(`${selectedScenario.old_version_path}${file}`),
            options
        );
        //console.log(data)
        console.log(`SUCCESS: Comparación terminada!`);

        // Saving results
        resultInfo.push(
            {
                filename: file,
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }
        )
    }

    console.log("\nINFO: Generando reporte...");

    // Creating the results folder if doesn't exists.
    if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    fs.writeFileSync(`./results/${datetime}/report_${selectedScenario.internal_name}.html`, createReport(datetime, resultInfo, selectedScenario));

    console.log('------------------------------------------------------------------------------------')
    console.log("Ejecución terminada. Revisa el reporte en la carpeta de resultados.")
    return resultInfo;
}

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Helper Methods
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

function isDirEmpty(dirname) {
    return fs.readdirSync(dirname).length === 0;
}

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

function printMenu(scenarios) {
    console.log("\r\n __     __  _____   ____                                                     \r\n \\ \\   \/ \/ |_   _| |  _ \\      ___    ___    _ __                            \r\n  \\ \\ \/ \/    | |   | |_) |    \/ __|  \/ _ \\  | \'_ \\                           \r\n   \\ V \/     | |   |  _ <    | (__  | (_) | | | | |                          \r\n    \\_\/      |_|   |_| \\_\\    \\___|  \\___\/  |_| |_|                          \r\n  ____                                    _       _                _   ____  \r\n |  _ \\    ___   ___    ___   _ __ ___   | |__   | |   ___        | | \/ ___| \r\n | |_) |  \/ _ \\ \/ __|  \/ _ \\ | \'_ ` _ \\  | \'_ \\  | |  \/ _ \\    _  | | \\___ \\ \r\n |  _ <  |  __\/ \\__ \\ |  __\/ | | | | | | | |_) | | | |  __\/   | |_| |  ___) |\r\n |_| \\_\\  \\___| |___\/  \\___| |_| |_| |_| |_.__\/  |_|  \\___|    \\___\/  |____\/ \r\n                                                                             \r\n");
    console.log('------------------------------------------------------------------------------------\n')
    console.log("Este script está preparado para ejecutar VRT a cinco (05) escenarios\n" +
        "de pruebas hechos con Kraken. Selecciona uno de los siguientes escenarios:\n");
    console.log("Escenarios disponibles:\n");
    scenarios.forEach(scenario => {
        console.log(`${scenario.id}. ${scenario.name}`);
    });
    console.log('\n------------------------------------------------------------------------------------\n')
}

function createReport(datetime, resInfo, selectedScenario) {
    return `
    <?xml version="1.0" encoding="utf-8"?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:mg="http://www.araxis.com/2002/Merge/Reporting">

    <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <title>VRT Report</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    </head>

    <body style="margin: 20px;">
    <h1 align="center"><strong>Resultados de la VRT usando Resemble JS</strong></h1>
    <p align="center">Generada por <strong>MISO</strong> el ${datetime}</strong>.
        Este informe utiliza HTML y CSS y se ve mejor con un navegador moderno que cumpla con los estándares.</p>

    <h4><strong>1.&nbsp;Directorios comparados</strong></h4>
    <table class="table table-striped table-hover table-bordered w-auto">
        <thead>
        <tr>
            <th>Rutas</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>${selectedScenario.new_version_path}</td>
        </tr>
        <tr>
            <td>${selectedScenario.old_version_path}</td>
        </tr>
        </tbody>
    </table>

    <h4><strong>2.&nbsp;Detalle de la comparación</strong></h4>

        ${resInfo.map(info => {
        return `
            <p><strong>${info.filename}</strong></p>
            <table class="table table-striped table-hover table-bordered table-responsive">
                <thead>
                <tr>
                    <th>Versión Nueva</th>
                    <th>Versión Antigua</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img class="img-fluid" src="${selectedScenario.path_for_report}${selectedScenario.internal_name}/${info.filename}"></img></td>
                    <td><img class="img-fluid" src="${selectedScenario.path_for_report}${selectedScenario.internal_name}_old/${info.filename}"></img></td>
                </tr>
                </tbody>
            </table>

            <table class="table table-striped table-hover table-bordered w-auto">
                <thead>
                <tr>
                    <th scope="col">Parámetro</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>isSameDimensions</td>
                    <td>${info.isSameDimensions}</td>
                </tr>
                <tr>
                    <td>dimensionDifference</td>
                    <td>${JSON.stringify(info.dimensionDifference)}</td>
                </tr>
                <tr>
                    <td>rawMisMatchPercentage</td>
                    <td>${info.rawMisMatchPercentage}</td>
                </tr>
                <tr>
                    <td>misMatchPercentage</td>
                    <td>${info.misMatchPercentage}</td>
                </tr>
                <tr>
                    <td>diffBounds</td>
                    <td>${JSON.stringify(info.diffBounds)}</td>
                </tr>
                <tr>
                    <td>analysisTime</td>
                    <td>${info.analysisTime}</td>
                </tr>
                </tbody>
            </table>`
    })}

    <p class="copyright" style="margin-top: 25px; padding-top: 2px; border-top: solid #a0a0a0 1px; max-width: none;">
        Copyright &copy; 2024, MISW41013 - Pruebas automatizadas de software.</p>
    </body>
    </html>`
}

(async () => await executeTest())();