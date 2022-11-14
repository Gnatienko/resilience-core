const Router = require('express')
const router = new Router()
const executorController = require('../controllers/executorController')

router.post('/', executorController.create)
router.get('/', executorController.get)
router.put('/', executorController.update)

router.put('/skill', executorController.setSkill)
router.get('/skills', executorController.getSkills)


router.put('/duty', executorController.setDuty)
router.get('/duty', executorController.getDuties)

module.exports = router