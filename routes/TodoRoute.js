const {Router} = require("express")
const { getToDo, saveToDO, updatetoDo, deletetoDo } = require("../controllers/TodoControllers")
const router = Router()

router.get('/',getToDo)
router.post('/save',saveToDO)
router.post('/update',updatetoDo)
router.post('/delete',deletetoDo)

module.exports = router