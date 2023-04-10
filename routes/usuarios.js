const usercontroller = require('../controllers/usercontroller')
module.exports = (app) => {
    app.route('/usuarios').get(usercontroller.getusuarios);
    app.route('/usuario').post(usercontroller.createusuario);
}