const Router = require('express')
const router = new Router()
const executorController = require('../controllers/executorController')

router.post('/', executorController.create)
router.get('/', executorController.get)
router.put('/', executorController.update)

router.put('/skill', executorController.executorSkillSet)
router.get('/skill', executorController.executorSkillGet)

router.put('/duty', executorController.executorDutySet)
router.get('/duty', executorController.executorDutyGet)

module.exports = router