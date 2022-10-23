import express from 'express'
import controller from './controller'
// import { adminAuthentication } from '../../middleware';

const  router = express.Router()

// router.post('/:id', controller.create)
router.patch('/:id', controller.update)
router.post('/', controller.index)
router.get('/:id', controller.show)
router.delete('/:id', controller.deleteRecord)


export default router
