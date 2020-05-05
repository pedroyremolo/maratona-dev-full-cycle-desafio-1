const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.write(`
    <html>
    <head><title>Maratona Full Cycle</title></head>
    <body><h1>Maratona Full Cycle 2.0</h1><body>
    </html>
    `);
    return res.end();
}

exports.handler = requestHandler;