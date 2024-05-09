/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
    const locals ={
        title: "NodeJS Notes",
        description: "Free NodeJS Notes App"
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * GET /
 * About
 */
exports.about = async (req, res) => {
    const locals ={
        title: "About NodeJS Notes",
        description: "About NodeJS Notes App"
    }

    res.render('about', locals);
}

/**
 * GET /
 * Features
 */
exports.features = async (req, res) => {
    const locals ={
        title: "Features",
        description: "Features"
    }

    res.render('features', locals);
}