import * as restify from 'restify';

// criar servidor
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});

//middlewares
server.use(restify.plugins.queryParser()); //parser de querystring

// ex uso dos métodos do obj response
// server.get('/info', (req, resp, next) => {

//     // resp.contentType = 'application/json';
//     // resp.setHeader('Content-Type', 'application/json');
//     // resp.status(200);
//     // resp.send('hello');

//     resp.json({
//         browser: req.userAgent(),
//         method: req.method,
//         url: req.href,
//         path: req.path(),
//         query: req.query
//     });

//     return next();
// });

// array de callbacks para responder url
server.get('/info', [
    (req, resp, next) => { 
        if(req.userAgent() && req.userAgent().includes('MSIE 7.0')) {

            // definir erro na resposta usando status e json
            // resp.status(400);
            // resp.json({message:'Update your browser'});

            // ou criando obj erro
            let error: any = new Error();
            error.statusCode = 400;
            error.message = 'Update your browser';

            //passando false ou um obj indica que não deve processar o próximo callback
            return next(error); 
        }

        return next();
    },
    (req, resp, next) => {

        // meios para definir tipo de retorno, status etc (json encapsula estas chamadas)
        // resp.contentType = 'application/json';
        // resp.setHeader('Content-Type', 'application/json');
        // resp.status(200);
        // resp.send('hello');

        resp.json({
            browser: req.userAgent(),
            method: req.method,
            url: req.href,
            path: req.path(),
            query: req.query
        });

        return next();
    }]);

// start servidor na porta indicada
server.listen(3000, () => {
    console.log('API started');
});