import { Router, response } from 'express'
import { CreateCustomerController } from '../modules/create-client/create-client.controller';

const router = Router();

router.post("/customers", (request, reponse) => {
  new CreateCustomerController().handle(request, response)
})

export { router }